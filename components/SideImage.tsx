import {Stack, Box, SimpleGrid} from "@chakra-ui/react";
import Image, {ImageProps} from "next/image";
import React, {FC} from "react";

const SideImage: FC<ImageProps> = ({children, ...rest}) => {
  return (
    <SimpleGrid columns={2} gap={16} height="500px" p={6}>
      <Stack justify="center" width="70%">
        {children}
      </Stack>
      <Box as="figure" height="100%" position="relative" width="fill-available">
        <Image alt="alt default" objectFit="contain" {...rest} />
      </Box>
    </SimpleGrid>
  );
};

export default SideImage;
