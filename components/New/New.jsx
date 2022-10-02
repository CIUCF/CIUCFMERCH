import React from 'react'
import { itemdata } from './itemdata'
import Item from './Item'

const New = ({merch}) => {

  
  return (
    <div className='container '>
    <div className='text-center mx-4 text-3xl  font-semibold'> New In</div>
    <div className='flex justify-center'> 
    <div className='h-1 place-self-center bg-black my-2 w-16'></div>
    </div>
    <div className='text-center  '> Check out our latest collection</div>
    <div className='my-8 grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
     {merch.products?.slice(0, 2).map((product,index) =>  (
         <div>
         <Item key={index}
         product={product}/>
       </div> 

     ))}


    </div>

   </div>   
   
  )
}

export default New