import React from 'react'
import Image from 'next/image'
import logo from '../public/Assets/coincap_white.png'
const styles={
    header: `bg-[#17171A] text-white h-20 flex gap-[90px] w-full p-[20px]`,
    navLink: `text-white flex mx-[10px]`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    nav: `flex justify-center items-center gap-[20px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
}

const Header=()=> {

  const loaderProp=({src})=>{
    return src;

}
  return (
    <div className={styles.header}>
        <Image
        src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        alt='logo'
        width={250}
        height={250}
        
        />
        <div className={styles.headerWrapper}>
          <div className={styles.nav}>
            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Crypto Currencies
              </div>
              <div className={styles.badge}/>
            </div>


            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Crypto Currencies
              </div>
              <div className={styles.badge}/>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Exchanges
              </div>
             
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLin}>
                NFT
              </div>
              <div className={styles.badge}/>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Cryptown
              </div>
              <div className={styles.badge}/>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Portfolio
              </div>
              <div className={styles.badge}/>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navLin}>
                WatchList
              </div>
              <div className={styles.badge}/>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navLin}>
                Learn
              </div>
              <div className={styles.badge}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Header