import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/Context'


function MyApp({ Component, pageProps }) {
  return (

  <MoralisProvider 
        serverUrl='https://ouejg8tyfsvr.usemoralis.com:2053/server'
        appId='OLg7KzvuMfhp1YTCs6DO4cZgzAuaOiHyvY7UFyhi'
        >
          <CoinMarketProvider>
            <Component {...pageProps} />
          </CoinMarketProvider>

          
        
    </MoralisProvider>   
  
)}

export default MyApp
