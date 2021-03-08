import { ErrorProps } from "next/error";

const pageName = "ErrorPage";

export default function ErrorPage({ statusCode }: ErrorProps) {
  return <h1>{statusCode} | Error!</h1>;
}

ErrorPage.displayName = pageName;

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};
