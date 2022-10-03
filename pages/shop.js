import React from 'react'
import ShopHeader from '../components/ShopHeader'
import axios from 'axios'
import { GET_PRODUCTS_ENDPOINT } from '../src/constants/endpoints'
import Product from '../components/Product'

const shop = (products) => {
  return (
    <div>
        <ShopHeader/>
        <div className='container '> 
        <span className='m-4 flex flex-col items-center justify-center'> 
        <span className=' text-2xl font-semibold'> All Products</span>
        <div className='flex justify-center'> 
    <div className='h-0.5 place-self-center bg-black my-3 w-16'></div>
    </div>
        <span> Boldly Proclaim the Mandate. Shop all Mandate merchandize and clothing.</span>
        </span>
        <div className='my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.products?.map((product) =>  (
             <div>
             <Product key={product.id}
             product={product}/>
           </div> 
    
         ))}
         </div> 
    

        </div>
    </div>
  )
}

export default shop

export async function getStaticProps(){

    const {data:data} = await axios.get(GET_PRODUCTS_ENDPOINT);
  
    
    
    return {
  props: {products: data["products"]??{}},
  
  revalidate: 1,
    };
  }