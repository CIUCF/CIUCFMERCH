import {isEmpty} from 'lodash'
import { addToCart } from '../../utils/cart'

const AddToCart = ({product}) => {


    return (
        <button className='w-full h-11 bg-white border-black border-2 hover:border-orange-400'
        onClick={()=>addToCart(product?.id ?? 0)}> Add to Cart</button>
    )
}
export default AddToCart