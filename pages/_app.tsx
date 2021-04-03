import { MDXProvider } from "@mdx-js/react";
import CssBaseline from "@sonnat/ui/CssBaseline";
import PageLoader from "@sonnat/ui/PageLoader";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";
import useDarkMode from "@sonnat/ui/styles/useDarkMode";
import WithHeader from "components/layouts/WithHeader";
import { AppProps } from "next/app";
import Head from "next/head";
// eslint-disable-next-line import/no-named-as-default
import Router from "next/router";
import * as React from "react";
import smoothScroll from "smoothscroll-polyfill";
import useStore from "store";
import { /*analytics,*/ createComponentMapping, setTitleMeta } from "utils";

import "../styles/fonts.css";
import "@sonnat/ui/static/sonnat-font-icon.min.css";

interface MDXMeta {
  title: string;
  description: string;
  layout?: React.FC<React.PropsWithChildren<{}>>;
}

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

// const isProduction = process.env.NODE_ENV === "production";

const componentMapping = createComponentMapping();

export default function App(props: AppProps) {
  const { Component: Page, pageProps } = props;

  useGlobalStyles();

  const isDarkMode = useStore(state => state.isDarkMode);
  const theme = useDarkMode(isDarkMode);

  // @ts-ignore
  const meta = (Page.isMDXComponent ? Page({}).props.meta : {}) as MDXMeta;
  const MDXContentLayout = meta.layout;

  const [loading, setLoading] = React.useState(false);

  const routeChangeStart = () => setLoading(true);
  const routeChangeComplete = () => {
    setLoading(false);
    // if (isProduction) analytics.logPageView();
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
    // @ts-ignore
    if (process.browser) window.theme = theme;
  }, [theme]);

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

  // React.useEffect(() => {
  // if (isProduction) {
  // analytics.initGA();
  // analytics.logPageView();
  // }
  // }, []);

  return (
    <SonnatInitializer theme={theme}>
      <Head>
        {setTitleMeta("Sonnat Developer Tools, React Components & Resources")}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=5.0, minimum-scale=1.0"
          key="viewport"
        />
        <link rel="preload" as="style" href={googleFontFamily} />
        <link rel="stylesheet" href={googleFontFamily} />
      </Head>
      <div id="main-wrapper">
        <CssBaseline />
        <WithHeader>
          <PageLoader loading={loading} top={64} />
          <MDXProvider components={componentMapping}>
            {MDXContentLayout ? (
              <MDXContentLayout>
                <Page {...pageProps} />
              </MDXContentLayout>
            ) : (
              <Page {...pageProps} />
            )}
          </MDXProvider>
        </WithHeader>
      </div>
    </SonnatInitializer>
  );
}
