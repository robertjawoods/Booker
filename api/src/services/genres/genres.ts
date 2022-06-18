import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const genres: QueryResolvers['genres'] = () => {
  return db.genre.findMany()
}

export const genre: QueryResolvers['genre'] = ({ id }) => {
  return db.genre.findUnique({
    where: { id },
  })
}

export const createGenre: MutationResolvers['createGenre'] = ({ input }) => {
  return db.genre.create({
    data: input,
  })
}

export const updateGenre: MutationResolvers['updateGenre'] = ({
  id,
  input,
}) => {
  return db.genre.update({
    data: input,
    where: { id },
  })
}

export const deleteGenre: MutationResolvers['deleteGenre'] = ({ id }) => {
  return db.genre.delete({
    where: { id },
  })
}
