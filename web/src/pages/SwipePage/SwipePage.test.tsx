import { render } from '@redwoodjs/testing/web'

import SwipePage from './SwipePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SwipePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SwipePage />)
    }).not.toThrow()
  })
})
