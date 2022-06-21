import { Link, routes } from '@redwoodjs/router'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react'

import { HiMenu } from 'react-icons/hi'

type BookerLayoutProps = {
  children?: React.ReactNode
}

const BookerLayout = ({ children }: BookerLayoutProps) => {
  return (
    <>
      <header>
        <Flex
          className="navContainer"
          justifyItems={'center'}
          display={'grid'}
          gridTemplateColumns={'1fr repeat(3, auto) 1fr'}
          gridColumnGap={'5px'}
        >
          <Box pl="1" pt="1" className="logoContainer">
            <h1 className="logo">
              <Link to={routes.home()}>Booker</Link>
            </h1>
          </Box>
          <Flex
            pr="1"
            pt="1"
            justifyContent={'right'}
            className="menuContainer"
          >
            <Menu placement="bottom">
              <MenuButton as={IconButton} icon={<HiMenu />} />
              <MenuList>
                <MenuItem>
                  <Link to={routes.swipe()}>Swipe</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.list()}>List</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={routes.account()}>Account</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </header>

      <main>{children}</main>
    </>
  )
}

export default BookerLayout
