import { MetaTags } from '@redwoodjs/web'
import BookCard from 'src/components/BookCard/BookCard'

import { Flex, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'


import {Book} from 'src/pages/SwipePage/BookResponse';

const SwipePage = () => {
  const {isLoading, isError, data, error } = useQuery('getBooks', () => {
    return fetch('https://hapi-books.p.rapidapi.com/week/fantasy', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '89a57530a6mshf106021856e4582p1e02aajsnc32b6ceb0ae1',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }
    })
    .then(async response => await response.json() as Book[])
    .catch(err => console.error(err));
  });


  return (
    <>
      <MetaTags title="Swipe" description="Swipe page" />

      <Flex pt={'60px'} pl={"10%"} pr={"10%"} justifyContent={'center'} className={'cardContainer'}>
          {/* { suggestedBooks && suggestedBooks.map(item => {

              return (
                <>
                  <InfoModal setOnOpen={setOnOpen} volumeInfo={volumeInfo} />
                  <BookCard details={volumeInfo} onClickInfo={onOpen}/>
                </>
              );
            })
          } */}

          <Flex border={'1px'} w={"25%"} borderRadius={"10px"} backgroundColor={"#faf9f9"} className={"bookCard"}>
            { data &&
              <BookCard details={data[0]} />
            }
          </Flex>
      </Flex>
    </>
  )
}

export default SwipePage

