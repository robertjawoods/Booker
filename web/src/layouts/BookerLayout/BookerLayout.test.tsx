import { render } from '@redwoodjs/testing/web'

import BookerLayout from './BookerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BookerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookerLayout />)
    }).not.toThrow()
  })
})
