import { CloseLarge, Download } from "@sonnat/icons";
import { Button, Code, IconButton, PortalDestination, Text } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import detectScrollBarWidth from "@sonnat/ui/utils/detectScrollBarWidth";
import c from "classnames";
import type { IconData } from "modules/prepareIcons";
import * as React from "react";

const componentName = "IconDrawer";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
      darkMode,
      spacings: { spaces },
      mixins: { asIconWrapper },
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        right: 0,
        display: "flex",
        flexDirection: "column",
        transform: "translateX(100%)",
        boxShadow: `-1px 0 2px 0 ${colors.createBlackColor({ alpha: 0.12 })}`,
        position: "fixed",
        width: pxToRem(320),
        height: `100%`,
        overflow: "auto",
        top: 0,
        backgroundColor: darkMode ? colors.background.accents[2] : colors.white,
        zIndex: zIndexes.drawer,
        opacity: 0,
        padding: [[0, spaces[7].rem]],
        visibility: "hidden",
        transition:
          "transform 360ms ease, opacity 260ms ease, visibility 260ms ease"
      },
      showcase: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: spaces[7].rem,
        marginTop: spaces[7].rem
      },
      iconWrapper: {
        ...asIconWrapper(64),
        "& > svg": {
          fill: colors.text.secondary,
          width: "100%",
          height: "100%"
        }
      },
      usage: { paddingTop: spaces[7].rem },
      usageTitle: { marginBottom: spaces[7].rem },
      usageCase: { marginBottom: spaces[7].rem },
      usageCaseCode: { marginBottom: spaces[10].rem },
      topBar: {
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "flex-end",
        marginRight: pxToRem(-spaces[7].px),
        marginLeft: pxToRem(-spaces[7].px),
        padding: [[spaces[1].rem, spaces[7].rem]],
        backgroundColor: darkMode ? colors.background.accents[2] : colors.white,
        borderBottom: `1px solid ${colors.divider}`
      },
      bottomBar: {
        position: "sticky",
        bottom: 0,
        marginRight: pxToRem(-spaces[7].px),
        marginLeft: pxToRem(-spaces[7].px),
        marginTop: "auto",
        padding: spaces[7].rem,
        backgroundColor: darkMode ? colors.background.accents[2] : colors.white,
        borderTop: `1px solid ${colors.divider}`
      },
      downloadBtn: { width: "100%" },
      dimmer: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: zIndexes.drawer - 1,
        backgroundColor: !darkMode
          ? "rgba(0, 0, 0, 0.24)"
          : "rgba(0, 0, 0, 0.56)",
        visibility: "hidden",
        opacity: 0,
        transition: "opacity 360ms ease, visibility 360ms ease"
      },
      open: {
        opacity: 1,
        visibility: "visible",
        "&$root": {
          right: 0,
          transform: "translateX(0)"
        }
      }
    };
  },
  { name: componentName }
);

interface IconDrawerProps {
  data: IconData | null;
  open?: boolean;
  toggle?: () => void;
}

const createSvgBase64 = (src: string) =>
  `data:image/svg+xml;base64,${Buffer.from(src).toString("base64")}`;

const createSvgFromSrc = (src: string) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    dangerouslySetInnerHTML={{
      __html: src.replace(/<svg[^>]*>/g, "").replace(/<\/svg>/g, "")
    }}
  />
);

const IconDrawer: React.FC<IconDrawerProps> = React.memo(function IconDrawer(
  props
) {
  const { open = false, toggle: toggleFn, data } = props;

  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    if (toggleFn) requestAnimationFrame(toggleFn);
    else requestAnimationFrame(() => setOpen(s => !s));
  }, [toggleFn]);

  React.useEffect(() => {
    requestAnimationFrame(() => setOpen(open));

    if (open) {
      const scrollBarWidth = detectScrollBarWidth();
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <PortalDestination>
      <section className={c(classes.root, { [classes.open]: isOpen })}>
        <div className={classes.topBar}>
          <IconButton
            aria-label="Close the drawer"
            icon={<CloseLarge />}
            variant="inlined"
            size="small"
            onClick={() => void toggle()}
          />
        </div>
        <div className={classes.showcase}>
          <i className={classes.iconWrapper}>
            {data && createSvgFromSrc(data.src)}
          </i>
          <Text variant="bodySmall" color="textSecondary">
            {data?.kebabCaseName as string}
          </Text>
        </div>
        <div className={classes.usage}>
          <Text
            className={classes.usageTitle}
            variant="h6"
            as="strong"
            display="block"
          >
            Usage:
          </Text>
          <Text className={classes.usageCase} variant="bodySmall" as="p">
            To use along with <Code>{`@sonnat/ui`}</Code>: (In this case,{" "}
            <Code>{`@sonnat/ui`}</Code> and <Code>{`react`}</Code> are the peer
            dependencies.)
          </Text>
          <Code className={classes.usageCaseCode} codeBlock>{`import { ${
            data?.pascalCaseName as string
          } } from "@sonnat/icons";`}</Code>
          <Text className={classes.usageCase} variant="bodySmall" as="p">
            To only export the SVG paths: (In this case, <Code>{`react`}</Code>{" "}
            is the peer dependency.)
          </Text>
          <Code className={classes.usageCaseCode} codeBlock>{`import { ${
            data?.pascalCaseName as string
          } } from "@sonnat/icons/paths";`}</Code>
        </div>
        <div className={classes.bottomBar}>
          <Button
            as="a"
            className={classes.downloadBtn}
            label="Download the SVG"
            leadingIcon={<Download />}
            color="primary"
            download={`${data?.kebabCaseName as string}.svg`}
            href={data ? createSvgBase64(data.src) : undefined}
          />
        </div>
      </section>
      <div
        className={c(classes.dimmer, { [classes.open]: isOpen })}
        onClick={toggle}
      ></div>
    </PortalDestination>
  );
});

IconDrawer.displayName = componentName;

export default IconDrawer;
