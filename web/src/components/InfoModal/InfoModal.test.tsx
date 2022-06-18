import { render } from '@redwoodjs/testing/web'

import InfoModal from './InfoModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InfoModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoModal />)
    }).not.toThrow()
  })
})
