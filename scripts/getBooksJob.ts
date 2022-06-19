// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'
import { fetch } from 'cross-undici-fetch'

import { Book, BookList, BookListResponse } from '$api/types/NYTTypes'

const bookerApiKey = 'uxzuQ7FX6nGvXhPQvvgAoQFqIf3f14vP'

export default async () => {
  // Your script here...

  await db.$connect()

  const bookLists = await getBookLists()

  for (const list of bookLists) {
    const books = await getListBooks(list)

    if (!books.results?.books) {
      console.log(
        `No books found for list ${list.list_name_encoded}, continuing`
      )

      continue
    }

    for (const book of books.results.books) {
      await storeBooks(book)
    }
  }
}

async function getBookLists(): Promise<BookList[]> {
  const bookListsResponse = await (
    await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${bookerApiKey}`
    )
  ).json()

  return bookListsResponse.results as BookList[]
}

async function getListBooks(list: BookList): Promise<BookListResponse> {
  const booksResponse = await (
    await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${list.list_name_encoded}.json?api-key=${bookerApiKey}`
    )
  ).json()

  return booksResponse as BookListResponse
}

async function storeBooks(book: Book) {
  const dbBook = await db.book.findFirst({
    where: {
      Isbn: {
        every: {
          isbn10: {
            equals: String(book.primary_isbn10),
          },
        },
      },
    },
  })

  if (dbBook) {
    console.log('Found matching book, title: ', book.title)

    return
  }

  console.log('Adding book: ', book.title)

  await db.book.create({
    data: {
      title: book.title,
      author: book.author,
      description: book.description,
      coverImageUrl: book.book_image,
      amazonUrl: book.amazon_product_url,
      Isbn: {
        create: {
          isbn10: String(book.primary_isbn10),
          isbn13: book.primary_isbn13,
        },
      },
    },
  })
}
