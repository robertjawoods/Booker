import type { BooksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TinderCard from 'react-tinder-card'
import BookCard from '../BookCard/BookCard'

export const QUERY = gql`
  query BooksQuery {
    books {
      id
      amazonUrl
      author
      coverImageUrl
      Isbn {
        isbn10
        isbn13
      }
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ books }: CellSuccessProps<BooksQuery>) => {
  const onSwipe = (dir) => {
    if (dir === 'right') {
      // do stuff
    }
  }

  return (
    <ul>
      {books.map((item, index) => {
        return (
          <TinderCard key={index}>
            <BookCard details={item} onSwipe={onSwipe} />
          </TinderCard>
        )
      })}
    </ul>
  )
}
