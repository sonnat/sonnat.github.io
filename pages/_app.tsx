import { AppProps } from "next/app";
// eslint-disable-next-line import/no-named-as-default
import Router from "next/router";
import * as React from "react";
import SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";
import CssBaseline from "@sonnat/ui/CssBaseline";
import PageLoader from "@sonnat/ui/PageLoader";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import smoothScrollPolyfill from "smoothscroll-polyfill";

import "../styles/fonts.css";

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
  const routeChangeComplete = () => setLoading(false);

  React.useEffect(() => {
    const sonnatServerStyles = document.getElementById("sonnat-jss-ssr");

    if (sonnatServerStyles)
      sonnatServerStyles.parentElement?.removeChild(sonnatServerStyles);
  }, []);

  React.useEffect(() => {
    smoothScrollPolyfill();
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

  return (
    <SonnatInitializer>
      <div id="main-wrapper" data-page={pageName}>
        <CssBaseline />
        <PageLoader loading={loading} />
        <Page {...pageProps} />
      </div>
    </SonnatInitializer>
  );
}
