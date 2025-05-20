"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Fix for Leaflet marker icons in Next.js
const fixLeafletIcon = () => {
  // Only run on client
  if (typeof window !== "undefined") {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }
};

// Custom marker icon
const createCustomIcon = () => {
  return new L.DivIcon({
    className: "custom-icon",
    html: `<div class="marker-pin bg-accent p-2 rounded-full shadow-md">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-primary h-5 w-5">
               <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
               <circle cx="12" cy="10" r="3"></circle>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

interface LocationMapProps {
  className?: string;
  coordinates: [number, number];
  popupContent?: React.ReactNode;
}

export default function LocationMap({
  className = "",
  coordinates,
  popupContent,
}: LocationMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fixLeafletIcon();
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        className={`h-[400px] w-full rounded-xl bg-primary/5 flex items-center justify-center ${className}`}
      >
        <MapPin className="h-8 w-8 text-accent animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`h-[400px] w-full rounded-xl overflow-hidden ${className}`}>
      <MapContainer
        center={coordinates}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={createCustomIcon()}>
          <Popup>{popupContent}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
