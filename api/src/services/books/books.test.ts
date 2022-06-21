import { books, book, createBook, updateBook, deleteBook } from './books'
import type { StandardScenario } from './books.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('books', () => {
  scenario('returns all books', async (scenario: StandardScenario) => {
    const result = await books()

    expect(result.length).toEqual(Object.keys(scenario.book).length)
  })

  scenario('returns a single book', async (scenario: StandardScenario) => {
    const result = await book({ id: scenario.book.one.id })

    expect(result).toEqual(scenario.book.one)
  })

  scenario('creates a book', async () => {
    const result = await createBook({
      input: {
        description: 'String',
        title: 'String',
        author: 'String',
        coverImageUrl: 'String',
        amazonUrl: 'String',
      },
    })

    expect(result.description).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.author).toEqual('String')
    expect(result.coverImageUrl).toEqual('String')
    expect(result.amazonUrl).toEqual('String')
  })

  scenario('updates a book', async (scenario: StandardScenario) => {
    const original = await book({ id: scenario.book.one.id })
    const result = await updateBook({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a book', async (scenario: StandardScenario) => {
    const original = await deleteBook({ id: scenario.book.one.id })
    const result = await book({ id: original.id })

    expect(result).toEqual(null)
  })
})
