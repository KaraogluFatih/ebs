export interface OpeningHours {
  title: string;
  entries: OpeningHoursEntry[];
}

export interface OpeningHoursEntry {
  days: string;
  time: string;
}
