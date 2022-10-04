import React from 'react'
import NewHeader from '../components/NewHeader'
import Item from '../components/New/Item'
import { GET_PRODUCTS_ENDPOINT } from '../src/constants/endpoints'

import { getProductsData } from '../utils/fetcher/productcall'

const newin = (products) => {
  return (
    <div>
        <NewHeader/>
        <div className='container '> 
        <span className='m-4 flex flex-col items-center justify-center'> 
        <span className=' text-2xl font-semibold'> New In</span>
        <div className='flex justify-center'> 
    <div className='h-0.5 place-self-center bg-black my-3 w-16'></div>
    </div>
        <span> From Glory to Glory to Glory. We are going UP.</span>
        </span>
        <div className='my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* {products.products?.map((product) =>  (
             <div key={product.id}>
             <Item 
             product={product}/>
           </div> 
    
         ))} */}
         </div> 
    

        </div>
    </div>
  )
}

export default newin

export async function getStaticProps(){

  const {data:data} = await getProductsData();

  
  
  return {
props: {products:  data ?? {}},


revalidate: 1,
  };
}