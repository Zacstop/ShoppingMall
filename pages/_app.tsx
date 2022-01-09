import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Front Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </body>
    </RecoilRoot>
  )
}

export default MyApp
