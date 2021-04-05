import PageLoader from "@sonnat/ui/PageLoader";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";
import useStore from "store";

const componentName = "MainWrapper";

const useStyles = makeStyles(
  theme => ({
    root: {},
    pageLoader: {
      top: [[theme.typography.pxToRem(64)], "!important"],
      [theme.breakpoints.down("md")]: {
        top: [[theme.typography.pxToRem(104)], "!important"]
      }
    }
  }),
  { name: "MainWrapper" }
);

const MainWrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  const isPageLoading = useStore(state => state.isPageLoading);

  return (
    <div id="main-wrapper" className={classes.root}>
      <PageLoader loading={isPageLoading} className={classes.pageLoader} />
      {children}
    </div>
  );
};

MainWrapper.displayName = componentName;

export default MainWrapper;
