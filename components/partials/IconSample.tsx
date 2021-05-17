import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import cls from "classnames";
import * as React from "react";

const componentName = "IconSample";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: theme.typography.pxToRem(8),
      borderRadius: theme.typography.pxToRem(4),
      backgroundColor: theme.colors.transparent,
      transition: "background-color 360ms ease",
      "&:hover": {
        backgroundColor: theme.darkMode
          ? theme.colors.createWhiteColor({ alpha: 0.04 })
          : theme.colors.createBlackColor({ alpha: 0.04 })
      }
    },
    iconWrapper: {
      ...theme.mixins.useIconWrapper(40),
      marginBottom: theme.typography.pxToRem(16),
      color: theme.colors.text.secondary
    },
    iconName: { color: theme.colors.text.secondary, textAlign: "center" }
  }),
  { name: componentName }
);

interface IconSampleProps {
  name: string;
  icon: React.ReactNode;
  className: string;
  onSelect: React.MouseEventHandler;
}

const IconSample: React.FC<IconSampleProps> = React.memo(props => {
  const { name, icon, onSelect, className, ...otherProps } = props;

  const classes = useStyles();

  return (
    <article
      className={cls(classes.root, className)}
      {...otherProps}
      onClick={onSelect}
    >
      <i className={classes.iconWrapper}>{icon}</i>
      <Text variant="caption" className={classes.iconName}>
        {name}
      </Text>
    </article>
  );
});

IconSample.displayName = componentName;

export default IconSample;
