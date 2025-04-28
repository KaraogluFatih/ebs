import { getEvents } from "@/data-access/collections/events";
import { redirect } from "next/navigation";
import EventsFilter from "@/components/events/events-filter";
import EventsTabs from "@/components/events/event-tabs";

interface EventsPageProps {
  searchParams?: {
    page?: string;
    search?: string;
  };
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const currentPage = Number(searchParams?.page ?? "1");
  const searchQuery = searchParams?.search ?? "";

  if (currentPage < 1) redirect("/events");

  const events = await getEvents(1, 9, searchQuery);

  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">
                Veranstaltungen
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Entdecken Sie unsere vielfältigen Bildungs- und
                Gemeinschaftsangebote in Kempten und Umgebung
              </p>
            </div>
          </div>
          <EventsFilter defaultSearch={searchQuery} />
          <EventsTabs
            search={searchQuery}
            currentPage={currentPage}
            totalPages={events.totalPages}
            events={events.events}
          />
        </div>
      </main>
    </div>
  );
}
