import { render } from '@redwoodjs/testing/web'

import BookCardContainer from './BookCardContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BookCardContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookCardContainer />)
    }).not.toThrow()
  })
})
