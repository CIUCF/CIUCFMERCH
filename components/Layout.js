import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {   StoreProvider } from "../utils/Store";
import vercel from "../public/vercel.svg";

const Layout = ({ children }) => {
 
 
  
  return (
    <>
    <StoreProvider>
      <Nav />
      {children}
      <Footer />
      </StoreProvider>
    </>
  );
};

export default Layout;
