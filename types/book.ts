export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  coverImage: string;
  description: string;
  pages?: number;
  year?: number;
  downloadUrl?: string;
  purchaseUrl?: string;
  isNew?: boolean;
}
