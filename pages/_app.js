import PropTypes from "prop-types";

import "../styles/fonts.css";

const isProduction = process.env.NODE_ENV === "production";

export default function App(props) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
