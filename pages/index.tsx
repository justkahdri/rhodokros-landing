import React from "react";
import {Box, Flex, Heading, Text, Button, Stack, Link, Icon} from "@chakra-ui/react";
import type {NextPage} from "next";
import Head from "next/head";
import {BsArrowRight} from "react-icons/bs";
import Image from "next/image";

import banner from "@images/banner_2.png";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SideImage from "@components/SideImage";

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
        color="white"
        h="650px"
        justify="space-between"
        mb="200px"
        position="relative"
        px={{base: 6, lg: "8vw", "2xl": "15vw"}}
        py={6}
      >
        <Box flex={1} maxW="600px" my="7%">
          <Heading as="h2" fontSize={54} fontWeight={900}>
            A journey to Argentina as you&apos;ve never seen before.
          </Heading>
          <Text mb={8} mt={6}>
            Handmade jewelry with a strong relation with the country. Made with rhodochrosite and
            silver 925.
          </Text>
          <Stack direction="row" height={12}>
            <Button colorScheme="primary" flex={1} fontWeight={500} height="100%">
              Comprar
            </Button>
            <Button colorScheme="silver" flex={1} fontWeight={500} height="100%" variant="light">
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
      <SideImage alt="Side" layout="fill" src={"/vectors/map.svg"}>
        <Heading>Adapta Pency a tu comercio</Heading>
        <Text>
          Úsalo como tienda online o carta digital. Habilita el envío de los pedidos a WhatsApp o
          utilizalo como catálogo.
        </Text>
        <Link colorScheme="primary">
          Explora comercios <Icon as={BsArrowRight} boxSize={5} />
        </Link>
      </SideImage>
      <Footer />
    </>
  );
};

export default Home;
