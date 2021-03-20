import makeStyles from "@sonnat/ui/styles/makeStyles";
import useTheme from "@sonnat/ui/styles/useTheme";
import Button from "@sonnat/ui/Button";
import Code from "@sonnat/ui/Code";
import Tooltip from "@sonnat/ui/Tooltip";
import createClassName from "classnames";
import { Collapse } from "react-collapse";
import useClipboard from "react-use-clipboard";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import * as React from "react";

const componentName = "DemoBox";

interface Props {
  className?: string;
  children?: React.ReactNode;
  code?: string;
  horizontalAlignment?: "left" | "right" | "center";
}

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      typography: { pxToRem }
    } = theme;

    return {
      root: {
        border: `1px solid ${
          darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0,0 ,0.08)"
        }`,
        borderRadius: 4,
        overflow: "hidden",
        "@global .demoSubject": {
          margin: pxToRem(8)
        }
      },
      demoContainer: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        minHeight: pxToRem(100),
        padding: pxToRem(32),
        backgroundColor: colors.background.origin,
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column"
        }
      },
      codeWrapper: {
        borderTop: `1px solid ${colors.divider}`,
        backgroundColor: colors.background.origin
      },
      codeHeader: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: pxToRem(56),
        paddingLeft: pxToRem(8),
        paddingRight: pxToRem(8)
      },
      viewCode: {},
      copyCode: { marginLeft: "auto", marginRight: pxToRem(8) },
      expandCode: {},
      codeContainer: {
        [theme.breakpoints.down("lg")]: {
          maxWidth: `calc(100vw - ${pxToRem(32)})`
        }
      },
      codeBlock: {
        border: "none"
      },
      expanded: {
        "& $codeWrapper": {
          backgroundColor: colors.background.level?.[1]
        }
      },
      collapser: { transition: "height 360ms ease" },
      hAlignCenter: { "& $demoContainer": { justifyContent: "center" } },
      hAlignLeft: { "& $demoContainer": { justifyContent: "flex-start" } },
      hAlignRight: { "& $demoContainer": { justifyContent: "flex-end" } }
    };
  },
  { name: componentName }
);

const toCapitalize = (text: string) => {
  const [first, ...rest] = text;
  return `${first.toUpperCase()}${rest.join("")}`;
};

const DemoBox = React.memo(function DemoBox(props: Props) {
  const {
    className,
    children,
    code,
    horizontalAlignment = "center",
    ...otherProps
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [isExpanded, setExpanded] = React.useState(false);
  const [isCopied, setCopied] = useClipboard(code || "", {
    successDuration: 1000
  });

  const alignKey = `hAlign${toCapitalize(horizontalAlignment)}` as
    | "hAlignCenter"
    | "hAlignLeft"
    | "hAlignRight";

  return (
    <div
      {...otherProps}
      className={createClassName(classes.root, className, classes[alignKey], {
        [classes.expanded]: isExpanded
      })}
    >
      <div className={classes.demoContainer}>{children}</div>
      <div className={classes.codeWrapper}>
        <div className={classes.codeHeader}>
          {!isExpanded && (
            <Button
              label="View Code"
              variant="inlined"
              size="small"
              className={classes.viewCode}
              onClick={() => setExpanded(s => !s)}
            />
          )}
          <Tooltip text="Copied to clipboard!" open={isCopied}>
            <Button
              leadingIcon="content-copy"
              aria-label="Copy the code"
              variant="inlined"
              className={classes.copyCode}
              onClick={() => setCopied()}
            />
          </Tooltip>
          <Button
            leadingIcon={isExpanded ? "chevron-up" : "chevron-down"}
            aria-label="Expand the codebox"
            variant="inlined"
            className={classes.expandCode}
            onClick={() => setExpanded(s => !s)}
          />
        </div>
        <Collapse theme={{ collapse: classes.collapser }} isOpened={isExpanded}>
          <div className={classes.codeContainer}>
            <Highlight
              {...defaultProps}
              code={code || ""}
              language="jsx"
              theme={theme.darkMode ? darkTheme : lightTheme}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Code
                  codeBlock
                  style={style}
                  className={createClassName(className, classes.codeBlock)}
                >
                  {tokens.map((line, i) => {
                    const isLastLine = i === tokens.length - 1;

                    return (
                      <div
                        key={`${line}/${i}`}
                        {...getLineProps({ line, key: i })}
                      >
                        {line.map((token, key) => {
                          return !(isLastLine && token.empty) ? (
                            <span
                              key={`${token}/${key}`}
                              {...getTokenProps({ token, key })}
                            />
                          ) : null;
                        })}
                      </div>
                    );
                  })}
                </Code>
              )}
            </Highlight>
          </div>
        </Collapse>
      </div>
    </div>
  );
});

DemoBox.displayName = componentName;

export default DemoBox;
