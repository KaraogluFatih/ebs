import { Clock, MapPin } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Event } from "@/types/event";
import Link from "next/link";
import { Button } from "../ui/button";

interface EventItemProps {
  event: Event[];
}

export default function EventPreviewList({ event }: EventItemProps) {
  return (
    <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
      {event.map((item, index) => (
        <div
          key={item.id || index}
          className="group flex flex-col overflow-hidden rounded-xl border border-accent/20 bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={item.image?.url || "/placeholder.jpg"}
              alt={item.image?.alt || item.title}
              sizes="100vw"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-accent text-primary font-medium px-4 py-1">
              {new Date(item.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
          </div>

          <div className="flex flex-col space-y-3 p-5 flex-grow">
            <div className="space-y-1">
              <h3 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>{item.time || "Uhrzeit folgt"}</span>
                <MapPin className="h-4 w-4 text-accent ml-2" />
                <span>{item.location || "Ort folgt"}</span>
              </div>
            </div>

            <p className="text-base flex-grow">
              {item.descriptionShort ||
                "Weitere Informationen folgen in Kürze."}
            </p>

            <div className="pt-3">
              <Link href={`events/${item.id}`}>
                <Button className="w-full text-base bg-primary hover:bg-primary/90">
                  Details & Anmeldung
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
