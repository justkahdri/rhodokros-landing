import React from "react";
import {Stack} from "@chakra-ui/react";
import Image, {ImageProps} from "next/image";

const ImageDivider = (props: ImageProps) => {
  return (
    <Stack
      height={{base: "400px", "2xl": "600px"}}
      mx="auto"
      my={{"2xl": 12}}
      position="relative"
      width="100%"
    >
      <Image alt="Section Divider" layout="fill" objectFit="cover" {...props} />
    </Stack>
  );
};

export default ImageDivider;
