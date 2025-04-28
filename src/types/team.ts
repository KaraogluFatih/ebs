export interface Team {
  sectionLabel: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: {
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
