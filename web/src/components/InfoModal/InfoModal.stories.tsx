import InfoModal from './InfoModal'
import { standard } from './InfoModal.mock'

export const generated = () => {
  return <InfoModal book={standard()} isOpen={true} onClose={() => {}} />
}

export default { title: 'Components/InfoModal' }
