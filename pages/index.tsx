import { Button, Container, Divider, Text } from "@sonnat/ui";
import { adjustColorHsla, makeStyles } from "@sonnat/ui/styles";
import Footer from "components/containers/Footer";
import SonnatSvgLogo from "components/SonnatSvgLogo";
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

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    const primary = !darkMode ? colors.primary.origin : colors.primary.light;

    const primaryHover = adjustColorHsla(primary, {
      saturation: -8,
      lightness: +8
    });

    const primaryActive = adjustColorHsla(primary, {
      saturation: +8,
      lightness: -4
    });

    return {
      "@global": {
        "#main": { paddingTop: pxToRem(64) }
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
        paddingBottom: pxToRem(16)
      },
      heroParagraph: {},
      heroFooter: {},
      gettingStartedBtn: {
        marginTop: pxToRem(32),
        marginBottom: pxToRem(32)
      },
      license: { display: "flex" },
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
          "&:after": { backgroundColor: primary }
        },
        "&:visited": {
          color: primaryHover,
          "&:hover": {
            color: primaryActive,
            "&:after": { backgroundColor: primary }
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
        sectionBody: { flexDirection: "column-reverse" },
        sectionImagery: { margin: "0 auto", width: "60%" },
        logo: { display: "none" },
        sectionContent: { textAlign: "center" },
        license: { justifyContent: "center" }
      },
      [breakpoints.down("sm")]: {
        section: { minHeight: `calc(100vh - ${pxToRem(104 + 160)})` },
        heroTitle: { fontSize: theme.typography.variants.h4.fontSize },
        sectionImagery: { margin: "0 auto", width: "75%" }
      }
    };
  },
  { name: "Page" }
);

const Page: NextPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/static/media/landing-illustration.png"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
                <SonnatSvgLogo className={classes.logo} size={64} />
                <Text
                  as="h1"
                  variant="h3"
                  weight="bold"
                  className={classes.heroTitle}
                >
                  Sonnat Developer Tools,
                  <br />
                  React Components & Resources
                </Text>
                <Text
                  as="p"
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
                      as="a"
                      label="Get Started"
                      color="primary"
                      size="large"
                      className={classes.gettingStartedBtn}
                    />
                  </Link>
                  <div className={classes.license}>
                    <Text
                      as="p"
                      variant="caption"
                      color="textSecondary"
                      className={classes.licenseText}
                    >
                      Under the MIT License
                    </Text>
                    <Divider vertical className={classes.licenseDivider} />
                    <Text
                      as="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/sonnat"
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

export default Page;
