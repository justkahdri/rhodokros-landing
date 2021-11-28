import React from "react";
import {Box, Flex, Heading, Text, Button, Stack} from "@chakra-ui/react";
import Image from "next/image";

import banner from "@images/banner_2.png";

const Hero = () => {
  return (
    <Flex
      bg="primary.800"
      color="white"
      flexDir={{base: "column-reverse", md: "row"}}
      h={["auto", "auto", "740px", "650px"]}
      justify="space-between"
      mb={{md: "200px", base: 0}}
      p={{base: 2, md: 6}}
      px={{xl: "8vw", "2xl": "15vw"}}
    >
      <Box flex={1} maxW={{lg: "600px", "2xl": "750px"}} my="7%">
        <Heading as="h2" fontSize={{base: 32, md: 42, lg: 54}} fontWeight={900}>
          A journey to Argentina as you&apos;ve never seen before.
        </Heading>
        <Text mb={8} mt={6}>
          Handcrafted jewelry with a strong relation with the country. Made with rhodochrosite and
          silver 925.
        </Text>
        {/* <Stack direction="row" height={12}>
          <Button
            as="a"
            colorScheme="primary"
            flex={1}
            fontWeight={500}
            height="100%"
            href="/gallery"
          >
            See Gallery
          </Button>
          <Button
            as="a"
            colorScheme="silver"
            flex={1}
            fontWeight={500}
            height="100%"
            href="#about"
            variant="light"
          >
            About
          </Button>
        </Stack> */}
      </Box>
      <Box
        alignSelf={{base: "center", md: "unset"}}
        as="figure"
        height={{md: "880px"}}
        position="relative"
        width={{md: "510px"}}
      >
        <Image
          alt="Rhodokros Banner"
          height="880px"
          objectFit="contain"
          objectPosition="60% 50%"
          src={banner}
          width="510px"
        />
      </Box>
    </Flex>
  );
};

export default Hero;
