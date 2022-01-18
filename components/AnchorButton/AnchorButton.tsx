import Link from "@sonnat/icons/Link";
import { IconButton, Tooltip } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import c from "classnames";
import * as React from "react";
import useClipboard from "react-use-clipboard";

const componentName = "AnchorButton";

const isServer = typeof window === "undefined";

interface Props {
  className?: string;
  anchorId: string;
}

const useStyles = makeStyles(
  ({ breakpoints, spacings: { spaces }, typography: { pxToRem } }) => ({
    root: {
      position: "relative",
      marginLeft: spaces[3].rem,
      marginRight: spaces[3].rem
    },
    button: {},
    anchor: {
      position: "absolute",
      top: pxToRem(-64),
      [breakpoints.down("sm")]: { top: pxToRem(-105) }
    }
  }),
  { name: componentName }
);

const AnchorButtonBase = (props: Props) => {
  const { className, anchorId, ...otherProps } = props;

  const anchorHref = isServer
    ? ""
    : `${window.location.origin}${window.location.pathname}#${anchorId}`;

  const classes = useStyles();
  const [isCopied, setCopied] = useClipboard(anchorHref, {
    successDuration: 1000
  });

  return (
    <div {...otherProps} className={c(classes.root, className)}>
      <span id={anchorId} className={classes.anchor}></span>
      <Tooltip text="Copied to clipboard!" open={isCopied} placement="right">
        <IconButton
          className={c(classes.button, "anchor-button")}
          as="a"
          href={`#${anchorId}`}
          onClick={() => void setCopied()}
          variant="inlined"
          title="Anchor link"
          aria-label="Anchor link"
          icon={<Link />}
        />
      </Tooltip>
    </div>
  );
};

const AnchorButton = React.memo(AnchorButtonBase);

AnchorButton.displayName = componentName;

export default AnchorButton;
