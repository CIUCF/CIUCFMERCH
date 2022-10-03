import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Info from '../components/Info'
import New from '../components/New/New'
import Newsletter from '../components/Newsletter'
import axios from 'axios'
import { GET_PRODUCTS_ENDPOINT } from '../src/constants/endpoints'


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

  const {data:data} = await axios.get(GET_PRODUCTS_ENDPOINT);

  
  
  return {
props: {products: data["products"]??{}},

revalidate: 1,
  };
}
