export type Video = {
  id: string;
  title: string;
  description: string;
  category: "Gottesdienst" | "Vortrag" | "Musik" | "Bibelkreis" | "Kinder";
  date: string; // ISO format (e.g. "2025-03-10")
  views: number;
  duration: string; // "1:12:36"
  thumbnail: {
    id: string;
    url: string;
    filename: string;
  };
  videoFile?: {
    id: string;
    url: string;
    filename: string;
  };
};
