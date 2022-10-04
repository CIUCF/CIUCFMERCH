import React from 'react'
import Image from 'next/image'
import wearMandate from '../public/wearMandate.jpeg'

const Info = () => {
  return (
    <div className=' container'>
<div className='grid md:grid-cols-2 gap-4 items-center text-center'> 

<div className='mb-8 md:my-16 shadow-2xl  w-full col-span-1 h-96  md:h-[500px] mx-auto relative overflow-hidden'> 
<Image className='object-contain ' src={wearMandate} alt='Hero Image'   layout='fill' objectFit='cover' />
</div>
<div className='row-start-1 md:col-start-2 col-span-1  p-4 md:p-8 flex flex-col gap-4 '>
<span className='mt-4 md:mt-4 text-4xl font-bold'>
    Boldly Proclaim the Mandate
    </span>
    <span className='pt-4 text-xl '> What a beautiful thing it is to be saved by Christ.
      Wear <span className='font-bold'>The Mandate Merch </span> and let people see the message of Christ, boldy placed over your heart.
    </span>
  <span className='text-blue-800 flex flex-col gap-2'>
    <span className='pt-8 text-lg  flex flex-col italic font-semibold ' >"Place me like a seal over your heart, <span> like a seal on your arm"</span> </span>
    <span> Songs of Solomon 8:20 </span>
     </span> 
     <span className='text-white font-normal text-md p-4' ><button className='uppercase tracking-widest px-8 py-2 bg-black hover:bg-blue-600'>Buy Now </button></span>
  </div>

</div>
    </div>
  )
}

export default Info