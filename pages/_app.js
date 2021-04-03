import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'

import Head from 'next/head'

import NavBar from '../components/NavBar/NavBar'

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default App
