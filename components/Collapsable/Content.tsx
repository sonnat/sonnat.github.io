import * as React from "react";

const componentName = "CollapsableContent";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const CollapsableContentBase = (props: Props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  );
};

const CollapsableContent = React.memo(CollapsableContentBase);

CollapsableContent.displayName = componentName;

export default CollapsableContent;
