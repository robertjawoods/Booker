import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  IsbnResolvers,
} from 'types/graphql'

export const isbns: QueryResolvers['isbns'] = () => {
  return db.isbn.findMany()
}

export const isbn: QueryResolvers['isbn'] = ({ id }) => {
  return db.isbn.findUnique({
    where: { id },
  })
}

export const createIsbn: MutationResolvers['createIsbn'] = ({ input }) => {
  return db.isbn.create({
    data: input,
  })
}

export const updateIsbn: MutationResolvers['updateIsbn'] = ({ id, input }) => {
  return db.isbn.update({
    data: input,
    where: { id },
  })
}

export const deleteIsbn: MutationResolvers['deleteIsbn'] = ({ id }) => {
  return db.isbn.delete({
    where: { id },
  })
}

export const Isbn: IsbnResolvers = {
  book: (_obj, { root }) =>
    db.isbn.findUnique({ where: { id: root.id } }).book(),
}
