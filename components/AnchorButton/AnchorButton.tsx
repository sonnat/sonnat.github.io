import Link from "@sonnat/icons/Link";
import Button from "@sonnat/ui/Button";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Tooltip from "@sonnat/ui/Tooltip";
import createClassName from "classnames";
import * as React from "react";
import useClipboard from "react-use-clipboard";

const componentName = "AnchorButton";

const isServer = typeof window === "undefined";

interface Props {
  className?: string;
  anchorId: string;
}

const useStyles = makeStyles(
  theme => ({
    root: {
      position: "relative",
      marginLeft: theme.typography.pxToRem(8),
      marginRight: theme.typography.pxToRem(8)
    },
    button: {},
    anchor: {
      position: "absolute",
      top: theme.typography.pxToRem(-64),
      [theme.breakpoints.down("sm")]: { top: theme.typography.pxToRem(-105) }
    }
  }),
  { name: componentName }
);

const AnchorButton = React.memo<Props>(function AnchorButton(props) {
  const { className, anchorId, ...otherProps } = props;

  const anchorHref = isServer
    ? ""
    : `${window.location.origin}${window.location.pathname}#${anchorId}`;

  const classes = useStyles();
  const [isCopied, setCopied] = useClipboard(anchorHref, {
    successDuration: 1000
  });

  return (
    <div {...otherProps} className={createClassName(classes.root, className)}>
      <span id={anchorId} className={classes.anchor}></span>
      <Tooltip text="Copied to clipboard!" open={isCopied} placement="right">
        <Button
          className={createClassName(classes.button, "anchor-button")}
          rootNode="a"
          href={`#${anchorId}`}
          onClick={() => void setCopied()}
          variant="inlined"
          title="Anchor link"
          aria-label="Anchor link"
          leadingIcon={<Link />}
        />
      </Tooltip>
    </div>
  );
});

AnchorButton.displayName = componentName;

export default AnchorButton;
