import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  


 

  const removeItemHandler = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="mt-16 max-w-[1100px] container">
      <div className="py-8 text-center text-4xl"> Your Cart </div>
      <div className="mb-8 flex justify-center">
        {" "}
        <div className="h-0.5  bg-black my-2 w-16"></div>{" "}
      </div>
      

      <div>
      {cartItems.length >= 1 && (
        <div className="text-xl grid grid-cols-5 text-center">
          <span className="md:block hidden uppercase col-start-4 col-span-1 tracking-wider">
            
            Quantity
          </span>
          <span className="md:block hidden  uppercase col-span-1 tracking-wider"> Total </span>
        </div> )}
        <div className="h-0.5 place-self-center bg-black my-2 w-full"></div>
        {cartItems.length < 1 && (
       <div className="flex flex-col items-center justify-center">  <div className="flex items-center justify-center">
          <h3>Your shopping bag is empty</h3>
        </div>
       <div className="my-5 flex items-center justify-center font-normal py-2 px-3 border cursor-pointer w-48 border-black">
         <Link href={"/shop"}> 
       <a> <div className=""> Continue Shopping</div>
                </a>
        </Link></div>
        </div>
      )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div className="h-48 my-5" key={item.id}>
              <div className="text-xl grid grid-cols-3 lg:grid-cols-5 text-center gap-5 items-center">
                <div className="relative h-48">
                  {" "}
                  <a className="">
                 {item?.images[0] &&    <Image
                      className=" h-48 w-full object-cover group-hover:scale-105
        transition-transfrom duration-500 ease-in-out
         cursor-pointer "
                      src={item?.images[0]}
                      layout="fill"
                      objectfit="cover"
                      alt="well"
                    />} 
                  </a>
                </div>
                <div className="col-span-2 text-left flex flex-col">
                  <span className="uppercase text-2xl tracking-wider">
              {item.name}<span className="lowercase font-thin">({item.colour}) </span>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm ">Size: <span className="uppercase ">{item.newsize} </span></span>
                  <span className="text-sm md:hidden ">Quantity: <span className="uppercase ">{item.quantity} </span></span>
                  <span className="text-sm md:hidden">Total Price: <span className="uppercase ">
                  ₺{parseInt(item.price) * parseInt(item.quantity)} </span></span>
                    
                  <span
                    onClick={() => removeItemHandler(item)}
                    className="uppercase text-sm underline-offset-2 underline cursor-pointer hover:text-red-600"
                  >
                    Remove{" "}
                  </span></div>
                </div>
                <div className="md:block hidden "> {item.quantity} </div>
                <div className="md:block hidden "> ₺{parseInt(item.price) * parseInt(item.quantity)} </div>
              </div>
            </div>
          ))}
        <div className="h-0.5 place-self-center bg-black my-2 w-full"></div>
      </div>
    </div>
  );
}