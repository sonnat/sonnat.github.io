import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import c from "classnames";
import * as React from "react";

const componentName = "IconSample";

const useStyles = makeStyles(
  ({
    darkMode,
    radius,
    colors: { text, ...colors },
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
          ? colors.createWhiteColor({ alpha: 0.04 }, false, darkMode)
          : colors.createBlackColor({ alpha: 0.04 }, false, darkMode)
      }
    },
    iconWrapper: {
      ...asIconWrapper(40),
      marginBottom: spaces[7].rem,
      "& > svg": {
        fill: !darkMode ? text.dark.secondary : text.light.secondary,
        width: "100%",
        height: "100%"
      }
    },
    iconName: {
      color: !darkMode ? text.dark.secondary : text.light.secondary,
      textAlign: "center"
    }
  }),
  { name: componentName }
);

interface IconSampleProps {
  name: string;
  iconComponent: React.NamedExoticComponent;
  className: string;
  onSelect: React.MouseEventHandler;
}

const IconSample = (props: IconSampleProps) => {
  const {
    name,
    iconComponent: Icon,
    onSelect,
    className,
    ...otherProps
  } = props;

  const classes = useStyles();

  return (
    <article
      className={c(classes.root, className)}
      {...otherProps}
      onClick={onSelect}
    >
      <i className={classes.iconWrapper}>
        <Icon />
      </i>
      <Text variant="caption" className={classes.iconName}>
        {name}
      </Text>
    </article>
  );
};

IconSample.displayName = componentName;

export default IconSample;
