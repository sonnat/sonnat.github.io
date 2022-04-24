import { useTheme } from "@sonnat/ui/styles";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";

const useStyles = makeStyles(
  ({
    breakpoints,
    typography: { fontFamily, variants, fontWeight, pxToRem },
    spacings: { spacer }
  }) => ({
    root: {
      display: "flex",
      alignItems: "center",
      height: pxToRem(240),
      [breakpoints.down("sm")]: {
        height: "auto",
        flexDirection: "column",
        alignItems: "stretch",
        "& $color": { height: pxToRem(120) }
      }
    },
    color: {
      flexGrow: 1,
      flexShrink: 1,
      height: "100%",
      fontFamily: fontFamily.monospace,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: spacer.rem
    },
    colorName: {
      textTransform: "uppercase",
      ...variants.subtitle,
      fontWeight: fontWeight.bold
    },
    colorAccess: { ...variants.caption },
    colorCode: { marginTop: "auto", fontWeight: fontWeight.bold }
  }),
  { name: "SystemColorDemo" }
);

interface SystemColorDemoBaseProps {
  className?: string;
  colorClass:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
}

type SystemColorDemoProps = Omit<
  React.ComponentPropsWithRef<"div">,
  keyof SystemColorDemoBaseProps
> &
  SystemColorDemoBaseProps;

const SystemColorDemo = (props: SystemColorDemoProps) => {
  const { colorClass, ...otherProps } = props;

  const { colors } = useTheme();
  const color = colors[colorClass];

  const classes = useStyles();

  return (
    <div className={classes.root} {...otherProps}>
      <div
        className={classes.color}
        style={{
          backgroundColor: color.light,
          color: colors.getContrastColorOf(color.light)
        }}
      >
        <strong className={classes.colorName}>lighter</strong>
        <code
          className={classes.colorAccess}
        >{`theme.colors.${colorClass}.light`}</code>
        <code className={classes.colorCode}>{color.light}</code>
      </div>
      <div
        className={classes.color}
        style={{
          backgroundColor: color.origin,
          color: colors.getContrastColorOf(color.origin)
        }}
      >
        <strong className={classes.colorName}>origin</strong>
        <code
          className={classes.colorAccess}
        >{`theme.colors.${colorClass}.origin`}</code>
        <code className={classes.colorCode}>{color.origin}</code>
      </div>
      <div
        className={classes.color}
        style={{
          backgroundColor: color.dark,
          color: colors.getContrastColorOf(color.dark)
        }}
      >
        <strong className={classes.colorName}>darker</strong>
        <code
          className={classes.colorAccess}
        >{`theme.colors.${colorClass}.dark`}</code>
        <code className={classes.colorCode}>{color.dark}</code>
      </div>
    </div>
  );
};

export default SystemColorDemo;
