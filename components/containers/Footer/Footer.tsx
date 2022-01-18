import {
  Github,
  SonnatThin,
  Telegram,
  Discord,
  Codesandbox
} from "@sonnat/icons";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import c from "classnames";
import Link from "next/link";
import * as React from "react";

const componentName = "Footer";

interface Props {
  className?: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      breakpoints,
      spacings: { spaces, spacer },
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        height: pxToRem(72),
        marginTop: pxToRem(spacer.px * 8),
        justifyContent: "space-between",
        borderTop: `1px solid ${colors.divider}`
      },
      navigation: { display: "flex", alignItems: "center" },
      logo: {
        marginRight: spaces[7].rem,
        cursor: "pointer",
        color: colors.text.secondary,
        transition: [
          "opacity 360ms ease",
          "visibility 360ms ease",
          "color 360ms ease"
        ].join(", "),
        "&:hover": { color: colors.text.primary }
      },
      navigationList: {
        padding: "0",
        margin: "0",
        listStyle: "none",
        display: "flex",
        alignItems: "center"
      },
      navigationItem: {
        padding: spaces[3].rem,
        cursor: "pointer",
        "&:hover > $navigationItemLink": { color: colors.text.primary }
      },
      navigationItemLink: {
        color: colors.text.secondary,
        transition: "color 360ms ease"
      },
      navigationDivider: {
        width: 1,
        height: pxToRem(16),
        backgroundColor: colors.divider
      },
      socials: { display: "flex", alignItems: "center" },
      social: {
        marginLeft: spaces[3].rem,
        cursor: "pointer",
        transition: "color 360ms ease",
        color: colors.text.secondary,
        "&:hover": { color: colors.text.primary }
      },
      [breakpoints.down("sm")]: {
        root: {
          paddingTop: spaces[7].rem,
          paddingBottom: spaces[7].rem,
          height: "auto",
          flexDirection: "column"
        },
        navigation: { flexDirection: "column" },
        navigationList: {
          marginTop: spaces[7].rem,
          marginBottom: spaces[7].rem
        },
        social: { marginLeft: spaces[3].rem, marginRight: spaces[3].rem },
        logo: { marginRight: 0 }
      }
    };
  },
  { name: componentName }
);

const Footer = React.memo(function Footer(props: Props) {
  const { className } = props;

  const classes = useStyles();

  return (
    <footer className={c(classes.root, className)}>
      <nav className={classes.navigation}>
        <Link href="/">
          <a title="Home" className={classes.logo}>
            <SonnatThin size={32} title="Sonnat Design System's Logo" />
          </a>
        </Link>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <Link href="https://sonnat.design" passHref>
              <Text
                title="Design"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="caption"
                className={classes.navigationItemLink}
              >
                Design
              </Text>
            </Link>
          </li>
          <li className={classes.navigationDivider}></li>
          <li className={classes.navigationItem}>
            <Link
              href="https://github.com/sonnat/sonnat-ui/discussions/categories/feedback"
              passHref
            >
              <Text
                title="Feedback"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="caption"
                className={classes.navigationItemLink}
              >
                Feedback
              </Text>
            </Link>
          </li>
          <li className={classes.navigationDivider}></li>
          <li className={classes.navigationItem}>
            <Link
              href="https://careers.divar.ir/positions#department=Design%20and%20UX"
              passHref
            >
              <Text
                title="Careers"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="caption"
                className={classes.navigationItemLink}
              >
                Careers
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.socials}>
        <Link href="https://discord.gg/h4Dpr4PnXW" passHref>
          <a title="Discord" target="_blank" rel="noopener noreferrer">
            <Discord size={24} className={classes.social} />
          </a>
        </Link>
        <Link href="https://t.me/designdivar" passHref>
          <a title="Telegram" target="_blank" rel="noopener noreferrer">
            <Telegram size={24} className={classes.social} />
          </a>
        </Link>
        <Link
          href="https://codesandbox.io/s/sonnat-with-nextjs-ts-mkfum"
          passHref
        >
          <a
            title="CodeSandbox Playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Codesandbox size={24} className={classes.social} />
          </a>
        </Link>
        <Link href="https://github.com/sonnat" passHref>
          <a title="GitHub" target="_blank" rel="noopener noreferrer">
            <Github size={24} className={classes.social} />
          </a>
        </Link>
      </div>
    </footer>
  );
});

Footer.displayName = componentName;

export default Footer;
