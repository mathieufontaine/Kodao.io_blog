import Header from "../components/Header";
import Footer from "../components/Footer";
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
          content="Découvrez nos derniers articles sur le blog de Kodao consacré au Web3.0 !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main onClick={() => setMenuOpen(false)}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
