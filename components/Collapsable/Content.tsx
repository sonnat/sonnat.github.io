import * as React from "react";

export const componentName = "CollapsableContent";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const CollapsableContent = React.memo<Props>(function CollapsableContent(
  props
) {
  const { className, children, ...otherProps } = props;

  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  );
});

CollapsableContent.displayName = componentName;

export default CollapsableContent;
