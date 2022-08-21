import React from 'react';
import router from 'next/router';
import { itemdata } from '../components/New/itemdata'
import shirt1 from '../public/shirt1.jpg'
import Image from 'next/image';
import { useStateContext } from '../context/StateContext';


const ProductPage = () => {
  const id = router.query['id'];
  const {decQty,incQty,qty,onAdd} = useStateContext();
  
  
  return (
  
    <div>
    <div className='container mx-auto m-10 mt-16'> 
<div className='py-16 grid lg:grid-cols-2'> 
<div className='flex gap-x-4  justify-end relative'> 
<div> 
<a className=''>
        <Image  className=' h-96 w-full object-cover group-hover:scale-105 
        transition-transfrom duration-500 ease-in-out
         cursor-pointer ' src={shirt1} layout='fill' objectfit='cover' alt='well'  /> </a>
</div>
{/* <div className='flex flex-col gap-y-4 '> 
{image.map((item, i) =>(
<img key={itemdata[id].id} className='h-28 w-20  hover:opacity-80 object-cover
cursor-pointer' src={shirt1} alt='products photos'/>

))}
</div> */}
</div>
<div className='mt-12 mx-4 text-center'> 
<span className='text-4xl font-semibold'>{itemdata[id].name}</span>
<div className='my-4 text-2xl mx-auto'>₺{" "}{itemdata[id].price}.00 </div>
<div className='py-4 border-black border-t-2 w-12 mx-auto '></div>
<div className='my-4 text-lg'>{itemdata[id].description}</div>
<div>Size 
  <div >
  <ul className='text-lg text-center flex justify-center flex-row gap-4  cursor-pointer mx-auto'>
    <li> XS </li>
    <li> S </li>
    <li> M </li>
    <li> L </li>
    <li> XL </li>
    <li> XXL </li>
  </ul> </div>
 
 
</div>
<div className='py-4'>Colour
  <div>
  <span className='text-black  text-md' ><button className='w-24 h-8 border uppercase tracking-wider border-black bg-white '>Blue</button></span>
   </div>
</div>
<div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <button className="minus" onClick={decQty}>Inc</button>
              <span className="num">{qty}</span>
              <button className="plus" onClick={incQty}>dec</button>
            </p>
          </div>
<div className='flex flex-row gap-4 my-4 justify-center'>

<span className='text-black  text-md' ><button onClick={(itemdata, qty)=> onAdd} className='px-4 w-48 py-2 h-12 border uppercase tracking-widest border-black bg-white'>Add to Cart</button></span>
<span className='text-white text-md  ' ><button className='px-4 py-2 w-48 h-12 tracking-widest bg-black uppercase'>Buy Now</button></span>

</div>



</div>
</div>
    </div>
  </div>
  )
}

export default ProductPage