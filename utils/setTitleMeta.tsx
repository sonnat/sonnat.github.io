import { Fragment } from "react";

export default function setTitleMeta(title: string) {
  return (
    <Fragment>
      <title>{title}</title>
      <meta name="og:title" content={title} />
    </Fragment>
  );
}
