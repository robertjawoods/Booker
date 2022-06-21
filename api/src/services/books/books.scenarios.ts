import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: {
      data: {
        description: 'String',
        title: 'String',
        author: 'String',
        coverImageUrl: 'String',
        amazonUrl: 'String',
      },
    },
    two: {
      data: {
        description: 'String',
        title: 'String',
        author: 'String',
        coverImageUrl: 'String',
        amazonUrl: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
