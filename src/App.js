import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'
import Auth from './pages/Auth'
import { useState } from 'react'

export default function App() {
  const [auth, setAuth] = useState(undefined)

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Logged</h1>}
    </ApolloProvider>
  )
}
