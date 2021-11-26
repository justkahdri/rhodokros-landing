import React, {FC} from "react";
import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout: FC = ({children}) => {
  const state = {
    title: "RhodoKros - Handcrafted Jewelry",
    description: `Trabajo hecho a mano con rodocrosita y plata 925.
    La piedra también conocida como Rosa del Inca, es una piedra semi-preciosa argentina, originaria de la provincia de Catamarca.
    Local en conventillo, Magallanes 874, La Boca, CABA, Argentina`,
    image: "/images/about.jpg",
  };

  return (
    <>
      <Head>
        <title>{state.title}</title>
        <link href="/rhodokros.ico" rel="icon" type="image/x-icon" />

        {/* <!-- Primary Meta Tags --> */}
        <meta content={state.title} name="title" />
        <meta content={state.description} name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://rhodokros.vercel.app/" property="og:url" />
        <meta content={state.title} property="og:title" />
        <meta content={state.description} property="og:description" />
        <meta content={state.image} property="og:image" />

        {/* <!-- Twitter --> */}
        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://rhodokros.vercel.app/" property="twitter:url" />
        <meta content={state.title} property="twitter:title" />
        <meta content={state.description} property="twitter:description" />
        <meta content={state.image} property="twitter:image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
