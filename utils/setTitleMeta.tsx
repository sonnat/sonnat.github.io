import { Fragment } from "react";

export default function setTitleMeta(title: string): JSX.Element {
  return (
    <Fragment>
      <title>{title}</title>
      <meta name="og:title" content={title} />
    </Fragment>
  );
}
