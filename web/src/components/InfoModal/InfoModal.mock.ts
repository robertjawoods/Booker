import { Book } from 'src/pages/SwipePage/BookResponse'

export const standard = (): Book => {
  return {
    rank: 1,
    rank_last_week: 0,
    weeks_on_list: 60,
    asterisk: 0,
    dagger: 0,
    primary_isbn10: 553418025,
    primary_isbn13: '9780553418026',
    publisher: 'Broadway',
    description:
      'Separated from his crew, an astronaut embarks on a quest to stay alive on Mars. The basis of the movie.',
    price: 0,
    title: 'THE MARTIAN',
    author: 'Andy Weir',
    contributor: 'by Andy Weir',
    contributor_note: '',
    book_image:
      'https://images-na.ssl-images-amazon.com/images/I/91vD1AcmV-L.jpg',
    amazon_product_url:
      'http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20',
    age_group: '',
    book_review_link: '',
    first_chapter_link: '',
    sunday_review_link: '',
    article_chapter_link: '',
    isbns: [
      {
        isbn10: 804139024,
        isbn13: '9780804139021',
      },
    ],
  }
}
