import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")!;
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  });

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
