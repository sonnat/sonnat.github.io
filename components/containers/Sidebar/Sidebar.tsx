import type { DefaultTheme } from "@sonnat/ui/styles/defaultTheme";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import detectScrollBarWidth from "@sonnat/ui/utils/detectScrollBarWidth";
import createClass from "classnames";
import { useNavJsx } from "nav-schema";
import * as React from "react";

interface Props {
  className?: string;
}

interface MakeStylesData {
  scrollBarWidth: number;
}

const componentName = "Sidebar";

const useStyles = makeStyles<DefaultTheme, MakeStylesData, "root" | "hintText">(
  theme => {
    const {
      typography: { pxToRem }
    } = theme;

    return {
      root: ({ scrollBarWidth }) => ({
        position: "sticky",
        top: pxToRem(128),
        paddingBottom: pxToRem(32),
        zIndex: 1,
        "&:after": {
          marginRight: pxToRem(scrollBarWidth),
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: pxToRem(32),
          height: pxToRem(16)
          // background: `linear-gradient(transparent, ${colors.background.origin})`
        }
      }),
      hintText: { marginTop: pxToRem(4) }
    };
  },
  { name: componentName }
);

const Sidebar: React.FC<Props> = React.memo(function Sidebar({
  children,
  className
}) {
  const navJsx = useNavJsx();

  const scrollBarWidth = React.useMemo(
    () => (typeof window !== "undefined" ? detectScrollBarWidth() : 0),
    []
  );

  const classes = useStyles({ scrollBarWidth });

  return (
    <aside className={createClass(className, classes.root)}>
      {navJsx}
      {children}
    </aside>
  );
});

Sidebar.displayName = componentName;

export default Sidebar;
