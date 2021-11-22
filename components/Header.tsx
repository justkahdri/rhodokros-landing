import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex
      align="center"
      as="header"
      justify="space-between"
      position="absolute"
      px={4}
      top="0"
      width="100vw"
    >
      <Heading>Rhodokros</Heading>
      <HamburgerIcon boxSize={6} cursor="pointer" />
    </Flex>
  );
};

export default Header;
