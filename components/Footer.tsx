import {StackDivider, Stack, Text, Icon, Box, Link} from "@chakra-ui/react";
import React from "react";

import LINKS from "@utils/links";

const Footer = () => {
  return (
    <Stack
      as="footer"
      bg="primary.800"
      color="white"
      divider={<StackDivider borderColor="whiteAlpha.700" />}
      px={{base: 6, lg: "8vw", "2xl": "15vw"}}
      py={12}
      spacing={6}
    >
      <Stack direction="row" spacing={5}>
        {LINKS.map(({name, url, icon}) => (
          <Link key={name} isExternal aria-label={name} color="white" fontSize={1} href={url}>
            <Icon as={icon} boxSize={8} />
          </Link>
        ))}
      </Stack>
      <Box color="whiteAlpha.700" fontSize={14}>
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
