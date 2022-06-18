import { Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Icon
} from '@chakra-ui/react'
import { BookData } from 'src/pages/SwipePage/BookResponse';

import {AiFillStar} from 'react-icons/ai'

import { ReactElement } from 'react';

interface InfoModalProps {
  book: BookData;
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal = ({book, isOpen, onClose}: InfoModalProps) => {
  const getStarRating = (): ReactElement => {
    return (
      <>
      {
        Array.from({length: Number(book.rating)}).map((_) => {
          return <Icon as={AiFillStar} />
        })
      }
      </>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{book.name}</ModalHeader>

      <ModalCloseButton />
      <ModalBody>
        <Text>
          <Text fontWeight={'bold'}>
            {book.authors[0]}
          </Text>
          {book.pages} pages
        </Text>
        <Text>Published: {book.published_date}</Text>
        {getStarRating()}

        <Text>
          {book.synopsis}
        </Text>
      </ModalBody>
      <ModalFooter gap={"5px"}>
        <Button onClick={onClose}>
          Close
        </Button>
        <Button onClick={() => {
          const newWindow = window.open(book.url, '_blank', 'noopener,noreferrer')
          if (newWindow) newWindow.opener = null
        }}>
          View On GoodReads
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default InfoModal
