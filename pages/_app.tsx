import type {AppProps} from 'next/app'
import '@/assets/styles/globals.scss'
import MainProvider from '../app/providers/MainProvider';

function MyApp({Component, pageProps}: AppProps) {
  return (
    // @ts-ignore
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
