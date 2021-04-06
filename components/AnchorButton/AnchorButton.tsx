import Button from "@sonnat/ui/Button";
import Tooltip from "@sonnat/ui/Tooltip";
import makeStyles from "@sonnat/ui/styles/makeStyles";
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
    root: { position: "relative", marginLeft: theme.typography.pxToRem(8) },
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
          className={createClassName(classes.button, "anchorButton")}
          rootNode="a"
          href={`#${anchorId}`}
          onClick={() => void setCopied(true)}
          variant="inlined"
          title="Anchor link"
          aria-label="Anchor link"
          leadingIcon="link"
        />
      </Tooltip>
    </div>
  );
});

AnchorButton.displayName = componentName;

export default AnchorButton;
