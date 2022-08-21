import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import shirt1 from '../../public/shirt1.jpg'

const Item = ({name,price,description,image,id, slug}) => {
  console.log(id);
  return (
    <div> 
    <div className='h-[400px] group relative ' > 
    <Link href={{pathname: `/${slug}`, query: {id}}}> 
    <a className=''>
        <Image  className=' h-96 w-full object-cover group-hover:scale-105 
        transition-transfrom duration-500 ease-in-out
         cursor-pointer ' src={shirt1} layout='fill' objectfit='cover' alt='well'  /> </a>
     </Link>
     </div>
     <div className='mt-2 text-lg flex items-center justify-between'> 
     <a href={`/${slug}`}><span> {name} </span>  </a>
     <span className=' font-semibold'>₺{price} </span>
     </div>
     <div className='text-sm font-bold underline underline-offset-2'>Add to Cart</div>
     </div>
  )
}

export default Item