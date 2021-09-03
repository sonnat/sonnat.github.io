import { ChevronDown, ChevronUp, ContentCopy } from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import Code from "@sonnat/ui/Code";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Tooltip from "@sonnat/ui/Tooltip";
import createClassName from "classnames";
import Highlight, { defaultProps } from "prism-react-renderer";
import * as React from "react";
import { UnmountClosed as Collapse } from "react-collapse";
import useClipboard from "react-use-clipboard";
import prismTheme from "./theme";

const componentName = "DemoBox";

type HorizontalAlignKeys = "hAlignCenter" | "hAlignStart" | "hAlignEnd";
type VerticalAlignKeys = "vAlignCenter" | "vAlignStart" | "vAlignEnd";
type FlexDirectionKeys = "flexDirectionRow" | "flexDirectionColumn";

interface Props {
  className?: string;
  code?: string;
  horizontalAlignment?: "start" | "end" | "center";
  verticalAlignment?: "start" | "end" | "center";
  flexDirection?: "row" | "column";
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
        },
        "& + &": { marginTop: pxToRem(16) },
        "& + p": { marginTop: pxToRem(16) }
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
        border: "none",
        borderRadius: 0,
        backgroundColor: theme.colors.pallete.grey[900],
        maxHeight: pxToRem(500)
      },
      expanded: {
        "& $codeWrapper": {}
      },
      collapser: { transition: "height 360ms ease" },
      flexDirectionRow: { "& $demoContainer": { flexDirection: "row" } },
      flexDirectionColumn: { "& $demoContainer": { flexDirection: "column" } },
      hAlignCenter: {
        "&$flexDirectionRow": {
          "& $demoContainer": { justifyContent: "center" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { alignItems: "center" }
        }
      },
      hAlignStart: {
        "&$flexDirectionRow": {
          "& $demoContainer": { justifyContent: "flex-start" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { alignItems: "flex-start" }
        }
      },
      hAlignEnd: {
        "&$flexDirectionRow": {
          "& $demoContainer": { justifyContent: "flex-end" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { alignItems: "flex-end" }
        }
      },
      vAlignCenter: {
        "&$flexDirectionRow": {
          "& $demoContainer": { alignItems: "center" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { justifyContent: "center" }
        }
      },
      vAlignStart: {
        "&$flexDirectionRow": {
          "& $demoContainer": { alignItems: "flex-start" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { justifyContent: "flex-start" }
        }
      },
      vAlignEnd: {
        "&$flexDirectionRow": {
          "& $demoContainer": { alignItems: "flex-end" }
        },
        "&$flexDirectionColumn": {
          "& $demoContainer": { justifyContent: "flex-end" }
        }
      }
    };
  },
  { name: componentName }
);

const toCapitalize = (text: string) => {
  const [first, ...rest] = text;
  return `${first.toUpperCase()}${rest.join("")}`;
};

const DemoBox: React.FC<Props> = React.memo(function DemoBox(props) {
  const {
    className,
    children,
    code,
    horizontalAlignment = "center",
    verticalAlignment = "center",
    flexDirection = "row",
    ...otherProps
  } = props;

  const classes = useStyles();

  const [isExpanded, setExpanded] = React.useState(false);
  const [isCopied, setCopied] = useClipboard(code || "", {
    successDuration: 1000
  });

  const hAlignKey = `hAlign${toCapitalize(
    horizontalAlignment
  )}` as HorizontalAlignKeys;

  const vAlignKey = `vAlign${toCapitalize(
    verticalAlignment
  )}` as VerticalAlignKeys;

  const flexDirectionKey = `flexDirection${toCapitalize(
    flexDirection
  )}` as FlexDirectionKeys;

  return (
    <div
      {...otherProps}
      className={createClassName(
        "demo-box",
        classes.root,
        className,
        classes[hAlignKey],
        classes[vAlignKey],
        classes[flexDirectionKey],
        {
          [classes.expanded]: isExpanded
        }
      )}
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
              leadingIcon={<ContentCopy />}
              aria-label="Copy the code"
              variant="inlined"
              className={classes.copyCode}
              onClick={() => setCopied()}
            />
          </Tooltip>
          <Button
            leadingIcon={isExpanded ? <ChevronUp /> : <ChevronDown />}
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
              language="tsx"
              theme={prismTheme}
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
                        key={`${line.length}/${i}`}
                        {...getLineProps({ line, key: i })}
                      >
                        {line.map((token, key) => {
                          return !(isLastLine && token.empty) ? (
                            <span
                              key={`${token.content}/${key}`}
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
