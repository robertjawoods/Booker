import {Box, Flex, IconButton, Skeleton, useDisclosure} from '@chakra-ui/react'

import {IoIosHeart, IoIosHeartDislike} from 'react-icons/io'
import { GrCircleInformation } from 'react-icons/gr'
import { Book, BookData } from 'src/pages/SwipePage/BookResponse'
import { ReactElement, useEffect, useState } from 'react';
import InfoModal from '../InfoModal/InfoModal';

interface BookCardProps {
  details: Book;
}

const BookCard = ({details}: BookCardProps) => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const [bookId] = useState(details.book_id);

  const [bookData, setBookData] = useState<BookData>();

  const [loaded, setLoaded] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '89a57530a6mshf106021856e4582p1e02aajsnc32b6ceb0ae1',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };


  useEffect(() => {
    if (bookId) {
      fetch(`https://hapi-books.p.rapidapi.com/book/${bookId}`, options)
      .then(response => response.json())
      .then(json => {
        setBookData(json as BookData);
        setLoaded(true)
      })
      .catch(err => console.error(err));
    }
  }, [bookId])

  const createModal = (): ReactElement => {
    return (
      <>
          <Flex p={"10px"} alignItems={'center'} wrap={'wrap'} direction={'column'} className={'bookCardInfo'}>

            <Skeleton isLoaded={loaded}>
              <h2>{bookData.name}</h2>
              <h3>{bookData.authors[0]}</h3>

              <img src={bookData.cover} width={'70%'} />
            </Skeleton>



            <Flex pt={"10px"} gap={"10px"} className={'bookCardActions'}>
              <IconButton icon={<IoIosHeartDislike />} aria-label={'Dislike'} />
              <IconButton icon={<IoIosHeart />} aria-label={'Like'} />
              <IconButton icon={<GrCircleInformation />} aria-label={'More Info'} onClick={onOpen} />
            </Flex>
          </Flex>
          <InfoModal book={bookData} isOpen={isOpen} onClose={onClose} />


      </>
    )
  }

  return (
    <>
      { bookData &&
        createModal()
      }
    </>
  )
}

export default BookCard
