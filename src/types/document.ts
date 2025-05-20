export interface Document {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  description?: string;
  category:
    | "Gemeindebrief"
    | "Bericht"
    | "Gottesdienst"
    | "Formular"
    | "Flyer"
    | "Fotos";
  downloads?: number;
  document: {
    createdAt: Date;
    updatedAt: Date;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    id: string;
    url: string;
    thumbnailURL: string;
  };
  createdAt: string;
  updatedAt: string;
}
