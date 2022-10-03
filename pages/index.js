import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Info from '../components/Info'
import New from '../components/New/New'
import Newsletter from '../components/Newsletter'
import axios from 'axios'
import { getProductsData } from '../utils/fetcher/productcall'


export default function Home(products ) {

  
  return (
   

   <>
   <Header />
   <Info />
   <New merch = {products} />
   <Newsletter />
   </>
  )
}

export async function getStaticProps(){

  const {data:data} = await getProductsData();

  
  
  return {
props: {products:  data ?? {}},


revalidate: 1,
  };
}


