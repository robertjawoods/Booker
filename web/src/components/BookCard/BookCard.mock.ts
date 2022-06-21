import { BookCardItem } from './BookCard'

export const standard = (): BookCardItem => {
  return {
    description:
      'Separated from his crew, an astronaut embarks on a quest to stay alive on Mars. The basis of the movie.',
    title: 'THE MARTIAN',
    author: 'Andy Weir',
    coverImageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91vD1AcmV-L.jpg',
    amazonUrl:
      'http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20',
    Isbn: [
      {
        isbn10: '804139024',
        isbn13: '9780804139021',
      },
    ],
  }
}
