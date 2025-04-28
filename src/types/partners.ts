export interface Partners {
  sectionLabel: string;
  title: string;
  description: string;
  partners: PartnerItem[];
}

export interface PartnerItem {
  name: string;
  website: string;
  logo: {
    id: string;
    url: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width?: number;
    height?: number;
    alt?: string;
  };
}
