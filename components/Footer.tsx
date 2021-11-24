import {StackDivider, Stack, Text, Icon} from "@chakra-ui/react";
import React from "react";
import {FaInstagram, FaFacebook, FaPinterest} from "react-icons/fa";

const Footer = () => {
  return (
    <Stack bg="primary.800" color="white" divider={<StackDivider />} px={6} py={12} spacing={6}>
      <Stack direction="row" spacing={5}>
        <Icon as={FaInstagram} boxSize={8} />
        <Icon as={FaFacebook} boxSize={8} />
        <Icon as={FaPinterest} boxSize={8} />
      </Stack>
      <Stack>
        <Text fontSize={14}>© {new Date().getFullYear()} RhodoKros. All rights reserved.</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
