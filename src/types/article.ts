export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  readTime?: string;
  shortDescription?: string;
  content: any;
  category?: string;
  image?: {
    url: string;
    alt?: string;
  };
}
