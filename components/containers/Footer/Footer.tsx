import Text from "@sonnat/ui/Text";
import Icon from "@sonnat/ui/Icon";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClassName from "classnames";
import Logo from "components/Logo";
import Link from "next/link";
import * as React from "react";

const componentName = "Footer";

interface Props {
  className: string;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      breakpoints,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        display: "flex",
        alignItems: "center",
        height: pxToRem(72),
        marginTop: pxToRem(128),
        justifyContent: "space-between",
        borderTop: `1px solid ${colors.divider}`
      },
      navigation: { display: "flex", alignItems: "center" },
      logo: {
        marginRight: pxToRem(16),
        cursor: "pointer"
      },
      navigationList: {
        padding: "0",
        margin: "0",
        listStyle: "none",
        display: "flex",
        alignItems: "center"
      },
      navigationItem: {
        padding: pxToRem(8),
        cursor: "pointer",
        "&:hover > $navigationItemLink": { color: colors.text.primary }
      },
      navigationItemLink: {
        color: colors.text.secondary,
        transition: "color 360ms ease"
      },
      navigationDivider: {
        width: pxToRem(1),
        height: pxToRem(16),
        backgroundColor: colors.divider
      },
      socials: { display: "flex", alignItems: "center" },
      social: {
        marginLeft: pxToRem(8),
        cursor: "pointer",
        transition: "color 360ms ease",
        color: colors.text.secondary,
        "&:hover": { color: colors.text.primary }
      },
      [breakpoints.down("sm")]: {
        root: {
          paddingTop: pxToRem(16),
          paddingBottom: pxToRem(16),
          height: "auto",
          flexDirection: "column"
        },
        navigation: { flexDirection: "column" },
        navigationList: { marginTop: pxToRem(16), marginBottom: pxToRem(16) },
        social: {
          marginLeft: pxToRem(8),
          marginRight: pxToRem(8)
        },
        logo: {
          marginRight: 0
        }
      }
    };
  },
  { name: componentName }
);

const Footer = React.memo(function Footer(props: Props) {
  const { className } = props;

  const classes = useStyles();

  return (
    <footer className={createClassName(classes.root, className)}>
      <nav className={classes.navigation}>
        <Link href="/">
          <a title="Home" className={classes.logo}>
            <Logo variant="line" size={32} />
          </a>
        </Link>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <Link href="/" passHref>
              <Text
                title="Documentation"
                rootNode="a"
                variant="captionText"
                size="large"
                className={classes.navigationItemLink}
              >
                Docs
              </Text>
            </Link>
          </li>
          <li className={classes.navigationDivider}></li>
          <li className={classes.navigationItem}>
            <Link href="https://sonnat.design" passHref>
              <Text
                title="Design"
                rootNode="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="captionText"
                size="large"
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
                rootNode="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="captionText"
                size="large"
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
                rootNode="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="captionText"
                size="large"
                className={classes.navigationItemLink}
              >
                Careers
              </Text>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.socials}>
        <Link href="https://twitter.com/sonnatdesign" passHref>
          <Icon
            aria-hidden={undefined}
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            rootNode="a"
            identifier="twitter"
            size={24}
            className={classes.social}
          />
        </Link>
        <Link href="https://github.com/sonnat/sonnat-ui" passHref>
          <Icon
            aria-hidden={undefined}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            rootNode="a"
            identifier="github"
            size={24}
            className={classes.social}
          />
        </Link>
      </div>
    </footer>
  );
});

Footer.displayName = componentName;

export default Footer;
