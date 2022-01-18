import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import c from "classnames";
import * as React from "react";

const componentName = "IconSample";

const useStyles = makeStyles(
  ({
    colors,
    darkMode,
    radius,
    mixins: { asIconWrapper },
    spacings: { spaces }
  }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: spaces[3].rem,
      borderRadius: radius.small,
      backgroundColor: colors.transparent,
      transition: "background-color 360ms ease",
      "&:hover": {
        backgroundColor: darkMode
          ? colors.createWhiteColor({ alpha: 0.04 }, true)
          : colors.createBlackColor({ alpha: 0.04 }, true)
      }
    },
    iconWrapper: {
      ...asIconWrapper(40),
      marginBottom: spaces[7].rem,
      color: colors.text.secondary
    },
    iconName: { color: colors.text.secondary, textAlign: "center" }
  }),
  { name: componentName }
);

interface IconSampleProps {
  name: string;
  icon: React.ReactNode;
  className: string;
  onSelect: React.MouseEventHandler;
}

const IconSample = (props: IconSampleProps) => {
  const { name, icon, onSelect, className, ...otherProps } = props;

  const classes = useStyles();

  return (
    <article
      className={c(classes.root, className)}
      {...otherProps}
      onClick={onSelect}
    >
      <i className={classes.iconWrapper}>{icon}</i>
      <Text variant="caption" className={classes.iconName}>
        {name}
      </Text>
    </article>
  );
};

IconSample.displayName = componentName;

export default IconSample;
