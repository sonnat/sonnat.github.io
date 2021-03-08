import Button from "@sonnat/ui/Button";
import Container from "@sonnat/ui/Container";
import Divider from "@sonnat/ui/Divider";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import createClassName from "classnames";
import Logo from "components/Logo";
import GlobalContext from "GlobalContext";
import Link from "next/link";
import * as React from "react";

const componentName = "Header";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
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
        paddingRight: pxToRem(16),
        paddingLeft: pxToRem(16),
        backgroundColor: !darkMode
          ? colors.background.origin
          : colors.background.level?.[1],
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        transition:
          "box-shadow 360ms ease," +
          "background-color 360ms ease," +
          "padding-top 360ms ease"
      },
      container: {
        display: "flex",
        alignItems: "center",
        height: "100%"
      },
      logo: {
        marginRight: "auto",
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
      nav: { display: "flex", alignItems: "center" },
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
      darkModeToggle: {},
      landing: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0)",
        backgroundColor: colors.transparent,
        paddingTop: pxToRem(52),
        "& $logo": { opacity: 0, visibility: "hidden" }
      }
    };
  },
  { name: componentName }
);

const Header = React.memo(function Header(props: Props) {
  const { className, ...otherProps } = props;

  const { isDarkMode, setDarkMode, pageName } = React.useContext(GlobalContext);

  const classes = useStyles();

  return (
    <header
      className={createClassName(classes.root, className, {
        [classes.landing]: pageName === "LandingPage"
      })}
      {...otherProps}
    >
      <Container className={classes.container}>
        <Logo size={32} variant="line" className={classes.logo} />
        <Button
          aria-label="Toggle dark mode"
          leadingIcon={!isDarkMode ? "night-o" : "weather-sunny-o"}
          variant="inlined"
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
          className={classes.darkModeToggle}
        />
        <Divider vertical className={classes.divider} />
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link href="/" passHref>
                <Text
                  title="Documentation"
                  rootNode="a"
                  variant="bodyText"
                  size="small"
                  weight="bolder"
                  className={classes.navItemLink}
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
                  Github
                </Text>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
});

Header.displayName = componentName;

export default Header;
