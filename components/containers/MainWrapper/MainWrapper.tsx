import PageLoader from "@sonnat/ui/PageLoader";
import { defaultTheme, makeStyles } from "@sonnat/ui/styles";
import useMediaQuery from "@utilityjs/use-media-query";
import { MediaQueryContext } from "context";
import * as React from "react";
import { usePageStore } from "store";

const componentName = "MainWrapper";

const useStyles = makeStyles(
  ({ breakpoints, typography: { pxToRem } }) => ({
    root: {},
    pageLoader: {
      top: [[pxToRem(64)], "!important"],
      [breakpoints.down("md")]: { top: [[pxToRem(104)], "!important"] }
    }
  }),
  { name: "MainWrapper" }
);

const MainWrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  const isPageLoading = usePageStore(state => state.isPageLoading);

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
      <PageLoader loading={isPageLoading} className={classes.pageLoader} />
      <MediaQueryContext.Provider value={context}>
        {children}
      </MediaQueryContext.Provider>
    </div>
  );
};

MainWrapper.displayName = componentName;

export default MainWrapper;
