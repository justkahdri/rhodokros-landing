// 1. Import `extendTheme`
import {extendTheme} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {500: "#9e1414", 600: "#871125", 700: "#860c27", 800: "#581118"},
    salmon: {200: "#ac726e", 400: "#9d4442", 500: "#9a2e2e"},
    secondary: "#173848",
    silver: "#e2e2e2",
  },
});

export default theme;
