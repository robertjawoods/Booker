import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
} from '@chakra-ui/react'

interface InfoModalProps {
  book: {
    title: string
    amazonUrl: string
    author: string
    description: string
    coverImageUrl: string
    Isbn: {
      isbn10: string
      isbn13: string
    }[]
  }
  isOpen: boolean
  onClose: () => void
}

const InfoModal = ({ book, isOpen, onClose }: InfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={book.coverImageUrl} w={'30%'} />
          <Text>
            <Text fontWeight={'bold'}>{book.author}</Text>
          </Text>
          <Text>{book.description}</Text>
        </ModalBody>
        <ModalFooter gap={'5px'}>
          <Button onClick={onClose}>Close</Button>
          <Button
            onClick={() => {
              const newWindow = window.open(
                book.amazonUrl,
                '_blank',
                'noopener,noreferrer'
              )
              if (newWindow) newWindow.opener = null
            }}
          >
            View On Amazon
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default InfoModal
