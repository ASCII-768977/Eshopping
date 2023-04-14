import "@/styles/globals.css";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}
