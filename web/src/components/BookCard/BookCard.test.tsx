import { render } from '@redwoodjs/testing/web'

import BookCard from './BookCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BookCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookCard />)
    }).not.toThrow()
  })
})
