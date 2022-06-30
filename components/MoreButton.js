import React from 'react'
import RightArrow from '../assets/svg/rightArrow'

const styles={
    Button:`text-{#6188ff} flex items-center curser-pointer whitespace-nowarap justify-between`,
}
const MoreButton=()=> {
  return (
    <div className={styles.Button}>
        More<RightArrow/>

    </div>
  )
}

export default MoreButton