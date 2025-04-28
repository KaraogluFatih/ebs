export interface ContactInfo {
  organization: string;
  street: string;
  postalCode: string;
  city: string;
  phone?: string;
  email?: string;
  coordinates: [number, number];
}
