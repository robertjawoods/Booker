import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IsbnCreateArgs>({
  isbn: {
    one: {
      data: {
        isbn10: 'String',
        isbn13: 'String',
        book: {
          create: {
            description: 'String',
            title: 'String',
            author: 'String',
            coverImageUrl: 'String',
            amazonUrl: 'String',
          },
        },
      },
    },
    two: {
      data: {
        isbn10: 'String',
        isbn13: 'String',
        book: {
          create: {
            description: 'String',
            title: 'String',
            author: 'String',
            coverImageUrl: 'String',
            amazonUrl: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
