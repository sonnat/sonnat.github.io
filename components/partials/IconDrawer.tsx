import { Download, CloseLarge } from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import detectScrollBarWidth from "@sonnat/ui/utils/detectScrollBarWidth";
import Text from "@sonnat/ui/Text";
import PortalDestination from "@sonnat/ui/PortalDestination";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import cls from "classnames";
import * as React from "react";
import Code from "@sonnat/ui/Code";

const componentName = "IconDrawer";

interface IconData {
  kebabCaseName: string;
  pascalCaseName: string;
  file: string;
  component: React.ReactNode;
}

interface IconDrawerProps {
  data: IconData | null;
  open?: boolean;
  toggle?: () => void;
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      zIndexes,
      darkMode,
      mixins: { useIconWrapper },
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
        backgroundColor: darkMode ? colors.background.level?.[2] : colors.white,
        zIndex: zIndexes.drawer,
        opacity: 0,
        padding: [[0, pxToRem(16)]],
        visibility: "hidden",
        transition:
          "transform 360ms ease, opacity 260ms ease, visibility 260ms ease"
      },
      showcase: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: pxToRem(16),
        marginTop: pxToRem(16)
      },
      iconWrapper: useIconWrapper(64),
      usage: { paddingTop: pxToRem(16) },
      usageTitle: { marginBottom: pxToRem(16) },
      usageCase: { marginBottom: pxToRem(16) },
      usageCaseCode: { marginBottom: pxToRem(24) },
      topBar: {
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "flex-end",
        marginRight: pxToRem(-16),
        marginLeft: pxToRem(-16),
        padding: [[pxToRem(4), pxToRem(16)]],
        backgroundColor: darkMode ? colors.background.level?.[2] : colors.white,
        borderBottom: `1px solid ${colors.divider}`
      },
      bottomBar: {
        position: "sticky",
        bottom: 0,
        marginRight: pxToRem(-16),
        marginLeft: pxToRem(-16),
        marginTop: "auto",
        padding: pxToRem(16),
        backgroundColor: darkMode ? colors.background.level?.[2] : colors.white,
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
          ? "rgba(0, 0, 0, 0.26)"
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
      <section className={cls(classes.root, { [classes.open]: isOpen })}>
        <div className={classes.topBar}>
          <Button
            aria-label="Close the drawer"
            leadingIcon={<CloseLarge />}
            variant="inlined"
            size="small"
            onClick={() => void toggle()}
          />
        </div>
        <div className={classes.showcase}>
          <i className={classes.iconWrapper}>{data?.component}</i>
          <Text variant="bodySmall" color="textSecondary">
            {data?.kebabCaseName}
          </Text>
        </div>
        <div className={classes.usage}>
          <Text
            className={classes.usageTitle}
            variant="h6"
            rootNode="strong"
            display="block"
          >
            Usage:
          </Text>
          <Text className={classes.usageCase} variant="bodySmall" rootNode="p">
            To use along with <Code>{`@sonnat/ui`}</Code>: (In this case,{" "}
            <Code>{`@sonnat/ui`}</Code> and <Code>{`react`}</Code> are the peer
            dependencies.)
          </Text>
          <Code
            className={classes.usageCaseCode}
            codeBlock
          >{`import { ${data?.pascalCaseName} } from "@sonnat/icons";`}</Code>
          <Text className={classes.usageCase} variant="bodySmall" rootNode="p">
            To only export the SVG paths: (In this case, <Code>{`react`}</Code>{" "}
            is the peer dependency.)
          </Text>
          <Code
            className={classes.usageCaseCode}
            codeBlock
          >{`import { ${data?.pascalCaseName} } from "@sonnat/icons/paths";`}</Code>
        </div>
        <div className={classes.bottomBar}>
          <Button
            rootNode="a"
            className={classes.downloadBtn}
            label="Download the SVG"
            leadingIcon={<Download />}
            color="primary"
            href={data?.file}
            download={`${data?.kebabCaseName}.svg`}
          />
        </div>
      </section>
      <div
        className={cls(classes.dimmer, { [classes.open]: isOpen })}
        onClick={toggle}
      ></div>
    </PortalDestination>
  );
});

IconDrawer.displayName = componentName;

export default IconDrawer;
