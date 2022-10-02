import "../styles/globals.css";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout title="CIUCF Shop —  TShirts , Hoodies , Sweatshirts and many more —  CIUCF SHOP">
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;
