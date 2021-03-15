import * as React from "react";
import createClass from "classnames";
import makeStyles from "@sonnat/ui/styles/makeStyles";

export const componentName = "CollapsableContent";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles(
  {
    root: {}
  },
  { name: componentName }
);

const CollapsableContent = React.memo(function CollapsableContent(
  props: Props
) {
  const { className, children } = props;

  const localClass = useStyles();

  return (
    <div className={createClass(localClass.root, className)}>{children}</div>
  );
});

CollapsableContent.displayName = componentName;

export default CollapsableContent;
