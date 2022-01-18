import PageLoader from "@sonnat/ui/PageLoader";
import { defaultTheme, makeStyles } from "@sonnat/ui/styles";
import useMediaQuery from "@utilityjs/use-media-query";
import useScrollGuard from "@utilityjs/use-scroll-guard";
import { MediaQueryContext } from "context";
import useIsomorphicLayoutEffect from "utils/useIsomorphicLayoutEffect";
import * as React from "react";
import { usePageStore } from "store";

const componentName = "MainWrapper";

const useStyles = makeStyles(
  ({ colors, breakpoints, zIndexes, typography: { pxToRem } }) => ({
    root: {},
    suspend: {
      position: "fixed",
      zIndex: zIndexes.sticky,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.background.origin
    },
    pageLoader: {
      top: [[pxToRem(64)], "!important"],
      [breakpoints.down("md")]: { top: [[pxToRem(104)], "!important"] }
    }
  }),
  { name: "MainWrapper" }
);

const MainWrapper: React.FC = ({ children }) => {
  const classes = useStyles();

  const { disablePageScroll, enablePageScroll } = useScrollGuard();

  const isRouteChanged = usePageStore(state => state.isRouteChanged);
  const isPageLoaded = usePageStore(state => state.isPageLoaded);

  useIsomorphicLayoutEffect(() => {
    if (!isPageLoaded) disablePageScroll();
    else enablePageScroll();
  }, [isPageLoaded]);

  const [isDesktop, isTablet, isMobile] = useMediaQuery([
    defaultTheme.breakpoints.up("lg").replace("@media ", ""),
    defaultTheme.breakpoints.between("sm", "lg").replace("@media ", ""),
    defaultTheme.breakpoints.down("sm").replace("@media ", "")
  ]);

  const context = React.useMemo(
    () => ({ isDesktop, isTablet, isMobile }),
    [isDesktop, isTablet, isMobile]
  );

  return (
    <div id="main-wrapper" className={classes.root}>
      {!isPageLoaded && <div className={classes.suspend}></div>}
      <PageLoader loading={isRouteChanged} className={classes.pageLoader} />
      <MediaQueryContext.Provider value={context}>
        {children}
      </MediaQueryContext.Provider>
    </div>
  );
};

MainWrapper.displayName = componentName;

export default MainWrapper;
