import React from "react";
import {Stack, Heading} from "@chakra-ui/react";
import Image from "next/image";

import logo from "/public/vectors/logo_white.svg";

const Header = () => {
  return (
    <Stack
      align="center"
      as="header"
      bg="primary.800"
      color="white"
      direction="row"
      p={6}
      px={{lg: "8vw", "2xl": "15vw"}}
    >
      <Image alt="Logo" height={36} src={logo} width={36} />
      <Heading as="h1">RhodoKros</Heading>
    </Stack>
  );
};

export default Header;
