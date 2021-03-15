import Sidebar from "components/containers/Sidebar";
import Footer from "components/containers/Footer";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Container from "@sonnat/ui/Container";
import * as React from "react";
import GlobalContext from "GlobalContext";

const componentName = "WithSidebar";

const PAGES_BLACK_LIST = ["ErrorPage", "NotFoundPage"];

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: { paddingTop: pxToRem(64) },
      container: { display: "flex", paddingTop: pxToRem(64) },
      sidebar: {
        height: `calc(100vh - ${pxToRem(192)})`,
        width: pxToRem(256),
        flexShrink: 0,
        [breakpoints.down("lg")]: {
          display: "none"
        }
      },
      content: {
        flex: "1 0",
        [breakpoints.up("lg")]: {
          paddingRight: pxToRem(32),
          paddingLeft: pxToRem(32)
        }
      }
    };
  },
  { name: componentName }
);

const WithSidebar = ({ children }: Props) => {
  const { pageName } = React.useContext(GlobalContext);

  const isAllowedPage = React.useMemo(
    () => !PAGES_BLACK_LIST.includes(pageName),
    [pageName]
  );

  const classes = useStyles();

  return isAllowedPage ? (
    <main id="main" className={classes.root}>
      <Container className={classes.container}>
        <Sidebar className={classes.sidebar} />
        <section className={classes.content}>
          <article>{children}</article>
          <Footer />
        </section>
      </Container>
    </main>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

WithSidebar.displayName = componentName;

export default WithSidebar;
