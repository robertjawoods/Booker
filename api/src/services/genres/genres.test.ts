import { genres, genre, createGenre, updateGenre, deleteGenre } from './genres'
import type { StandardScenario } from './genres.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('genres', () => {
  scenario('returns all genres', async (scenario: StandardScenario) => {
    const result = await genres()

    expect(result.length).toEqual(Object.keys(scenario.genre).length)
  })

  scenario('returns a single genre', async (scenario: StandardScenario) => {
    const result = await genre({ id: scenario.genre.one.id })

    expect(result).toEqual(scenario.genre.one)
  })

  scenario('creates a genre', async () => {
    const result = await createGenre({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a genre', async (scenario: StandardScenario) => {
    const original = await genre({ id: scenario.genre.one.id })
    const result = await updateGenre({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a genre', async (scenario: StandardScenario) => {
    const original = await deleteGenre({ id: scenario.genre.one.id })
    const result = await genre({ id: original.id })

    expect(result).toEqual(null)
  })
})
