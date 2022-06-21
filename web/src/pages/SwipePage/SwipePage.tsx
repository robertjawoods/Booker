import { MetaTags } from '@redwoodjs/web'
import BooksCell from 'src/components/BooksCell/BooksCell'

import { Flex } from '@chakra-ui/react'

const SwipePage = () => {
  return (
    <>
      <MetaTags title="Swipe" description="Swipe page" />

      <Flex
        pt={'60px'}
        pl={'10%'}
        pr={'10%'}
        justifyContent={'center'}
        className={'cardContainer'}
      >
        {/* { suggestedBooks && suggestedBooks.map(item => {

              return (
                <>
                  <InfoModal setOnOpen={setOnOpen} volumeInfo={volumeInfo} />
                  <BookCard details={volumeInfo} onClickInfo={onOpen}/>
                </>
              );
            })
          } */}

        <BooksCell />
      </Flex>
    </>
  )
}

export default SwipePage
