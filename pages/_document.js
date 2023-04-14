import { Html, Head, Main, NextScript } from "next/document";

import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <div className="layout">
        <Head>
          <title>Only 4 U</title>
        </Head>
        {/* <header>
          <Navbar />
        </header> */}
        <body>
          <div className="main-container">
            <Main />
          </div>
          <NextScript />
        </body>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Html>
  );
}
