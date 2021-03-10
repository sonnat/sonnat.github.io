import Button from "@sonnat/ui/Button";
import Container from "@sonnat/ui/Container";
import Divider from "@sonnat/ui/Divider";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import { adjustColor } from "@sonnat/ui/styles/colorUtils";
import Text from "@sonnat/ui/Text";
import Footer from "components/containers/Footer";
import Logo from "components/Logo";
import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { defaultKeywordsMetaContent } from "sharedVars";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const pageName = "LandingPage";

interface Props {}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    const primary = !darkMode ? colors.primary.origin : colors.primary.light;

    const primaryHover = adjustColor(primary, {
      saturation: -8,
      lightness: +8
    });

    const primaryActive = adjustColor(primary, {
      saturation: +8,
      lightness: -4
    });

    return {
      "@global": {
        "#main": {
          paddingTop: pxToRem(64)
        }
      },
      section: {
        minHeight: `calc(100vh - ${pxToRem(136)})`,
        paddingTop: pxToRem(32),
        paddingBottom: pxToRem(32),
        display: "flex",
        alignItems: "center"
      },
      sectionBody: {},
      sectionContent: {},
      heroTitle: {
        paddingTop: pxToRem(32),
        paddingBottom: pxToRem(8),
        "& > span": { paddingLeft: pxToRem(4) }
      },
      heroParagraph: {},
      heroFooter: {},
      gettingStartedBtn: {
        marginTop: pxToRem(32),
        marginBottom: pxToRem(32)
      },
      license: {
        display: "flex"
      },
      licenseText: {},
      licenseDivider: {
        marginRight: pxToRem(8),
        marginLeft: pxToRem(8),
        marginTop: pxToRem(4),
        marginBottom: pxToRem(4)
      },
      githubLink: {
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        color: primary,
        "&:hover": {
          color: primaryActive,
          "&:after": {
            backgroundColor: primary
          }
        },
        "&:visited": {
          color: primaryHover,
          "&:hover": {
            color: primaryActive,
            "&:after": {
              backgroundColor: primary
            }
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: pxToRem(1),
          backgroundColor: colors.transparent
        }
      },
      sectionImagery: {},
      footer: { marginTop: 0 },
      [breakpoints.down("sm")]: {
        sectionContent: {
          textAlign: "center"
        },
        license: {
          justifyContent: "center"
        }
      }
    };
  },
  { name: pageName }
);

const LandingPage: NextPage<Props> = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        {setTitleMeta(
          "Sonnat Developer Tools, React Components & Resources | Home"
        )}
        {setDescriptionMeta(
          "React component library using Sonnat Design System to build faster, elegant, and accessible web applications"
        )}
        {setCanonicalMeta("https://sonnat.dev")}
        {setKeywordsMeta(defaultKeywordsMetaContent)}
      </Head>
      <main id="main">
        <section id="main-section" className={classes.section}>
          <Container>
            <div className={classes.sectionBody}>
              <div className={classes.sectionContent}>
                <Logo size={64} />
                <Text
                  rootNode="h1"
                  variant="heroText"
                  weight="bolder"
                  size="small"
                  responsive
                  className={classes.heroTitle}
                >
                  Sonnat Developer Tools,
                  <br />
                  React Components & Resources
                </Text>
                <Text
                  rootNode="p"
                  variant="bodyText"
                  size="large"
                  color="textSecondary"
                  responsive
                  className={classes.heroParagraph}
                >
                  A set of tools and components to create a consistent,
                  sustainable
                  <br />
                  and accessible digital experience.
                </Text>
                <div className={classes.heroFooter}>
                  <Button
                    label="Get Started"
                    color="primary"
                    className={classes.gettingStartedBtn}
                  />
                  <div className={classes.license}>
                    <Text
                      rootNode="p"
                      variant="captionText"
                      size="large"
                      color="textSecondary"
                      className={classes.licenseText}
                    >
                      Under the MIT License
                    </Text>
                    <Divider vertical className={classes.licenseDivider} />
                    <Text
                      rootNode="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/sonnat/sonnat-ui"
                      variant="captionText"
                      size="large"
                      color="textSecondary"
                      className={classes.githubLink}
                    >
                      GitHub
                    </Text>
                  </div>
                </div>
              </div>
              <div className={classes.sectionImagery}></div>
            </div>
          </Container>
        </section>
        <Container>
          <Footer className={classes.footer} />
        </Container>
      </main>
    </React.Fragment>
  );
};

LandingPage.displayName = pageName;

export default LandingPage;
