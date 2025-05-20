import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  Share2,
  Download,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getEventById } from "@/data-access/collections/events";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SignupDialog } from "@/components/events/event-sign-up-form";
import type { SerializedEditorState, SerializedLexicalNode } from "lexical";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = await getEventById(id);

  if (event === undefined) {
    return <div>Ups da ist etwas schiefgelaufen!</div>;
  }

  const parsedRichText: SerializedEditorState<SerializedLexicalNode> | null =
    event?.descriptionLong ?? null;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Link
              href="/events"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Zurück zu allen Veranstaltungen
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={event?.image?.url || "/placeholder.svg"}
                    alt={event?.image?.alt || "event picture"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1">
                      {event?.category}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    {event?.title}
                  </h1>
                  <RichText data={parsedRichText} />
                </div>

                <Separator />

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Datum</p>
                      <p className="text-muted-foreground">
                        {new Intl.DateTimeFormat("de-DE", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(event?.date || ""))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Uhrzeit</p>
                      <p className="text-muted-foreground">{event?.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Ort</p>
                      <p className="text-muted-foreground">{event?.location}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Details
                  </h2>
                  <div className="prose max-w-none">
                    <RichText data={parsedRichText} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Anmeldung
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Kosten:</span>
                    <span className="font-medium">{event?.cost}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Veranstalter:</span>
                    <span className="font-medium">{event?.organizer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Teilnehmer:</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="font-medium">
                        {event?.currentParticipants}/{event?.maxParticipants}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <SignupDialog eventId={event?.id} eventTitle={event?.title} />
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="flex-1">
                      <Share2 className="h-4 w-4" />
                      <span className="ml-2">Teilen</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
