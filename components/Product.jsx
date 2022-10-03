import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sanitize } from '../utils/purify'


function Product({product}) {
    
      return (
        <div> 
        <div className='h-[400px] group relative ' > 
        {product?.images[0]&&(<Link href={`/${product?.slug}`}> 
        <a className=''>
            <Image  className=' h-96 w-full object-cover group-hover:scale-105 
            transition-transfrom duration-500 ease-in-out
             cursor-pointer ' src={product?.images[0]} layout='fill' objectfit='cover' alt='well'  /> </a>
         </Link>)}
         </div>
         <div className='mt-2 text-lg flex items-center justify-between'> 
         <a href={`/${product?.slug}`}><span> {product?.name} </span>  </a>
         <div dangerouslySetInnerHTML={{__html:sanitize(product?.price_html)}}/>
         </div>
         </div>
      )
    }
    
  

export default Product