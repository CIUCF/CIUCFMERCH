import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useContext } from 'react'
import { Store } from '../utils/store'
import vercel from '../public/vercel.svg'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({ children }) => {
  const {state, dispatch} = useContext(Store);
  const {cart} = state;
  return (
   
    <>
    <div id='navbar' className='top-0 fixed z-10 '>
      <div className='bg-white h-16 p-4 w-screen flex  '> 
      <div className=' container items-center justify-between flex  '>  
      <Link href={'/'}> 
      <div className='cursor-pointer'> <Image  width={180} objectFit="contain" src={vercel} alt='well'  /> </div> 
      </Link>
      <div className='text-black flex justify-between  text-xl'>
        <ul className='flex gap-10'>
  <li>New</li>
  <li>Shop</li>
  <li >CIUCF</li>
</ul>
<div> <Link href={'/cart'}>
  <div>Cart {cart.cartItems.length > 0 && (
<span className='bg-black text-white'>
  {cart.cartItems.reduce ((a, c)=> a+c.quantity, 0)} </span>
)}</div>
</Link>
</div>
</div>
     </div>

   
      </div>
     

    </div>
    {children}
    <Footer />
  </>
  )
}

export default Layout