import PropTypes from "prop-types";

const pageName = "ErrorPage";

export default function ErrorPage({ statusCode }) {
  return <h1>{statusCode} | Error!</h1>;
}

ErrorPage.displayName = pageName;

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};
