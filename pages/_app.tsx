import CssBaseline from "@sonnat/ui/CssBaseline";
import PageLoader from "@sonnat/ui/PageLoader";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";
import { AppProps } from "next/app";
import Head from "next/head";
// eslint-disable-next-line import/no-named-as-default
import Router from "next/router";
import * as React from "react";
import smoothScroll from "smoothscroll-polyfill";
import { analytics, setTitleMeta } from "utils";
import "../styles/fonts.css";

const googleFontFamily =
  "https://fonts.googleapis.com/css2?" +
  "family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&" +
  "family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&" +
  "display=swap";

const useGlobalStyles = makeStyles(
  {
    "@global": {
      "html, body": { scrollBehavior: "smooth" },
      img: { verticalAlign: "middle" }
    }
  },
  { name: "GlobalStyles" }
);

const isProduction = process.env.NODE_ENV === "production";

export default function App(props: AppProps) {
  const { Component: Page, pageProps } = props;
  const pageName = Page.name || Page.displayName || "UnnamedPage";

  useGlobalStyles();

  const [loading, setLoading] = React.useState(false);

  const routeChangeStart = () => setLoading(true);
  const routeChangeComplete = () => {
    setLoading(false);
    if (isProduction) analytics.logPageView();
  };

  React.useEffect(() => {
    const sonnatServerStyles = document.getElementById("sonnat-jss-ssr");

    if (sonnatServerStyles)
      sonnatServerStyles.parentElement?.removeChild(sonnatServerStyles);
  }, []);

  React.useEffect(() => {
    smoothScroll.polyfill();
  }, []);

  React.useEffect(() => {
    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeComplete);
    Router.events.on("routeChangeError", routeChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeComplete", routeChangeComplete);
      Router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  React.useEffect(() => {
    if (isProduction) {
      analytics.initGA();
      analytics.logPageView();
    }
  }, []);

  return (
    <SonnatInitializer>
      <Head>
        {setTitleMeta("Sonnat Dev: React Components & Developer Resources")}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=5.0, minimum-scale=1.0"
          key="viewport"
        />
        <link rel="preload" as="style" href={googleFontFamily} />
        <link
          rel="stylesheet"
          href={googleFontFamily}
          media="print"
          onLoad="this.media = 'all';"
        />
      </Head>
      <div id="main-wrapper" data-page={pageName}>
        <CssBaseline />
        <PageLoader loading={loading} />
        <Page {...pageProps} />
      </div>
    </SonnatInitializer>
  );
}
