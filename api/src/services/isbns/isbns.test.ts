import { isbns, isbn, createIsbn, updateIsbn, deleteIsbn } from './isbns'
import type { StandardScenario } from './isbns.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('isbns', () => {
  scenario('returns all isbns', async (scenario: StandardScenario) => {
    const result = await isbns()

    expect(result.length).toEqual(Object.keys(scenario.isbn).length)
  })

  scenario('returns a single isbn', async (scenario: StandardScenario) => {
    const result = await isbn({ id: scenario.isbn.one.id })

    expect(result).toEqual(scenario.isbn.one)
  })

  scenario('creates a isbn', async (scenario: StandardScenario) => {
    const result = await createIsbn({
      input: {
        bookId: scenario.isbn.two.bookId,
        isbn10: 'String',
        isbn13: 'String',
      },
    })

    expect(result.bookId).toEqual(scenario.isbn.two.bookId)
    expect(result.isbn10).toEqual('String')
    expect(result.isbn13).toEqual('String')
  })

  scenario('updates a isbn', async (scenario: StandardScenario) => {
    const original = await isbn({ id: scenario.isbn.one.id })
    const result = await updateIsbn({
      id: original.id,
      input: { isbn10: 'String2' },
    })

    expect(result.isbn10).toEqual('String2')
  })

  scenario('deletes a isbn', async (scenario: StandardScenario) => {
    const original = await deleteIsbn({ id: scenario.isbn.one.id })
    const result = await isbn({ id: original.id })

    expect(result).toEqual(null)
  })
})
