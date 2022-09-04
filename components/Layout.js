import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useContext } from "react";
import { Store } from "../utils/Store";
import vercel from "../public/vercel.svg";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
