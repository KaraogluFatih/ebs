"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const LocationMap = dynamic(() => import("@/components/location-map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-xl bg-primary/5 flex items-center justify-center">
      <MapPin className="h-8 w-8 text-accent animate-pulse" />
    </div>
  ),
});

interface LocationSectionProps {
  coordinates: [number, number];
  directions: { label: string; description: string }[];
}

export default function LocationSection({
  coordinates,
  directions,
}: LocationSectionProps) {
  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-lg">
        <LocationMap className="h-[500px]" coordinates={coordinates} />
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-3">
        {directions.map((option) => (
          <div key={option.label} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-4">{option.label}</h3>
            <p className="text-muted-foreground">{option.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
