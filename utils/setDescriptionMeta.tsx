import { Fragment } from "react";

export default function setDescriptionMeta(description: string): JSX.Element {
  return (
    <Fragment>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
    </Fragment>
  );
}
