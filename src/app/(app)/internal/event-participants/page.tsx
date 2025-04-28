// app/intern/teilnehmer/page.tsx
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function EventParticipantsPage() {
  const token = (await cookies()).get("payload-token")?.value;

  if (!token) {
    return (
      <div className="text-center text-red-500 mt-10">
        🚫 Zugriff verweigert – bitte einloggen
      </div>
    );
  }

  const res = await fetch(`http://localhost:3000/api/eventsignups`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Signups fetch failed:", res.status, errorText);
    return <div className="text-red-600">⚠️ Fehler beim Laden der Daten</div>;
  }

  const { docs: signups } = await res.json();

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Anmeldungen</h1>
      <div className="space-y-4">
        {signups.map((s: any) => (
          <Card key={s.id}>
            <CardHeader>
              <CardTitle>{s.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                <strong>E-Mail:</strong> {s.email}
              </p>
              <p>
                <strong>Event:</strong> {s.event}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
