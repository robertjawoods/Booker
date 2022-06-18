import type { GenresQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box
} from '@chakra-ui/react'

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'


export const QUERY = gql`
  query GenresQuery {
    genres {
      id,
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ genres }: CellSuccessProps<GenresQuery>) => {
  return (
    <UnorderedList styleType={'none'}>
      {genres.map((item) => {
        return <ListItem key={item.id}>
            <Checkbox>
              {item.name}
            </Checkbox>
          </ListItem>
      })}
    </UnorderedList>
  )
}
