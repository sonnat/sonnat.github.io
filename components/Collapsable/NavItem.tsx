import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import CollapsableContext from "./Context";

const componentName = "CollapsableNavItem";

interface Props {
  trigger: JSX.Element;
  content: JSX.Element;
  isExpanded?: boolean;
}

const useStyles = makeStyles(
  {
    root: { width: "100%" },
    collapseWrapper: {
      transition: "height 360ms ease"
    },
    collapseContainer: {}
  },
  { name: componentName }
);

const CollapsableNavItem = React.memo(function CollapsableNavItem(
  props: Props
) {
  const { trigger: triggerComponent, content, isExpanded = false } = props;

  const classes = useStyles();
  const [isCollapsed, setCollapsed] = React.useState(!isExpanded);

  const { setExpanded: setParentExpanded } = React.useContext(
    CollapsableContext
  );

  const triggerClickListener = React.useCallback(() => {
    setCollapsed(c => !c);
  }, []);

  const triggerProps = {
    onClick: triggerClickListener,
    active: !isCollapsed
  };

  const trigger = React.cloneElement(triggerComponent, triggerProps);

  const context = React.useMemo(
    () => ({
      isExpanded: !isCollapsed,
      setExpanded: (bool: boolean) => {
        setCollapsed(!bool);
        if (setParentExpanded) setParentExpanded(bool);
      }
    }),
    [isCollapsed, setParentExpanded]
  );

  return (
    <div className={classes.root}>
      <CollapsableContext.Provider value={context}>
        {trigger}
        <Collapse
          theme={{
            collapse: classes.collapseWrapper,
            content: classes.collapseContainer
          }}
          isOpened={!isCollapsed}
        >
          {content}
        </Collapse>
      </CollapsableContext.Provider>
    </div>
  );
});

CollapsableNavItem.displayName = componentName;

export default CollapsableNavItem;
