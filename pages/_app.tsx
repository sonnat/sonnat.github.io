import { AppProps } from "next/app";

import "../styles/fonts.css";

const isProduction = process.env.NODE_ENV === "production";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}
