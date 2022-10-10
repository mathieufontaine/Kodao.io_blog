import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Kodao.io Blog</title>
        <meta
          name="description"
          content="Check out our latest articles on Kodao's Web3.0 blog!"
        />
        <link rel="icon" href="/images/logo/logo.ico" />
      </Head>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main onClick={() => setMenuOpen(false)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
