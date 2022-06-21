export const schema = gql`
  type Isbn {
    id: Int!
    book: Book!
    bookId: Int!
    isbn10: String!
    isbn13: String!
  }

  type Query {
    isbns: [Isbn!]! @requireAuth
    isbn(id: Int!): Isbn @requireAuth
  }

  input CreateIsbnInput {
    bookId: Int!
    isbn10: String!
    isbn13: String!
  }

  input UpdateIsbnInput {
    bookId: Int
    isbn10: String
    isbn13: String
  }

  type Mutation {
    createIsbn(input: CreateIsbnInput!): Isbn! @requireAuth
    updateIsbn(id: Int!, input: UpdateIsbnInput!): Isbn! @requireAuth
    deleteIsbn(id: Int!): Isbn! @requireAuth
  }
`
