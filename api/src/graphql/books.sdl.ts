export const schema = gql`
  type Book {
    id: Int!
    description: String!
    title: String!
    author: String!
    coverImageUrl: String!
    amazonUrl: String!
    Isbn: [Isbn]!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    description: String!
    title: String!
    author: String!
    coverImageUrl: String!
    amazonUrl: String!
  }

  input UpdateBookInput {
    description: String
    title: String
    author: String
    coverImageUrl: String
    amazonUrl: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
