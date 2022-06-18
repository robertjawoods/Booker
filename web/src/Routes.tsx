// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import GenresLayout from 'src/layouts/GenresLayout'
import BookerLayout from './layouts/BookerLayout/BookerLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BookerLayout}>
        <Route path="/swipe" page={SwipePage} name="swipe" />
        <Route path="/list" page={ListPage} name="list" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/account" page={AccountPage} name="account" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
