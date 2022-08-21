import React from 'react'
import vercel from '../public/vercel.svg'
import Image from 'next/image'

const Nav = () => {

  return (
    <div>

<div id='navbar' className='top-0 fixed z-10 '>
      <div className='bg-white h-16 p-4 w-screen flex  '> 
      <div className=' container items-center justify-between flex  '>  
      <Image width={180} objectFit="contain" src={vercel} alt='well'  />
      <div className='text-black  text-xl'>
        <ul className='flex gap-10'>
  <li>New</li>
  <li>Shop</li>
  <li>CIUCF</li>
</ul>
</div>
     </div>

   
      </div>
     

    </div>
    </div>
  )
}

export default Nav