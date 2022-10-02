// import {isEmpty} from 'lodash'
// import { addToCart } from '../../utils/cart'
// import { useContext, useState } from 'react'
// import { StoreContext } from '../../utils/Store'

// const AddToCart = ({product}) => {

//     const [cart, setCart] = useContext(StoreContext);
//     const [addedToCart, setAddedToCart] = useState(false);
//     const [loading,setLoading] = useState(false);


//     return (
//         <button className='w-full h-11 bg-white border-black border-2 hover:border-orange-400'
//         onClick={()=>addToCart(product?.id ?? 0,1,setCart,setAddedToCart)}> Add to Cart</button>
//     ) 
// }
// export default AddToCart