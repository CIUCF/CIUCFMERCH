import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import {   StoreProvider } from "../utils/Store";
import vercel from "../public/vercel.svg";

const Layout = ({ children,title,description }) => {
 
 
  
  return (
    <>
    <Head> 
      <title>{title} </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/ciucf.ico" />
        <meta name="description" content={description} />

    </Head>
    <StoreProvider>
      <Nav />
      {children}
      <Footer />
      </StoreProvider>
    </>
  );
};

export default Layout;
