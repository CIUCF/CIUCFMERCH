import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Image from "next/image";

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
      {cartItems.length < 1 && (
        <div className="empty-cart">
          <h3>Your shopping bag is empty</h3>
        </div>
      )}

      <div>
        <div className="text-xl grid grid-cols-5 text-center">
          <span className="uppercase col-start-4 col-span-1 tracking-wider">
            {" "}
            Quantity
          </span>
          <span className="uppercase col-span-1 tracking-wider"> Total </span>
        </div>
        <div className="h-0.5 place-self-center bg-black my-2 w-full"></div>
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div className="h-48 my-5">
              <div className="text-xl grid grid-cols-5 text-center gap-5 items-center">
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
                  <span className="text-sm">Size: <span className="uppercase ">{item.newsize} </span> </span>
                  <span
                    onClick={() => removeItemHandler(item)}
                    className="uppercase text-sm underline-offset-2 underline cursor-pointer hover:text-red-600"
                  >
                    Remove{" "}
                  </span>{" "}
                </div>
                <div> {item.quantity} </div>
                <div> {parseInt(item.price) * parseInt(item.quantity)} </div>
              </div>
            </div>
          ))}
        <div className="h-0.5 place-self-center bg-black my-2 w-full"></div>
      </div>
    </div>
  );
}