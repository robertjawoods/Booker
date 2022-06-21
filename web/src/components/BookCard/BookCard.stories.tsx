import { standard } from '../BookCard/BookCard.mock'
import BookCard from './BookCard'

export const generated = () => {
  return <BookCard details={standard()} />
}

export default { title: 'Components/BookCard' }
