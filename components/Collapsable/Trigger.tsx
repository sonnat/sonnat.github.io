import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClass from "classnames";
import * as React from "react";

const componentName = "CollapsableTrigger";

interface Props {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

const useStyles = makeStyles(
  ({ colors, spacings: { spaces }, typography: { fontWeight, pxToRem } }) => ({
    root: {},
    title: {
      color: colors.text.secondary,
      transition: "color 360ms ease",
      "&:hover": { color: colors.text.primary }
    },
    divider: {
      width: 1,
      height: `calc(100% - ${pxToRem(24)})`,
      marginRight: spaces[4].rem,
      marginLeft: spaces[3].rem,
      backgroundColor: colors.divider
    },
    active: {
      "& $title": {
        color: colors.text.primary,
        fontWeight: fontWeight.medium
      }
    }
  }),
  { name: componentName }
);

const CollapsableTriggerBase = (props: Props) => {
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
      <Text title={title} variant="bodySmall" className={classes.title}>
        {title}
      </Text>
    </div>
  );
};

const CollapsableTrigger = React.memo(CollapsableTriggerBase);

CollapsableTrigger.displayName = componentName;

export default CollapsableTrigger;
