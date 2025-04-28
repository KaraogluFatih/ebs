import React from "react";
import { ChevronRight } from "lucide-react";
import { Event } from "@/types/event";
import Link from "next/link";
import EventPreviewList from "./event-preview-item";
import { Button } from "../ui/button";

interface EventPreviewContentProps {
  events: Event[];
}

export default function EventsPreview({ events }: EventPreviewContentProps) {
  return (
    <section className="w-full py-8 md:py-2 lg:py-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center justify-center">
                <div className="h-1 w-12 bg-accent mr-4"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                  Kommende Veranstaltungen
                </h2>
                <div className="h-1 w-12 bg-accent ml-4"></div>
              </div>
              <p className="text-lg text-muted-foreground md:text-xl">
                Entdecken Sie unsere vielfältigen Bildungs- und
                Gemeinschaftsangebote
              </p>
            </div>
          </div>

          {/* Display only first 3 events */}
          <EventPreviewList event={events.slice(0, 3)} />

          <div className="flex justify-center mt-10">
            <Link href="/events" passHref>
              <Button
                variant="outline"
                className="text-base border-primary text-primary hover:bg-primary/10"
              >
                Alle Veranstaltungen anzeigen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
