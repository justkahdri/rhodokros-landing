import React from "react";
import {Flex, Heading, Icon} from "@chakra-ui/react";
import {BiMenu} from "react-icons/bi";

const Header = () => {
  return (
    <Flex align="center" as="header" bg="primary.800" justify="space-between" p={6}>
      <Heading>Rhodokros</Heading>
      <Icon as={BiMenu} boxSize={6} cursor="pointer" />
    </Flex>
  );
};

export default Header;