import React, {FC} from "react";
import {Stack, Box, Heading, Icon, Link, LinkProps, HeadingProps} from "@chakra-ui/react";
import Image, {ImageProps} from "next/image";
import {BiLinkExternal} from "react-icons/bi";

interface Props extends ImageProps {
  isEven?: boolean;
}

const container: FC<Props> = ({children, isEven = false, ...rest}) => {
  return (
    <Stack
      as="section"
      direction={{base: "column", md: isEven ? "row-reverse" : "row"}}
      height="700px"
      justifyContent="space-between"
      px={{base: 2, md: 6, lg: "8vw", "2xl": "15vw"}}
      py={12}
      spacing={12}
    >
      <Stack as="article" justify="center" spacing={6} width={{base: "auto", md: "50%"}}>
        {children}
      </Stack>
      <Box as="figure" flex={1} height="100%" position="relative">
        <Image alt="default side-image" layout="fill" objectFit="contain" {...rest} />
      </Box>
    </Stack>
  );
};

export const title: FC<HeadingProps> = ({children, ...rest}) => (
  <Heading as="h3" fontSize={54} {...rest}>
    {children}
  </Heading>
);

export const external: FC<LinkProps> = ({children, ...rest}) => (
  <Link isExternal align="center" display="inline-flex" {...rest}>
    {children} <Icon as={BiLinkExternal} boxSizing="content-box" height="auto" pl={2} />
  </Link>
);

const SideImage = {container, external, title};

export default SideImage;
