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
  ({ colors, typography: { fontWeight } }) => ({
    active: {
      "& > span": {
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
      className={createClass(className, { [classes.active]: active })}
      onClick={onClick}
    >
      <Text title={title} variant="bodySmall">
        {title}
      </Text>
    </div>
  );
};

const CollapsableTrigger = React.memo(CollapsableTriggerBase);

CollapsableTrigger.displayName = componentName;

export default CollapsableTrigger;
