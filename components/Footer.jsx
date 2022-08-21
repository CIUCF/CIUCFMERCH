import React from 'react'



const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='pb-2 w-full'>
        <div className='container'> 
        <div className='m-8 flex justify-center'> <div className='h-0.5  bg-black my-2 w-16'></div> </div>
       
        <div className='my-8 grid grid-cols-2 '>
          <div> The Mandate Store </div>
          <div className='place-self-end'> Follow us on Social Media</div> </div>
        </div>
        <a target='#' href='https://www.instagram.com/fcv_ciucf/'><div className='flex justify-center items-end cursor-pointer'>
        
  &copy; {year}, FCV Tech
</div> 
        </a>
    </div>
  )
}

export default Footer