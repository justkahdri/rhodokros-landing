import React from "react";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/merriweather/900.css";
import "@fontsource/merriweather/700.css";

import theme from "@theme";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
