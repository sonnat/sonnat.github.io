import Button from "@sonnat/ui/Button";
import Container from "@sonnat/ui/Container";
import Divider from "@sonnat/ui/Divider";
import NoSsr from "@sonnat/ui/NoSsr";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClassName from "classnames";
import Logo from "components/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import useStore from "store";
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
          : colors.background.level?.[2],
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        transition: ["box-shadow 360ms ease", "padding-top 360ms ease"].join(
          ","
        )
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
        transition: "opacity 360ms ease," + "visibility 360ms ease"
      },
      divider: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: pxToRem(16),
        marginRight: pxToRem(16),
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
        padding: [[pxToRem(6), pxToRem(16)]],
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
      subHeaderContainer: {},
      subHeaderWrapper: {
        display: "none",
        alignItems: "center",
        width: `calc(100vw - ${pxToRem(32)})`
      },
      [breakpoints.up("lg")]: {
        desktop: { display: "flex" },
        mobile: { display: "none" },
        subHeaderContainer: { display: "none" }
      },
      [breakpoints.down("lg")]: {
        root: {
          flexDirection: "column"
        },
        container: {
          justifyContent: "space-between"
        },
        burgerMenuToggle: { display: "inline-flex" },
        logo: { marginRight: 0 },
        mobile: { display: "flex" },
        desktop: { display: "none" },
        divider: { display: "none" },
        subHeaderWrapper: { display: "flex" }
      },
      [breakpoints.down("sm")]: {
        subHeaderContainer: {
          borderTop: `1px solid ${colors.divider}`
        }
      }
    };
  },
  { name: componentName }
);

const Header = React.memo(function Header(props: Props) {
  const { className, ...otherProps } = props;

  const router = useRouter();
  const classes = useStyles();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const [isMounted, setMounted] = React.useState(false);

  const isDarkMode = useStore(state => state.isDarkMode);
  const toggleDarkMode = useStore(state => state.toggleDarkMode);

  const isDemoActive = router.pathname.includes("/docs/");

  React.useEffect(() => {
    setMounted(true);
    return () => void setMounted(false);
  }, []);

  const createNav = (className: string) => {
    return (
      <nav className={createClassName(classes.nav, classes[className])}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link href="/docs/installation" passHref>
              <Text
                title="Documentation"
                rootNode="a"
                variant="bodyText"
                size="small"
                weight="bolder"
                className={createClassName(classes.navItemLink, {
                  [classes.activeLink]: isDemoActive
                })}
              >
                Docs
              </Text>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="https://sonnat.design" passHref>
              <Text
                title="Design"
                rootNode="a"
                variant="bodyText"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                weight="bolder"
                className={classes.navItemLink}
              >
                Design
              </Text>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link href="https://github.com/sonnat/sonnat-ui" passHref>
              <Text
                title="Github"
                rootNode="a"
                variant="bodyText"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                weight="bolder"
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
    <header
      id="header"
      className={createClassName(classes.root, className)}
      {...otherProps}
    >
      <Container className={classes.container}>
        <Button
          aria-label="Toggle burger menu"
          leadingIcon={!isBurgerMenuOpen ? "burger-menu" : "close-large"}
          variant="inlined"
          onClick={() => void (isMounted && setBurgerMenuOpen(s => !s))}
          className={classes.burgerMenuToggle}
        />
        <Link href="/">
          <a title="Home" className={classes.logo}>
            <Logo size={32} variant="line" />
          </a>
        </Link>
        <NoSsr>
          <Button
            aria-label="Toggle dark mode"
            leadingIcon={!isDarkMode ? "night-o" : "weather-sunny-o"}
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
        toggle={() => void (isMounted && setBurgerMenuOpen(s => !s))}
      />
    </header>
  );
});

Header.displayName = componentName;

export default Header;
