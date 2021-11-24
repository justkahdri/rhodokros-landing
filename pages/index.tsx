import React from "react";
import {Box, Flex, Heading, Text, Button, Stack, Link, Icon} from "@chakra-ui/react";
import type {NextPage} from "next";
import Head from "next/head";
import {BiLinkExternal} from "react-icons/bi";
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
        p={6}
        position="relative"
        px={{lg: "8vw", "2xl": "15vw"}}
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
              See Gallery
            </Button>
            <Button colorScheme="silver" flex={1} fontWeight={500} height="100%" variant="light">
              About
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
      <SideImage isEven alt="Side" layout="fill" src={"/vectors/jewelry.svg"}>
        <Heading as="h3">See our work.</Heading>
        <Text>
          {"You can see our gallery or go to our "}
          <Link isExternal fontWeight={400} href="https://www.instagram.com/rhodokros">
            instagram
          </Link>
          {" were we post our products periodically."}
        </Text>
        <Link>Go to gallery</Link>
      </SideImage>
      <SideImage alt="Side" layout="fill" src={"/vectors/map.svg"}>
        <Heading as="h3">Visit our shop</Heading>
        <Text>
          We are in <i>&quot;El conventillo de los sueños&quot;</i> at La Boca, Buenos Aires.
          Usually from Monday to Saturday, between 10:00-16:00.
        </Text>
        <Link
          isExternal
          align="center"
          display="flex"
          href="https://www.google.com/maps/place/RhodoKros/@-34.6398246,-58.3626528,15z/data=!4m5!3m4!1s0x0:0xf8455fab32e62143!8m2!3d-34.6398009!4d-58.3626664"
        >
          See on Google Maps
          <Icon as={BiLinkExternal} boxSizing="content-box" height="auto" pl={2} />
        </Link>
      </SideImage>
      <Footer />
    </>
  );
};

export default Home;
