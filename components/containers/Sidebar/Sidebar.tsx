import makeStyles from "@sonnat/ui/styles/makeStyles";
import c from "classnames";
import { useNavJsx } from "nav-schema";
import * as React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const componentName = "Sidebar";

const useStyles = makeStyles(
  theme => {
    const {
      spacings: { spacer },
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        position: "sticky",
        top: pxToRem(spacer.px * 8),
        paddingBottom: pxToRem(spacer.px * 2),
        zIndex: 1,
        "&:after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: pxToRem(spacer.px * 2),
          height: pxToRem(16)
        }
      },
      hintText: { marginTop: pxToRem(spacer.px * 0.25) }
    };
  },
  { name: componentName }
);

const Sidebar = ({ children, className }: Props) => {
  const navJsx = useNavJsx();

  const classes = useStyles();

  return (
    <aside className={c(className, classes.root)}>
      {navJsx}
      {children}
    </aside>
  );
};

Sidebar.displayName = componentName;

export default Sidebar;
