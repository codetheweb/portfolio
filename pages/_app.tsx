import type { AppProps } from 'next/app'
import Head from 'next/head'
import Wave from '../components/wave'
import '../styles/globals.scss'
import styles from './styles/app.module.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Max Isom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <Wave/>

    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
