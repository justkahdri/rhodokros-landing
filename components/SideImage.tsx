import {Stack, Box} from "@chakra-ui/react";
import Image, {ImageProps} from "next/image";
import React, {FC} from "react";

interface Props extends ImageProps {
  isEven?: boolean;
}

const SideImage: FC<Props> = ({children, isEven = false, ...rest}) => {
  // columns={2} gap={16}
  return (
    <Stack
      direction={isEven ? "row-reverse" : "row"}
      height="600px"
      justifyContent="space-between"
      px={{base: 6, lg: "8vw", "2xl": "15vw"}}
      py={12}
      spacing={4}
    >
      <Stack justify="center" spacing={6} width="50%">
        {children}
      </Stack>
      <Box as="figure" flex={1} height="100%" position="relative">
        <Image alt="alt default" objectFit="contain" {...rest} />
      </Box>
    </Stack>
  );
};

export default SideImage;
