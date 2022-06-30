import React from 'react'
import Image from 'next/image'
import MoreButton from './MoreButton'

const styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`,
  }

const TrendingCard=({title, icon, trendingData})=> {
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
            <div className='flex'>
                {icon && <Image src={icon} width={27} height={27} alt='Icon'/>}
                &nbsp; &nbsp;
                <p className='ont-bold'>{title}</p>
            </div>
            <MoreButton/>
        </div>
        <br/>
        {trendingData.map((item, index)=>{
            // return(
            //     <trendingCardRow 
            //     key={index}
            //     number={item.number}
            //     symbol={item.symbol}
            //     name={item.name}
            //     icon ={item.icon}
            //     isincrement={item.isincrement}
            //     rate={item.rate}/>
            // )

        })}
    </div>
  )
}

export default TrendingCard