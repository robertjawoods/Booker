export interface BookList {
  list_name: string
  display_name: string
  list_name_encoded: string
  oldest_published_date: string
  newest_published_date: string
  updated: string
}

export interface Isbn {
  isbn10: number
  isbn13: string
}

export interface Book {
  rank: number
  rank_last_week: number
  weeks_on_list: number
  asterisk: number
  dagger: number
  primary_isbn10: number
  primary_isbn13: string
  publisher: string
  description: string
  price: number
  title: string
  author: string
  contributor: string
  contributor_note: string
  book_image: string
  amazon_product_url: string
  age_group: string
  book_review_link: string
  first_chapter_link: string
  sunday_review_link: string
  article_chapter_link: string
  isbns: Isbn[]
}

export interface Results {
  list_name: string
  bestsellers_date: string
  published_date: string
  display_name: string
  normal_list_ends_at: number
  updated: string
  books: Book[]
  corrections: string[]
}

export interface BookListResponse {
  status: string
  copyright: string
  num_results: number
  last_modified: Date
  results: Results
}
