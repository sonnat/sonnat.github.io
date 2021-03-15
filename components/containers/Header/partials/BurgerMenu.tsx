import PortalDestination from "@sonnat/ui/PortalDestination";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClass from "classnames";
import { useNavJsx } from "nav-schema";
import * as React from "react";

const componentName = "BurgerMenu";

interface Props {
  open?: boolean;
  toggle?: () => void;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
      darkMode,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        left: 0,
        transform: "translateX(-100%)",
        boxShadow: `1px 0 2px 0 ${colors.divider}`,
        position: "fixed",
        width: pxToRem(256),
        height: `calc(100% - ${pxToRem(64)})`,
        overflow: "auto",
        top: pxToRem(64),
        backgroundColor: darkMode ? colors.background.level?.[2] : colors.white,
        zIndex: zIndexes.header - 1,
        opacity: 0,
        padding: [[pxToRem(48), pxToRem(16)]],
        visibility: "hidden",
        transition:
          "transform 360ms ease, opacity 260ms ease, visibility 260ms ease"
      },
      dimmer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: zIndexes.header - 2,
        backgroundColor: !darkMode
          ? "rgba(0, 0, 0, 0.26)"
          : "rgba(0, 0, 0, 0.56)",
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 360ms ease, visibility 360ms ease"
      },
      open: {
        opacity: 1,
        visibility: "visible",
        "&$root": {
          left: 0,
          transform: "translateX(0)"
        }
      },
      active: {},
      [breakpoints.up("lg")]: {
        root: { opacity: 0, visibility: "hidden" },
        dimmer: { opacity: 0, visibility: "hidden" }
      }
    };
  },
  { name: componentName }
);

const BurgerMenu = React.memo(function BurgerMenu(props: Props) {
  const { open = false, toggle: toggleFn } = props;

  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const navJsx = useNavJsx(
    createClass(classes.root, { [classes.open]: isOpen })
  );

  const toggle = React.useCallback(() => {
    if (toggleFn) requestAnimationFrame(toggleFn);
    else requestAnimationFrame(() => setOpen(s => !s));
  }, [toggleFn]);

  React.useEffect(() => {
    requestAnimationFrame(() => setOpen(open));
  }, [open]);

  return (
    <PortalDestination>
      {navJsx}
      <div
        className={createClass(classes.dimmer, {
          [classes.open]: isOpen
        })}
        onClick={toggle}
      ></div>
    </PortalDestination>
  );
});

BurgerMenu.displayName = componentName;

export default BurgerMenu;
