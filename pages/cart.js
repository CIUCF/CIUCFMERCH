import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import shirt2 from '../public/shirt2.jpg'
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';


const cart = () => {
    const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  return (
    <div ref={cartRef} className='mt-16 max-w-[1100px] container'>
        <div className='py-8 text-center text-4xl'>  Your Cart </div>
        <div className='mb-8 flex justify-center'> <div className='h-0.5  bg-black my-2 w-16'></div> </div>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <h3>Your shopping bag is empty</h3>
          </div>
        )}

       
     <div>
     {cartItems.length >= 1 && cartItems.map((item) => (
         
 
         
          <div>
             {item.name} </div>

        ))} </div>
    </div>
  )
}

export default cart