import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'

import Head from 'next/head'

import NavBar from '../components/NavBar/NavBar'
import { useState } from 'react'

function App({ Component, pageProps }) {

  const [lang, setLang] = useState('english');
 
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar lang={lang} setLang={setLang} ></NavBar>
      <Component {...pageProps} lang={lang} />
    </>
  )
}

export default App
