import * as React from "react";
import useCollapse from "react-collapsed";
import CollapsableContext from "./Context";

const componentName = "CollapsableNavItem";

interface Props {
  trigger: JSX.Element;
  content: JSX.Element;
  isExpanded?: boolean;
}

const CollapsableNavItemBase = (props: Props) => {
  const {
    trigger: triggerComponent,
    content,
    isExpanded: isExpandedProp = false
  } = props;

  const { setExpanded: setParentExpanded } =
    React.useContext(CollapsableContext);

  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } =
    useCollapse({
      defaultExpanded: isExpandedProp
    });

  const trigger = React.cloneElement(triggerComponent, {
    ...getToggleProps(),
    active: isExpanded
  });

  const context = React.useMemo(
    () => ({
      isExpanded,
      setExpanded: (bool: boolean) => {
        setExpanded(bool);
        if (setParentExpanded) setParentExpanded(bool);
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isExpanded, setParentExpanded]
  );

  return (
    <div style={{ width: "100%" }}>
      <CollapsableContext.Provider value={context}>
        {trigger}
        <div {...getCollapseProps()}>{content}</div>
      </CollapsableContext.Provider>
    </div>
  );
};

const CollapsableNavItem = React.memo(CollapsableNavItemBase);

CollapsableNavItem.displayName = componentName;

export default CollapsableNavItem;
