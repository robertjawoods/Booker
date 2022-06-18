export interface Book {
  book_id: number;
  name: string;
  cover: string;
  url: string;
}

export interface BookData {
  book_id: number;
  name: string;
  cover: string;
  url: string;
  authors: string[];
  rating: number;
  pages: number;
  published_date: string;
  synopsis: string;
}