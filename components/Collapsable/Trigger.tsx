import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClass from "classnames";
import * as React from "react";

export const componentName = "CollapsableTrigger";

interface Props {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

const useStyles = makeStyles(
  theme => ({
    root: {},
    title: {
      color: theme.colors.text.secondary,
      transition: "color 360ms ease",
      "&:hover": {
        color: theme.colors.text.primary
      }
    },
    divider: {
      width: 1,
      height: `calc(100% - ${theme.typography.pxToRem(24)})`,
      marginRight: theme.typography.pxToRem(10),
      marginLeft: theme.typography.pxToRem(8),
      backgroundColor: theme.colors.divider
    },
    active: {
      "& $title": {
        color: theme.colors.text.primary,
        fontWeight: theme.typography.fontWeight.medium
      }
    }
  }),
  { name: componentName }
);

const CollapsableTrigger = React.memo(function CollapsableTrigger(
  props: Props
) {
  const { className, title, onClick, active = false } = props;

  const classes = useStyles();

  return (
    <div
      role="button"
      className={createClass(classes.root, className, {
        [classes.active]: active
      })}
      onClick={onClick}
    >
      <Text
        title={title}
        variant="bodyText"
        size="small"
        className={classes.title}
      >
        {title}
      </Text>
    </div>
  );
});

CollapsableTrigger.displayName = componentName;

export default CollapsableTrigger;
