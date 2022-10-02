import "../styles/globals.css";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;
