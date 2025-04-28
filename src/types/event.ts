export interface Event {
  id: string;
  title: string;
  descriptionShort?: string;
  descriptionLong?: string;
  tags?: { tag: string }[]; // or just string[] if you flatten it
  date: string; // ISO date string, e.g. "2025-05-30"
  time?: string; // "14:00 Uhr"
  location?: string;
  image?: {
    url: string;
    alt?: string;
  };
  organizer?: string;
  category: "Gottesdienst" | "Vortrag" | "Musik" | "Bibelkreis" | "Kinder";
  cost?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  createdAt: string;
  updatedAt: string;
}
