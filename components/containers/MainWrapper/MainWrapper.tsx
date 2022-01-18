import PageLoader from "@sonnat/ui/PageLoader";
import makeStyles from "@sonnat/ui/styles/makeStyles";
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

  return (
    <div id="main-wrapper" className={classes.root}>
      <PageLoader loading={isPageLoading} className={classes.pageLoader} />
      {children}
    </div>
  );
};

MainWrapper.displayName = componentName;

export default MainWrapper;
