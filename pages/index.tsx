import React from "react";
import {Box, Flex, Heading, Text, Button, Stack} from "@chakra-ui/react";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";

import banner from "@images/banner.jpg";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rhodokros | Silver</title>
      </Head>
      <Header />
      <Flex
        as="section"
        bg="primary.800"
        className="hero"
        h="600px"
        mb="200px"
        p={6}
        position="relative"
      >
        <Box flex={1} my="7%">
          <Heading as="h2" fontSize={54} fontWeight={900}>
            Vende online gratis y a tu manera
          </Heading>
          <Text mb={8} mt={6}>
            Coloca tus productos a un clic de tus clientes y recibe los pedidos en tu WhatsApp.
          </Text>
          <Stack direction="row" height={12}>
            <Button flex={1} height="100%">
              Comprar
            </Button>
            <Button colorScheme="silver" flex={1} height="100%" variant="light">
              Saber mas
            </Button>
          </Stack>
        </Box>
        <Box overflow="visible" rounded="lg">
          <Box
            as="figure"
            height="880px"
            overflow="hidden"
            position="relative"
            rounded="lg"
            width="510px"
          >
            <Image
              alt="Rhodokros Banner"
              layout="fill"
              objectFit="cover"
              objectPosition="60% 50%"
              src={banner}
            />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Home;
