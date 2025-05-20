"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const LocationMap = dynamic(() => import("./location-map"), {
  ssr: false,
});

interface Props {
  coordinates: [number, number];
  popupContent?: ReactNode;
  className?: string;
}

export default function LocationMapWrapper(props: Props) {
  return <LocationMap {...props} />;
}
