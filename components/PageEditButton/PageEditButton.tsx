import PencilO from "@sonnat/icons/PencilO";
import { IconButton } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import c from "classnames";
import * as React from "react";

const componentName = "PageEditButton";

interface Props {
  className?: string;
  href: string;
}

const useStyles = makeStyles(
  { root: { marginLeft: "auto" } },
  { name: componentName }
);

const PageEditButtonBase = (props: Props) => {
  const { className, href, ...otherProps } = props;

  const classes = useStyles();

  return (
    <IconButton
      {...otherProps}
      className={c(classes.root, className)}
      as="a"
      href={`https://github.com/sonnat/sonnat.github.io/blob/main/${href}`}
      variant="inlined"
      target="_blank"
      rel="noopener noreferrer"
      title="Edit page on github"
      aria-label="Edit page on github"
      icon={<PencilO />}
    />
  );
};

const PageEditButton = React.memo(PageEditButtonBase);

PageEditButton.displayName = componentName;

export default PageEditButton;
