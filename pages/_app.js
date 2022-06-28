import '../styles/globals.css'
//import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }) {
  return (
 <MoralisProvider 
      appId='OLg7KzvuMfhp1YTCs6DO4cZgzAuaOiHyvY7UFyhi'
      serverUrl='https://ouejg8tyfsvr.usemoralis.com:2053/server'
      >
    <Component {...pageProps} />
  </MoralisProvider>   
  
)}

export default MyApp
