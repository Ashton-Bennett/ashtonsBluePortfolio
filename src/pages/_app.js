import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      // primaryLight: "$green200",
      // primaryLightHover: "$green300",
      // primaryLightActive: "$green400",
      // primaryLightContrast: "$green600",
      // primary: "#4ADE7B",
      // primaryBorder: "$green500",
      // primaryBorderHover: "$green600",
      // primarySolidHover: "$green700",
      // primarySolidContrast: "$white",
      // primaryShadow: "$green500",
      // darkestBlue: "#1d4071",
      // darkBlue: "#2370a6",
      // blue: "#2ba4d0",
      // lightBlue: "#34fffc",
      // lightestBlue: "#30fdfa",
      // white: "#ffffff",
      // gradient:
      //   "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      // link: "#5E1DAD",
      // you can also create your own color
      // myColor: "#2ba4d0",
    },
    space: {},
    fonts: {},
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ashton Bennett</title>
        <meta
          name="description"
          content="Ashton Bennett's Web Developer Portfolio"
          key="desc"
        />

        <meta property="og:title" content="Ashton Bennett's Portfolio" />
        <meta
          property="og:description"
          content="Access to projects, technical blogs, and information."
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </Head>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
