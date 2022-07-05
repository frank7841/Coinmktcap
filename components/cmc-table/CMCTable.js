import React,{useContext, useState, useEffect, useCallback} from 'react'
import btc from '../../assets/btc.png'
import {coinMarketContext} from '../../context/Context'
import CmcTableHeader from './CmcTableHeader'
import CmcTableRow from './CmcTableRow'
const CMCTable = () => {
    
    let {getTopTenCoins}=useContext(coinMarketContext)

    let[coinData, setCoinData] =useState(null);

    useEffect(()=>{
        setData()

    },[])
    const setData= useCallback(async()=>{
        try {
            let apiResponse= await getTopTenCoins()
            let filteredResponse=[]   
            
            for(let i = 0; i<apiResponse.length; i++){
                const element=apiResponse[i]
                if(element.cmc_rank <= 10)filteredResponse.push(element)
            }
            setCoinData(filteredResponse)
            
        } catch (error) {
            console.log(error.message)
            
        }
    }, [getTopTenCoins])
    


  return (
    <div className='text-white font-bold'>
        <div className='mx-auto max-w-screen-2xl'>
               <table className='w-full'>
                   <CmcTableHeader/>
                   {coinData && coinData ? (
                       coinData.map((coin, index)=>{
                           return(
                               <CmcTableRow
                                    key={index}
                                    startNum={coin.cms_rank}
                                    coinName={coin.name}
                                    coinSymbol={coin.symbol}
                                    coinIcon={btc}
                                    showBuy={true}
                                    hRate={coin.quote.USD.percent_change_24h}
                                    dRate={coin.quote.USD.percent_change_7d}
                                    hRateIncrement={true}
                                    dRateIsIncrement={true}
                                    price={coin.quote.USD.price}
                                    marketCapValue={coin.quote.USD.market_cap}
                                    volumeCryptValue={coin.quote.USD.volume_24h}
                                    volumeValue={coin.total_supply}
                                    circulatingSupply={coin.circulating_supply}
                                    />
                           )

                       })

                   ):(
                       <></>
                   )}
                </table> 
        </div>
    </div>
  )
}

export default CMCTable