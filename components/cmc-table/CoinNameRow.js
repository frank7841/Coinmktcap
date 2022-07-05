import Image from 'next/image'
import React from 'react'

const coinNamRow = ({name,icon}) => {
  return (
    <div children='flex'>
        <Image
            src={icon}
            alt={name}
            width={20}
            height={20}/>
            <p>{name}</p>
    </div>
  )
}

export default coinNamRow