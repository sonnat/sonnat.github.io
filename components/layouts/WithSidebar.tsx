import Container from "@sonnat/ui/Container";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Footer from "components/containers/Footer";
import Sidebar from "components/containers/Sidebar";
import * as React from "react";

const componentName = "WithSidebar";

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
  const classes = useStyles();

  return (
    <main id="main" className={classes.root}>
      <Container className={classes.container}>
        <Sidebar className={classes.sidebar} />
        <section className={classes.content}>
          <article>{children}</article>
          <Footer />
        </section>
      </Container>
    </main>
  );
};

WithSidebar.displayName = componentName;

export default WithSidebar;
