import React from "react";
import Ciucf_shop from "../public/Ciucf_shop.png";
import { useContext } from "react";
import { Store } from "../utils/Store";
import Image from "next/image";
import Link from "next/link";
import { BiCartAlt } from "react-icons/bi";

const Nav = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <div>
      <div id="navbar" className="top-0 fixed z-10 ">
        <div className="bg-white h-16 px-4 py-3 w-screen flex  ">
          <div className=" container items-center justify-between flex  ">
            <Link href={"/"}>
              <div className="cursor-pointer h-full">
                {" "}
                <Image
                  width={180}
                  objectFit="contain"
                  src={Ciucf_shop}
                  alt="well"
                />{" "}
              </div>
            </Link>
            <div className="text-black flex gap-8 text-xl py-1">
              <ul className="tracking-wider flex gap-8">
                <li>New</li>
                <li>Shop</li>
                <li>Ciucf</li>
              </ul>
              <div>
                <Link href={"/cart"}>
                  <div className="flex">
                    <span className=" text-3xl">
                      {" "}
                      <BiCartAlt />{" "}
                    </span>
                    {cart.cartItems.length > 0 && (
                      <span className="bg-red-400 rounded-full h-5 w-5 text-center flex items-center justify-center text-white text-xs">
                        {" "}
                        {cart.cartItems.reduce(
                          (a, c) => a + c.quantity,
                          0
                        )}{" "}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;