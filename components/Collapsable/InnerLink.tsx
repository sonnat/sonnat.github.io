import * as React from "react";
import ActiveLink, { Props as ActiveLinkProps } from "components/ActiveLink";
import CollapsableContext from "./Context";

interface Props extends ActiveLinkProps {}

const CollapsableInnerLink = (props: Props) => {
  const { children, ...otherProps } = props;
  const { setExpanded } = React.useContext(CollapsableContext);

  const onActive = React.useCallback(() => {
    setExpanded?.(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActiveLink onActive={onActive} {...otherProps}>
      {children}
    </ActiveLink>
  );
};

export default CollapsableInnerLink;
