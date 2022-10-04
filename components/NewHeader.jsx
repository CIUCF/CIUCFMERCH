import React from 'react'
import Image from 'next/image'
import newHeader from '../public/newHeader.jpg'

const NewHeader = () => {
  return (
   
        <div className='mt-16 grid grid-cols-5 md:h-[70vh] w-full overflow-hidden h-[40vh]'> 
        <div className='col-span-2 bg-[url("/images/pattern.jpg")] text-white h-full w-full flex flex-col items-center justify-center'>
            <span className='font-micra flex flex-col text-3xl md:text-8xl font-semibold tracking-wider uppercase text-center'>Glory 
            <span className='md:text-6xl text-xl tracking-wide'>To Glory </span> </span>
            <span className=' md:mx-28 mx-4 text-center my-3 text-xs md:text-lg md:my-6'> Join CIUCF in celebrating our 10th year anniversary by wearing
            Glory to Glory Merch. </span> </div>
        <div className='col-span-3  overflow-hidden h-full w-full relative'>
            <Image className=' mix-blend-overlay' src={newHeader} alt='Hero Image'  layout='fill' objectPosition='top' objectFit='cover'/>
            
        </div>
         </div>
    
  )
}

export default NewHeader