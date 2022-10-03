import React from 'react'
import Image from 'next/image'
import Shop_header from '../public/Shop_header.jpg'

const ShopHeader = () => {
  return (
    <div className='h-[80vh] overflow-hidden bg-[#00000084]'>
        <div className='  overflow-hidden h-full w-full relative'>
            <Image className=' mix-blend-overlay' src={Shop_header} alt='Hero Image'  layout='fill' objectFit='cover'/>
            <div className=' absolute pt-16 text-white top-0 left-0 justify-center flex flex-col h-full w-full items-center '> 
            <span className='text-4xl md:text-7xl p-4'>Welcome to CIUCF Shop</span>
            
            </div>
        </div>
       
    </div>
  )
}

export default ShopHeader