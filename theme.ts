import {extendTheme, ButtonProps} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        color: "blackAlpha.800",
      },
    },
  },
  fonts: {
    heading: "Merriweather",
    body: "Inter",
  },
  colors: {
    primary: {500: "#9e1414", 600: "#8F1313", 700: "#871125", 800: "#581118"},
    salmon: {100: "#F7A49E", 200: "#ac726e", 400: "#9d4442", 500: "#9a2e2e", 700: "#860c27"},
    secondary: "#173848",
    silver: {500: "#e2e2e2"},
  },
  components: {
    Link: {
      baseStyle: {
        fontSize: "20px",
        fontWeight: 600,
        color: "primary.500",
      },
    },
    Text: {
      baseStyle: {
        fontSize: "20px",
      },
    },
    Button: {
      // defaultProps: {},
      variants: {
        light: ({colorScheme}: ButtonProps) => ({
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
