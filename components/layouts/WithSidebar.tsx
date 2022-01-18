import Container from "@sonnat/ui/Container";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Footer from "components/containers/Footer";
import Sidebar from "components/containers/Sidebar";
import { MediaQueryContext } from "context";
import * as React from "react";

const componentName = "WithSidebar";

const useStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      spacings: { spacer },
      typography: { pxToRem }
    } = theme;

    return {
      root: { paddingTop: pxToRem(spacer.px * 4) },
      container: { display: "flex", paddingTop: pxToRem(spacer.px * 4) },
      sidebar: {
        height: `calc(100vh - ${pxToRem(192)})`,
        width: pxToRem(256),
        flexShrink: 0
      },
      content: {
        flex: "1 1",
        minWidth: 0,
        [breakpoints.up("lg")]: { paddingLeft: pxToRem(spacer.px * 2) }
      },
      article: {
        minHeight: `calc(100vh - ${pxToRem(328)})`,
        [breakpoints.down("sm")]: { minHeight: "auto" }
      }
    };
  },
  { name: componentName }
);

const WithSidebar: React.FC = ({ children }) => {
  const classes = useStyles();

  const mediaQuery = React.useContext(MediaQueryContext);

  return (
    <main id="main" className={classes.root}>
      <Container className={classes.container}>
        {mediaQuery.isDesktop && <Sidebar className={classes.sidebar} />}
        <section className={classes.content}>
          <article className={classes.article}>{children}</article>
          <Footer />
        </section>
      </Container>
    </main>
  );
};

WithSidebar.displayName = componentName;

export default WithSidebar;
