import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'
import Auth from './pages/Auth'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

export default function App() {
  const [auth, setAuth] = useState(undefined)

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Logged</h1>}
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
    </ApolloProvider>
  )
}
