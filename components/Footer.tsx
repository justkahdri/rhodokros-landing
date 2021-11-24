import {StackDivider, Stack, Text, Icon, Box} from "@chakra-ui/react";
import React from "react";
import {FaInstagram, FaFacebook, FaPinterest} from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      bg="primary.800"
      color="white"
      divider={<StackDivider />}
      px={{base: 6, lg: "8vw", "2xl": "15vw"}}
      py={12}
      spacing={6}
    >
      <Stack direction="row" spacing={5}>
        <Icon as={FaInstagram} boxSize={8} />
        <Icon as={FaFacebook} boxSize={8} />
        <Icon as={FaPinterest} boxSize={8} />
      </Stack>
      <Box fontSize={14}>
        <Text fontSize="inherit">© {new Date().getFullYear()} RhodoKros. ALL RIGHTS RESERVED.</Text>
        <Text fontSize="inherit">
          &quot;El conventillo de los sueños&quot; | Magallanes 874 - La Boca - Ciudad Autónoma de
          Buenos Aires - Argentina
        </Text>
      </Box>
    </Stack>
  );
};

export default Footer;
