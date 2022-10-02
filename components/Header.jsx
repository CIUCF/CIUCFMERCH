import React from 'react'
import Image from 'next/image'
import Home_Glory_Header from '../public/Home_Glory_Header.jpg'

const Header = () => {
  return (
    <div className='h-screen overflow-hidden bg-[#00000084]'>
        <div className='  overflow-hidden h-full w-full'>
            <Image className=' mix-blend-overlay' src={Home_Glory_Header} alt='Hero Image'  layout='fill' objectFit='cover'/>
            <div className=' absolute pt-16 text-white top-0 left-0 justify-center flex flex-col h-full w-full items-center '> 
            <span className='text-2xl p-4'> New Merch</span>
            <span className='text-4xl md:text-7xl p-4'>"Glory to Glory"</span>
            <span className='text-black text-xl p-4' ><button className='px-4 py-2 bg-white hover:bg-red-200'>Shop Now</button></span>
            </div>
        </div>
       
    </div>
  )
}

export default Header