import { Fragment } from "react";

export default function setCanonicalMeta(canonical: string): JSX.Element {
  return (
    <Fragment>
      <link rel="canonical" href={canonical} />
      <meta name="og:url" content={canonical} />
    </Fragment>
  );
}
