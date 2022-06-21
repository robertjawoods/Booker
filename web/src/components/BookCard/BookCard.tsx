import {
  Flex,
  Heading,
  IconButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react'

import { FaHeart, FaInfoCircle } from 'react-icons/fa'

import { ImCross } from 'react-icons/im'

import { ReactElement } from 'react'
import InfoModal from '../InfoModal/InfoModal'

export interface BookCardItem {
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

interface BookCardProps {
  details: BookCardItem
  onSwipe?: (dir: string) => void
  goBack?: () => void
}

const BookCard = ({ details, onSwipe }: BookCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const createModal = (): ReactElement => {
    return (
      <>
        <Flex border={'1px'} borderRadius={'10px'} className={'bookCard'}>
          <Flex
            alignItems={'center'}
            wrap={'wrap'}
            direction={'column'}
            className={'bookCardInfo'}
            pt={'10px'}
          >
            <Heading as={'h1'}>{details.title}</Heading>
            <Heading pb={'10px'} as={'h2'}>
              {details.author}
            </Heading>

            <Image
              src={details.coverImageUrl}
              width={'100%'}
              alt={'Cover for ' + details.title}
            />

            <Flex
              pt={'10px'}
              gap={'10px'}
              className={'bookCardActions'}
              pb={'10px'}
            >
              <IconButton
                icon={<ImCross />}
                aria-label={'Dislike'}
                onClick={() => onSwipe('left')}
              />
              <IconButton
                icon={<FaHeart />}
                aria-label={'Like'}
                onClick={() => onSwipe('right')}
              />
              <IconButton
                icon={<FaInfoCircle />}
                aria-label={'More Info'}
                onClick={onOpen}
              />
            </Flex>
          </Flex>
          <InfoModal book={details} isOpen={isOpen} onClose={onClose} />
        </Flex>
      </>
    )
  }

  return <>{details && createModal()}</>
}

export default BookCard
