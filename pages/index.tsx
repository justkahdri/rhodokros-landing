import React from "react";
import {Box, Flex, Heading, Text, Button} from "@chakra-ui/react";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";

import Header from "@components/Header";

const Home: NextPage = () => {
  return (
    <Box position="relative">
      <Head>
        <title>Rhodokros | Silver</title>
      </Head>
      <Header />
      <Flex
        as="section"
        bg="primary.800"
        className="hero"
        direction="column"
        h="75vh"
        overflowY="visible"
        pl={5}
        position="relative"
        pr="50vw"
        pt="100px"
      >
        <Heading>Vende online gratis y a tu manera</Heading>
        <Text>
          Coloca tus productos a un clic de tus clientes y recibe los pedidos en tu WhatsApp.
        </Text>
        <Button>Comprar</Button>
        <Button>Saber mas</Button>
        <Box as="figure" overflow="hidden" position="absolute" right={5} rounded="lg">
          <Image
            alt="Rhodokros Banner"
            height="900px"
            objectFit="cover"
            src="/images/banner.jpg"
            width="510px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
