import {
  BurgerMenu as BurgerMenuIcon,
  CloseLarge,
  SonnatThin,
  WeatherNightO,
  WeatherSunnyO
} from "@sonnat/icons";
import { Container, Divider, IconButton, NoSsr, Text } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import c from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useDarkModeStore, usePageStore } from "store";
import BurgerMenu from "./partials/BurgerMenu";

const componentName = "Header";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
      breakpoints,
      darkMode,
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
          ? colors.background.origin
          : colors.background.accents[2],
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        transition: ["box-shadow 360ms ease", "padding-top 360ms ease"].join(
          ","
        ),
        [breakpoints.up("lg")]: {
          "& $desktop": { display: "flex" },
          "& $mobile": { display: "none" },
          "& $subHeaderContainer": { display: "none" }
        },
        [breakpoints.down("lg")]: {
          flexDirection: "column",
          "& $container": { justifyContent: "space-between" },
          "& $burgerMenuToggle": { display: "inline-flex" },
          "& $logo": { marginRight: 0 },
          "& $mobile": { display: "flex" },
          "& $desktop": { display: "none" },
          "& $divider": { display: "none" },
          "& $subHeaderWrapper": { display: "flex" }
        },
        [breakpoints.down("sm")]: {
          "& $subHeaderContainer": { borderTop: `1px solid ${colors.divider}` }
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
        color: colors.text.secondary,
        transition: [
          "opacity 360ms ease",
          "visibility 360ms ease",
          "color 360ms ease"
        ].join(", "),
        "&:hover": { color: colors.text.primary }
      },
      divider: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: spaces[7].rem,
        marginRight: spaces[7].rem,
        height: 24
      },
      nav: { alignItems: "center" },
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
        "&:hover > $navItemLink": { color: colors.text.primary }
      },
      navItemLink: {
        color: colors.text.secondary,
        transition: "color 360ms ease"
      },
      activeLink: {
        color: !darkMode ? colors.primary.origin : colors.primary.light
      },
      darkModeToggle: {},
      burgerMenuToggle: { display: "none" },
      subHeader: {},
      subHeaderContainer: {
        display: "flex",
        alignItems: "center",
        height: pxToRem(40)
      },
      subHeaderWrapper: {
        display: "none",
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

  const [isMounted, setMounted] = React.useState(false);

  const isDarkMode = useDarkModeStore(state => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore(state => state.toggleDarkMode);
  const isBurgerMenuOpen = usePageStore(state => state.isBurgerMenuOpen);
  const setBurgerMenuOpen = usePageStore(state => state.setBurgerMenuOpen);

  const isDemoActive = router.pathname.includes("/docs/");

  React.useEffect(() => {
    setMounted(true);
    return () => void setMounted(false);
  }, []);

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
            <Link href="https://github.com/sonnat" passHref>
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
        <IconButton
          aria-label="Toggle burger menu"
          icon={!isBurgerMenuOpen ? <BurgerMenuIcon /> : <CloseLarge />}
          variant="inlined"
          onClick={() =>
            void (isMounted && setBurgerMenuOpen(!isBurgerMenuOpen))
          }
          className={classes.burgerMenuToggle}
        />
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
        <Divider vertical className={classes.divider} />
        {createNav("desktop")}
      </Container>
      <Container className={classes.subHeaderContainer}>
        <div className={classes.subHeaderWrapper}>
          <div className={classes.subHeader}>{createNav("mobile")}</div>
        </div>
      </Container>
      <BurgerMenu
        open={isBurgerMenuOpen}
        toggle={() => void (isMounted && setBurgerMenuOpen(!isBurgerMenuOpen))}
      />
    </header>
  );
};

const Header = React.memo(HeaderBase);

Header.displayName = componentName;

export default Header;
