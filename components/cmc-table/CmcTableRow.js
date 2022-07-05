import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import Rate from './Rate'
import CoinNameRow from './CoinNameRow'
const styles ={
    tableRow:`text-white border-b border-gray-800  text-[0.93rem]`
}
const CmcTableRow = ({
    starNum,
    coinName,
    coinIcon='****',
    coinSymbol='***',
    price='****',
    hRate='****',
    dRate='****',
    hRateIsIncrement,
    dRateIsIncrement,
    circulatingSupply='****',
    marketCapValue='****',
    volumeValue='****',
    volumeCryptValue='****',
}) => {
    const graphImages = [
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
      ]


    const getRandomGraph=()=>{
        const randomNumber=Math.floor(Math.random()*10)+ 1
        return graphImages[randomNumber]
    }
    const router = useRouter()

    const viewCoinDetails=()=>{
        router.push(
            `currencies/info?symbol=${coinSymbol}& coin=${coinName}&price=${price}`,
        )
    }
    const viewPrice =()=>{
        router.push(
            `currencies/price?symbol=${coinSymbol}& coin=${coinName}&price=${price}`,
        )
    }

    const formatNumber = num =>{
       // return Number(num.toFixed(2)).toLocaleString()
    }

  return (
    <tbody className={styles.tableRow}>
        <tr>
            <td><Star/></td>
            <td>{starNum}</td>
            {coinIcon && coinIcon ?(
                <td className='cursor-pointer'>
                    <CoinNameRow
                     name={coinName}
                     icon={coinIcon}
                     clicked={viewCoinDetails}/>
                </td>
            ):(
                <></>
            )}
            <td className='cursor-pointer' onClick={viewPrice}><p>$ {parseFloat(price).toFixed(2)}</p></td>
            <td><Rate isIncrement={hRateIsIncrement} rate={`${parseFloat(hRate).toFixed(2)}%`} /></td>
            <td><Rate isIncrement={dRateIsIncrement} rate={`${parseFloat(dRate).toFixed(2)}%`} /></td>
            <td>
                <div>
                    <p>${parseFloat(marketCapValue).toFixed(2)}</p>
                    <p className='text-gray-400'>{parseFloat(volumeCryptValue).toFixed(2)} {coinSymbol}</p>
                </div>
            </td>
           
            <td>
                <div>
                    <p>{parseFloat(volumeValue).toFixed(2)}</p>
                    <p className='text-gray-400'>{parseFloat(volumeCryptValue).toFixed(2)} {coinSymbol}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{parseFloat(circulatingSupply).toFixed(2)}</p>
                </div>
            </td>
            <td>
                <Image
                 src={getRandomGraph()}
                 width={150}
                 height={60}
                 alt='graph' />
            </td>
            <td><More/></td>
        </tr>

    </tbody>
  )
}

export default CmcTableRow