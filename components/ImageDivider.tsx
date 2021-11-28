import React from "react";
import {Stack} from "@chakra-ui/react";
import Image, {ImageProps} from "next/image";

const ImageDivider = (props: ImageProps) => {
  return (
    <Stack height="400px" maxW="1600px" mx="auto" position="relative" width="100%">
      <Image alt="Section Divider" layout="fill" objectFit="cover" {...props} />
    </Stack>
  );
};

export default ImageDivider;
