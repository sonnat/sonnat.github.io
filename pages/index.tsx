import Button from "@sonnat/ui/Button";
import Container from "@sonnat/ui/Container";
import Divider from "@sonnat/ui/Divider";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import { adjustColor } from "@sonnat/ui/styles/colorUtils";
import Text from "@sonnat/ui/Text";
import Footer from "components/containers/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { defaultKeywordsMetaContent, siteFullAddress } from "sharedVars";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const pageName = "LandingPage";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      breakpoints,
      typography: { pxToRem, fontWeight }
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
        minHeight: `calc(100vh - ${pxToRem(72 + 64)})`,
        paddingTop: pxToRem(32),
        paddingBottom: pxToRem(32),
        display: "flex",
        alignItems: "center"
      },
      logo: {},
      sectionBody: { display: "flex", alignItems: "center" },
      sectionContent: { flexShrink: 0, maxWidth: pxToRem(530) },
      heroTitle: {
        paddingTop: pxToRem(32),
        paddingBottom: pxToRem(8),
        fontWeight: fontWeight.bold
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
      sectionImagery: {
        width: "100%",
        "& > img": {
          minWidth: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          minHeight: "100%",
          height: "auto",
          width: "auto"
        }
      },
      footer: { marginTop: 0 },
      [breakpoints.down("md")]: {
        "@global": { "#main": { paddingTop: pxToRem(104) } },
        section: { minHeight: `calc(100vh - ${pxToRem(104 + 72)})` },
        sectionBody: {
          flexDirection: "column-reverse"
        },
        sectionImagery: {
          margin: "0 auto",
          width: "60%"
        },
        logo: { display: "none" },
        sectionContent: {
          textAlign: "center"
        },
        license: {
          justifyContent: "center"
        }
      },
      [breakpoints.down("sm")]: {
        section: { minHeight: `calc(100vh - ${pxToRem(104 + 160)})` },
        heroTitle: {
          fontSize: theme.typography.variants.h4.fontSize
        },
        sectionImagery: {
          margin: "0 auto",
          width: "75%"
        }
      }
    };
  },
  { name: pageName }
);

const LandingPage: NextPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/static/media/landing-illustration.png"
          // @ts-ignore
          imagesrcset={[
            "/static/media/landing-illustration-640.png 640w",
            "/static/media/landing-illustration.png 1452w"
          ].join(", ")}
          imagesizes={["(max-width: 959px) 100vw, 50vw"].join(", ")}
        />
        {setTitleMeta(
          "Home | Sonnat Developer Tools, React Components & Resources"
        )}
        {setDescriptionMeta(
          "React component library using Sonnat Design System to build faster, elegant, and accessible web applications"
        )}
        {setCanonicalMeta(siteFullAddress)}
        {setKeywordsMeta(defaultKeywordsMetaContent)}
      </Head>
      <main id="main">
        <section id="main-section" className={classes.section}>
          <Container>
            <div className={classes.sectionBody}>
              <div className={classes.sectionContent}>
                <svg
                  className={classes.logo}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  style={{ width: 64, height: 64 }}
                >
                  <title>Sonnat Design System&apos;s Logo</title>
                  <circle cx="24" cy="24" r="24" fill="#ea475b" />
                  <rect
                    x="9.6"
                    y="9.6"
                    width="28.8"
                    height="28.8"
                    fill="#fff"
                    fillOpacity="0"
                  />
                  <path
                    d="M33.46,32.49,21.18,35.94h0a3.79,3.79,0,0,1-3.9-.92l-3.56-3.56a.55.55,0,0,1,.23-.92l11-3a.7.7,0,0,1,.8.23l3.91,3.9a3.74,3.74,0,0,0,2.75,1.15A3.92,3.92,0,0,1,33.46,32.49Z"
                    transform="translate(0 0)"
                    fill="#e5e5e5"
                    opacity="0.9"
                    style={{ isolation: "isolate" }}
                  />
                  <path
                    d="M35.19,26.07l-7.35-7.35-1.26-1.26h0a3.88,3.88,0,0,1,0-5.51h0A2.52,2.52,0,0,1,28.07,11L15.9,14.24a7.41,7.41,0,0,0-1.83,1,3.94,3.94,0,0,0,0,5.51l7.46,7.57,1.14,1.15a3.88,3.88,0,0,1,0,5.51h0a3.27,3.27,0,0,1-1.6.92l12.28-3.33h0a3.1,3.1,0,0,0,1.72-1,3.77,3.77,0,0,0,1.15-2.76A3.49,3.49,0,0,0,35.19,26.07Z"
                    transform="translate(0 0)"
                    fill="#f4f4f4"
                    opacity="0.84"
                    style={{ isolation: "isolate" }}
                  />
                  <path
                    d="M32,12a3.76,3.76,0,0,0-3.9-.92h0L15.9,14.24c.35,0,.69-.11.92-.11a3.73,3.73,0,0,1,2.76,1.15h0l4,4a.76.76,0,0,0,.81.23l3.33-.91,8-2.07c.34-.12.46-.46.23-.69Z"
                    transform="translate(0 0)"
                    fill="#fff"
                    opacity="0.9"
                    style={{ isolation: "isolate" }}
                  />
                </svg>
                <Text rootNode="h1" variant="h3" className={classes.heroTitle}>
                  Sonnat Developer Tools,
                  <br />
                  React Components & Resources
                </Text>
                <Text
                  rootNode="p"
                  variant="body"
                  color="textSecondary"
                  className={classes.heroParagraph}
                >
                  A set of tools and components to create a consistent,
                  sustainable
                  <br />
                  and accessible digital experience.
                </Text>
                <div className={classes.heroFooter}>
                  <Link passHref href="/docs/installation">
                    <Button
                      rootNode="a"
                      label="Get Started"
                      color="primary"
                      className={classes.gettingStartedBtn}
                    />
                  </Link>
                  <div className={classes.license}>
                    <Text
                      rootNode="p"
                      variant="caption"
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
                      variant="caption"
                      color="textSecondary"
                      className={classes.githubLink}
                    >
                      GitHub
                    </Text>
                  </div>
                </div>
              </div>
              <div className={classes.sectionImagery}>
                <img
                  alt="The Illustration of Sonnat Developer Tools, React Components & Resources"
                  src="/static/media/landing-illustration.png"
                  width={629}
                  height={469}
                  decoding="async"
                  sizes={["(max-width: 959px) 100vw, 50vw"].join(", ")}
                  srcSet={[
                    "/static/media/landing-illustration-640.png 640w",
                    "/static/media/landing-illustration.png 1452w"
                  ].join(", ")}
                />
              </div>
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
