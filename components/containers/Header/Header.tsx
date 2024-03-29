import {
  BurgerMenu as BurgerMenuIcon,
  CloseLarge,
  SonnatThin,
  WeatherNightO,
  WeatherSunnyO
} from "@sonnat/icons";
import { Container, Divider, IconButton, NoSsr, Text } from "@sonnat/ui";
import useIsMounted from "@utilityjs/use-is-mounted";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import c from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDarkModeStore, usePageStore } from "store";
import BurgerMenu from "./partials/BurgerMenu";
import { MediaQueryContext } from "context";

const componentName = "Header";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      zIndexes,
      breakpoints,
      darkMode,
      colors: { text, divider, background, primary },
      spacings: { spaces },
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: zIndexes.header,
        display: "flex",
        alignItems: "center",
        paddingTop: 0,
        minHeight: pxToRem(64),
        backgroundColor: !darkMode
          ? background.light.origin
          : background.dark.accents[2],
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        transition: ["box-shadow 360ms ease", "padding-top 360ms ease"].join(
          ","
        ),
        [breakpoints.down("lg")]: {
          flexDirection: "column",
          "& $container": { justifyContent: "space-between" },
          "& $logo": { marginRight: 0 }
        },
        [breakpoints.down("sm")]: {
          "& $subHeaderContainer": {
            borderTop: `1px solid ${!darkMode ? divider.dark : divider.light}`
          }
        }
      },
      container: {
        display: "flex",
        height: pxToRem(64),
        alignItems: "center"
      },
      logo: {
        marginRight: "auto",
        cursor: "pointer",
        opacity: 1,
        visibility: "visible",
        color: !darkMode ? text.dark.secondary : text.light.secondary,
        transition: [
          "opacity 360ms ease",
          "visibility 360ms ease",
          "color 360ms ease"
        ].join(", "),
        "&:hover": { color: !darkMode ? text.dark.primary : text.light.primary }
      },
      divider: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: spaces[7].rem,
        marginRight: spaces[7].rem,
        height: 24
      },
      nav: { display: "flex", alignItems: "center" },
      desktop: {},
      mobile: {},
      navList: {
        padding: "0",
        margin: "0",
        listStyle: "none",
        display: "flex",
        alignItems: "center"
      },
      navItem: {
        padding: [[spaces[2].rem, spaces[7].rem]],
        cursor: "pointer",
        "&:hover > $navItemLink": {
          color: !darkMode ? text.dark.primary : text.light.primary
        }
      },
      navItemLink: {
        color: !darkMode ? text.dark.secondary : text.light.secondary,
        transition: "color 360ms ease"
      },
      activeLink: {
        color: !darkMode ? primary.origin : primary.light
      },
      darkModeToggle: {},
      burgerMenuToggle: { display: "inline-flex" },
      subHeader: {},
      subHeaderContainer: {
        display: "flex",
        alignItems: "center",
        height: pxToRem(40)
      },
      subHeaderWrapper: {
        display: "flex",
        alignItems: "center",
        width: `calc(100vw - ${pxToRem(32)})`
      }
    };
  },
  { name: componentName }
);

const HeaderBase = (props: Props) => {
  const { className, ...otherProps } = props;

  const router = useRouter();
  const classes = useStyles();

  const mediaQuery = React.useContext(MediaQueryContext);

  const isMounted = useIsMounted();

  const isDarkMode = useDarkModeStore(state => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore(state => state.toggleDarkMode);
  const isBurgerMenuOpen = usePageStore(state => state.isBurgerMenuOpen);
  const setBurgerMenuOpen = usePageStore(state => state.setBurgerMenuOpen);

  const isDemoActive = router.pathname.includes("/docs/");

  const createNav = (className: string) => {
    return (
      <nav
        className={c(classes.nav, classes[className as "desktop" | "mobile"])}
      >
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/docs/installation" passHref>
              <Text
                title="Documentation"
                as="a"
                variant="subtitleSmall"
                className={c(classes.navItemLink, {
                  [classes.activeLink]: isDemoActive
                })}
              >
                Docs
              </Text>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link
              href="https://codesandbox.io/s/sonnat-with-nextjs-ts-mkfum"
              passHref
            >
              <Text
                title="CodeSandbox Playground"
                as="a"
                variant="subtitleSmall"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navItemLink}
              >
                Playground
              </Text>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="https://github.com/sonnat" passHref>
              <Text
                title="Github"
                as="a"
                variant="subtitleSmall"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navItemLink}
              >
                GitHub
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header id="header" className={c(classes.root, className)} {...otherProps}>
      <Container className={classes.container}>
        {!mediaQuery.isDesktop && (
          <IconButton
            aria-label="Toggle burger menu"
            icon={!isBurgerMenuOpen ? <BurgerMenuIcon /> : <CloseLarge />}
            variant="inlined"
            onClick={() =>
              void (isMounted() && setBurgerMenuOpen(!isBurgerMenuOpen))
            }
            className={classes.burgerMenuToggle}
          />
        )}
        <Link href="/">
          <a title="Home" className={classes.logo}>
            <SonnatThin size={32} title="Sonnat Design System's Logo" />
          </a>
        </Link>
        <NoSsr>
          <IconButton
            aria-label="Toggle dark mode"
            icon={!isDarkMode ? <WeatherNightO /> : <WeatherSunnyO />}
            variant="inlined"
            onClick={() => void toggleDarkMode()}
            className={classes.darkModeToggle}
          />
        </NoSsr>

        {mediaQuery.isDesktop && (
          <>
            <Divider vertical className={classes.divider} />
            {createNav("desktop")}
          </>
        )}
      </Container>
      {!mediaQuery.isDesktop && (
        <>
          <Container className={classes.subHeaderContainer}>
            <div className={classes.subHeaderWrapper}>
              <div className={classes.subHeader}>{createNav("mobile")}</div>
            </div>
          </Container>
          <BurgerMenu
            open={isBurgerMenuOpen}
            toggle={() =>
              void (isMounted() && setBurgerMenuOpen(!isBurgerMenuOpen))
            }
          />
        </>
      )}
    </header>
  );
};

const Header = React.memo(HeaderBase);

Header.displayName = componentName;

export default Header;
