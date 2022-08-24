import React from 'react'
import { itemdata } from './itemdata'
import Item from './Item'

const New = () => {
  return (
    <div className='container '>
    <div className='text-center mx-4 text-3xl  font-semibold'> New In</div>
    <div className='flex justify-center'> 
    <div className='h-1 place-self-center bg-black my-2 w-16'></div>
    </div>
    <div className='text-center  '> Check out our latest collection</div>
    <div className='my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
     {itemdata?.map((prod) =>  (
         <div>
         <Item key={itemdata.slug}
         {...prod}
         />
       </div> 

     ))}


    </div>

   </div>   
   
  )
}

export default New