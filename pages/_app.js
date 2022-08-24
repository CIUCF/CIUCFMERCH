import '../styles/globals.css'
import Layout from '../components/Layout'
import {Toaster} from 'react-hot-toast'
import { StoreProvider } from '../utils/store'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider> 
    <Layout>
    <Toaster/> 
    <Component {...pageProps} />
  </Layout>
  </StoreProvider>
   ) 
}

export default MyApp
