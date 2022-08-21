import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Info from '../components/Info'
import New from '../components/New/New'
import Newsletter from '../components/Newsletter'


export default function Home() {
  return (
   <>
   <Header />
   <Info />
   <New />
   <Newsletter />
   </>
  )
}
