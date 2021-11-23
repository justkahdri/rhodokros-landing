import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Merriweather",
    body: "Inter",
  },
  colors: {
    primary: {500: "#9e1414", 600: "#871125", 700: "#860c27", 800: "#581118"},
    salmon: {100: "#F7A49E", 200: "#ac726e", 400: "#9d4442", 500: "#9a2e2e"},
    secondary: "#173848",
    silver: {500: "#e2e2e2"},
  },
  components: {
    Button: {
      variants: {
        light: ({colorScheme}) => ({
          backgroundColor: `${colorScheme}.500`,
          color: "primary.800",
          shadow: "none",
          _hover: {
            backgroundColor: `salmon.100`,
            shadow: "lg",
          },
        }),
      },
    },
  },
});

export default theme;
