"use client";

import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Badge } from "../ui/badge";
import { Event } from "@/types/event";
import EventsPagination from "./events-pagination";

interface EventsTabsProps {
  events: Event[];
  currentPage: number;
  totalPages: number;
  search: string;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export default function EventsTabs({
  events,
  currentPage,
  totalPages,
  search,
}: EventsTabsProps) {
  const categories = ["geschichte", "theologie", "gemeinde", "musik"];

  return (
    <div className="mt-8">
      <Tabs defaultValue="all">
        <TabsList className="mb-6 flex flex-wrap gap-2">
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events
                .filter(
                  (event) => event.category?.toLowerCase() === cat.toLowerCase()
                )
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <EventsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        search={search}
      />
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.id}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary">
        <div className="aspect-video relative">
          <Image
            src={event.image?.url || "/placeholder.svg"}
            alt={event.image?.alt || "Veranstaltungsbild"}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader className="p-5 pb-3">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4 mr-1 text-yellow-500" />
            <span>{formatDate(event.date)}</span>
            <span className="mx-2">•</span>
          </div>
          <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 pt-1">
          <p className="text-muted-foreground line-clamp-3">
            {event.descriptionShort}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex justify-between items-center">
          <Badge className="bg-primary/10 text-primary capitalize">
            {event.category}
          </Badge>
          <span className="text-primary font-medium group-hover:text-accent transition-colors">
            Anmelden
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
