import { MetaTags } from '@redwoodjs/web'
import GenresCell from 'src/components/GenresCell'

const AccountPage = () => {
  return (
    <>
      <MetaTags title="Account" description="Account page" />

      <h1>AccountPage</h1>

      <GenresCell />
    </>
  )
}

export default AccountPage
