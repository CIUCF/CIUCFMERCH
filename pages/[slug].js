import React, { useContext,useState } from "react";
import { Store } from "../utils/Store";
import Router, { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import Image from "next/image";
import { GET_PRODUCTS_ENDPOINT } from '../src/constants/endpoints'
import { sanitize } from "../utils/purify";

const ProductPage = (merch) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = merch.products.find((x) => x.slug === slug);
  
 
 
  const notify = () => toast('Here is your toast.');

  

  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  const addToCartHandler = () => {
   

    if(newsize && colour){
    const existItem = state.cart.cartItems.find((x) => x.unique === product.unique);
    const quantity = existItem ? existItem.quantity + qty : qty;
    const price = product.price;
    const  totalPrice = parseInt(price) * parseInt(quantity);
    

    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity, newsize,unique,colour,totalPrice } });
    state.cart.cartItems.length < 1 && router.push("/cart");}
    else{
  notify;
    }
  };

  
  

  const [newsize, setNewSize]= useState("");
  const [colour, setColour]= useState("");
  const unique=[newsize,slug,colour];
  
  

  const handleChange = (e) =>{
    setNewSize(e.target.value);
  };

  const handleColourChange = (e) =>{
    setColour(e.target.value);
  };

  


  return (

    <div>
      <div className="container mx-auto m-10 mt-16">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 relative">
          <div className="  justify-end relative">
            <div className="h-60 md:h-80 lg:h-96 w-full object-cover group-hover:scale-105 
        transition-transfrom duration-500 ease-in-out
         cursor-pointer">
              <a className="">
              <Image  className='object-cover md:object-contain lg:object-cover ' src={product?.images[0]} layout='fill' objectfit='cover' alt='well'  />{" "}
              </a>
            </div>
            <div className='flex flex-col gap-y-4 '>
{/* {image.map((item, i) =>(
<img key={product.id} className='h-28 w-20  hover:opacity-80 object-cover
cursor-pointer' src={shirt1} alt='products photos'/>

))} */}
</div>
          </div>
          <div className="mt-12 mx-4 text-center">
            <span className="text-4xl font-semibold">{product?.name}</span>
            <div className="my-4 text-2xl mx-auto"> 
            <div dangerouslySetInnerHTML={{__html:sanitize(product?.price_html)}}/> </div>
            <div className="py-4 border-black border-t-2 w-12 mx-auto "></div>
            <div className="my-4 text-lg">
            <div dangerouslySetInnerHTML={{__html:sanitize(product?.short_description)}}/>
            </div>
            <div>
              Size
              <div className="my-4 flex gap-2 justify-center ">
              

              {product.acf.sizes?.map((size) =>  (
                
               <div >
                    <input type="radio" id={size} name="sizes" value={size} className="hidden peer" required onChange={handleChange}/>
                    <label for={size} className="inline-flex text-md  justify-center items-center h-10 w-10 bg-white cursor-pointer
                     peer-checked:border-blue-600 hover:border-blue-600  peer-checked:text-blue-600 peer-checked:bg-blue-200 peer-checked:border  hover:bg-blue-100 ">                           
                        <div className="uppercase">
                            {size}
                            <Toaster/>
                        </div>
                    </label>
                
                    </div>
            ))}
              </div>
            </div>
            <div>
              Colour
              <div className="flex gap-2 justify-center ">
              

              {product.acf.colour?.map((colours) =>  (
                
               <div >
                    <input type="radio" id={colours} name="colours" value={colours} className="hidden peer" required onChange={handleColourChange}/>
                    <label for={colours} className="text-sm inline-flex justify-center items-center h-full w-full py-1 px-2 bg-white border border-black cursor-pointer
                     peer-checked:border-red-600 hover:border-red-600 peer-checked:bg-red-200 peer-checked:text-red-600 hover:text-red-600 hover:bg-red-100 ">                           
                        <div className="uppercase">
                            {colours}
                            <Toaster/>
                        </div>
                    </label>
                
                    </div>
            ))}
              </div>
            </div>
            <div className="quantity">
            <h3>Quantity:</h3>
            <p className="m-2">
              <button className="inline-flex p-3 border border-black text-xl w-10 h-10 items-center justify-center" onClick={decQty}><AiOutlineMinus/></button>
              <span className="mx-4 text-2xl">{qty}</span>
              
              <button className="inline-flex p-3 border w-10 h-10 text-xl border-black items-center justify-center" onClick={incQty}><AiOutlinePlus/></button>
            </p>
          </div>
           <div className="flex flex-row gap-4 my-4 justify-center">
              <span className="text-black  text-md">
                <button
                  onClick={addToCartHandler}
                  className="md:px-4 md:w-48 py-2 w-36 h-12 border uppercase tracking-widest border-black bg-white"
                >
                  Add to Cart
                </button>
              </span>
              <span className="text-white text-md  ">
                <button className="md:px-4 py-2 md:w-48 h-12 w-36 tracking-widest bg-black uppercase">
                  Buy Now
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  };
  
export default ProductPage;

export async function getStaticPaths(){

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps(){

  const {data:data} = await axios.get(GET_PRODUCTS_ENDPOINT);

  
  
  return {
props: {products: data["products"]||{}},

revalidate: 1,
  };
}

