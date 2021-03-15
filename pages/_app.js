import Page from "../components/Page";
import NProgress from "nprogress";
import Router from "next/router";
import "../components/styles/nprogress.css";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const customTheme = {
  primary: {
    100: "white",
    200: "#244F74",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
};

const theme = extendTheme({ customTheme });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ParallaxProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
