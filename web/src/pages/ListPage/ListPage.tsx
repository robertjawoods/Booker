import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ListPage = () => {
  return (
    <>
      <MetaTags title="List" description="List page" />

      <h1>ListPage</h1>
      <p>
        Find me in <code>./web/src/pages/ListPage/ListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>list</code>, link to me with `
        <Link to={routes.list()}>List</Link>`
      </p>
    </>
  )
}

export default ListPage
