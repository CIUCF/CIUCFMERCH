import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-[300px] text-black w-full bg-gray-100'>
        <div className='p-12 flex flex-col items-center'> 
        <span className='text-4xl my-4'>Join our Mailing list</span>
        <span className='m-2 text-lg'> Get all the latest discount and indirims directly to your inbox</span>
        <span className='my-12 flex flex-row' >
        <span>    <input className='h-12 w-72 border-black border' type="text" id="first" name="first" /> </span>
        <span className='text-white text-xl ' ><button className='h-12 px-4 py-2 bg-black hover:bg-blue-800'>Subscribe</button></span>
 </span>

        </div>

    </div>
  )
}

export default Newsletter