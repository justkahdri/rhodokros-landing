import React, {FC} from "react";
import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout: FC = ({children}) => {
  return (
    <>
      <Head>
        <title>RhodoKros | Handcrafted Jewelry</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
