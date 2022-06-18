import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import { QueryClient,
  QueryClientProvider,

} from 'react-query';

import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider>
        <RedwoodApolloProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
