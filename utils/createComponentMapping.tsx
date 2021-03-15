import Code, { CodeProps } from "@sonnat/ui/Code";
import Divider, { DividerProps } from "@sonnat/ui/Divider";
import { adjustColor } from "@sonnat/ui/styles/colorUtils";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import useTheme from "@sonnat/ui/styles/useTheme";
import Text, { TextProps } from "@sonnat/ui/Text";
import createClassName from "classnames";
import darkTheme from "components/DemoBox/darkTheme";
import lightTheme from "components/DemoBox/lightTheme";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import * as React from "react";

const useParagraphStyles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.typography.pxToRem(16),
      paddingBottom: theme.typography.pxToRem(16)
    }
  }),
  { name: "Paragraph" }
);

const useH1Styles = makeStyles(
  theme => ({
    root: {
      alignItems: "center",
      "@global .anchorButton": {
        [theme.breakpoints.up("sm")]: {
          visibility: "hidden",
          opacity: 0
        }
      },
      "&:hover": {
        "@global .anchorButton": {
          visibility: "visible",
          opacity: 1
        }
      }
    }
  }),
  { name: "H1" }
);

const useH2Styles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.typography.pxToRem(32),
      alignItems: "center",
      "@global .anchorButton": {
        [theme.breakpoints.up("sm")]: {
          visibility: "hidden",
          opacity: 0
        }
      },
      "&:hover": {
        "@global .anchorButton": {
          visibility: "visible",
          opacity: 1
        }
      }
    }
  }),
  { name: "H2" }
);

const useH3Styles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.typography.pxToRem(32),
      alignItems: "center",
      "@global .anchorButton": {
        [theme.breakpoints.up("sm")]: {
          visibility: "hidden",
          opacity: 0
        }
      },
      "&:hover": {
        "@global .anchorButton": {
          visibility: "visible",
          opacity: 1
        }
      }
    }
  }),
  { name: "H3" }
);

const useCodeBlockStyles = makeStyles(
  theme => ({
    root: {
      marginTop: theme.typography.pxToRem(16),
      [theme.breakpoints.down("lg")]: {
        maxWidth: `calc(100vw - ${theme.typography.pxToRem(32)})`
      }
    }
  }),
  { name: "CodeBlock" }
);

const useTableStyles = makeStyles(
  theme => ({
    root: {
      marginTop: theme.typography.pxToRem(16),
      borderCollapse: "collapse",
      captionSide: "bottom",
      display: "block",
      overflow: "auto",
      wordBreak: "normal",
      [theme.breakpoints.down("lg")]: {
        maxWidth: `calc(100vw - ${theme.typography.pxToRem(32)})`
      },
      "& caption": {
        ...theme.typography.useText({
          fontSize: theme.typography.pxToRem(12),
          color: theme.colors.text.secondary
        }),
        textAlign: "left",
        padding: [[theme.typography.pxToRem(8), 0]]
      }
    }
  }),
  { name: "Table" }
);

const useTHStyles = makeStyles(
  theme => ({
    root: {
      ...theme.typography.useText({
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeight.medium,
        color: theme.colors.text.primary
      }),
      textAlign: "left",
      padding: [[theme.typography.pxToRem(14), theme.typography.pxToRem(16)]],
      whiteSpace: "pre",
      minWidth: theme.typography.pxToRem(120)
    }
  }),
  { name: "TH" }
);

const useTDStyles = makeStyles(
  theme => ({
    root: {
      ...theme.typography.useText({
        fontSize: theme.typography.pxToRem(14),
        color: theme.colors.text.primary
      }),
      padding: [[theme.typography.pxToRem(10), theme.typography.pxToRem(16)]]
    }
  }),
  { name: "TD" }
);

const useTableRowStyles = makeStyles(
  theme => ({
    root: {
      borderBottom: `1px solid ${theme.colors.divider}`,
      verticalAlign: "top"
    }
  }),
  { name: "TableRow" }
);

const useTableFooterStyles = makeStyles(
  theme => ({
    root: {
      "& td": {
        color: theme.colors.text.primary,
        fontSize: theme.typography.pxToRem(12),
        padding: [[theme.typography.pxToRem(8), 0]]
      },
      "& ul": {
        listStyle: "none",
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        margin: 0
      },
      "& ul li": {
        position: "relative",
        color: theme.colors.text.primary,
        fontSize: theme.typography.pxToRem(12),
        "&:before": {
          marginRight: theme.typography.pxToRem(8),
          content: '""',
          display: "inline-block",
          width: theme.typography.pxToRem(4),
          height: theme.typography.pxToRem(4),
          borderRadius: "50%",
          flexShrink: 0,
          backgroundColor: theme.colors.text.primary
        }
      }
    }
  }),
  { name: "TableFooter" }
);

const useLinkStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      typography: { pxToRem }
    } = theme;

    const primary = !darkMode ? colors.primary.origin : colors.primary.light;

    const primaryHover = adjustColor(primary, {
      saturation: -8,
      lightness: +8
    });

    const primaryActive = adjustColor(primary, {
      saturation: +8,
      lightness: -4
    });

    return {
      root: {
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        color: primary,
        "&:hover": {
          color: primaryActive,
          "&:after": { backgroundColor: primary }
        },
        "&:visited": {
          color: primaryHover,
          "&:hover": {
            color: primaryActive,
            "&:after": { backgroundColor: primary }
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: pxToRem(1),
          backgroundColor: colors.transparent
        }
      }
    };
  },
  { name: "Link" }
);

const Paragraph = (props: TextProps<{}, "p">) => {
  const { children, ...otherProps } = props;
  const classes = useParagraphStyles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="bodyText"
      size="medium"
      rootNode="p"
      responsive
    >
      {children}
    </Text>
  );
};

const H1 = (props: TextProps<{}, "h1">) => {
  const { children, ...otherProps } = props;
  const classes = useH1Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="titleText"
      size="large"
      display="flex"
      rootNode="h1"
      responsive
    >
      {children}
    </Text>
  );
};

const H2 = (props: TextProps<{}, "h2">) => {
  const { children, ...otherProps } = props;
  const classes = useH2Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="titleText"
      display="flex"
      size="medium"
      rootNode="h2"
      responsive
    >
      {children}
    </Text>
  );
};

const H3 = (props: TextProps<{}, "h3">) => {
  const { children, ...otherProps } = props;
  const classes = useH3Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="titleText"
      display="flex"
      size="small"
      rootNode="h3"
      responsive
    >
      {children}
    </Text>
  );
};

const CodeBlock = (props: CodeProps) => {
  const { children, className, ...otherProps } = props;

  const classes = useCodeBlockStyles();
  const theme = useTheme();

  const language: Language = (className
    ?.split(" ")
    .filter(v => v.includes("language-"))[0]
    .replace("language-", "") || "javascript") as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={theme.darkMode ? darkTheme : lightTheme}
      language={language}
      code={children as string}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Code
          {...otherProps}
          codeBlock
          style={style}
          className={createClassName(className, classes.root)}
        >
          {tokens.map((line, i) => (
            <div key={`${line}/${i}`} {...getLineProps({ line, key: i })}>
              {line.map(
                (token, key) =>
                  !token.empty && (
                    <span
                      key={`${token}/${key}`}
                      {...getTokenProps({ token, key })}
                    />
                  )
              )}
            </div>
          ))}
        </Code>
      )}
    </Highlight>
  );
};

const InlineCode = (props: CodeProps) => {
  const { children, ...otherProps } = props;

  return <Code {...otherProps}>{children}</Code>;
};

const HorizontalDivider = (props: DividerProps) => {
  return <Divider {...props} />;
};

const Table = (props: React.ComponentPropsWithRef<"table">) => {
  const { children, ...otherProps } = props;
  const classes = useTableStyles();

  return (
    <table {...otherProps} className={classes.root}>
      {children}
    </table>
  );
};

const TableFooter = (props: React.ComponentPropsWithRef<"tfoot">) => {
  const { children, ...otherProps } = props;
  const classes = useTableFooterStyles();

  return (
    <tfoot {...otherProps} className={classes.root}>
      {children}
    </tfoot>
  );
};

const TableRow = (props: React.ComponentPropsWithRef<"tr">) => {
  const { children, ...otherProps } = props;
  const classes = useTableRowStyles();

  return (
    <tr {...otherProps} className={classes.root}>
      {children}
    </tr>
  );
};

const TD = (props: React.ComponentPropsWithRef<"td">) => {
  const { children, ...otherProps } = props;
  const classes = useTDStyles();

  return (
    <td {...otherProps} className={classes.root}>
      {children}
    </td>
  );
};

const TH = (props: React.ComponentPropsWithRef<"th">) => {
  const { children, ...otherProps } = props;
  const classes = useTHStyles();

  return (
    <th {...otherProps} className={classes.root}>
      {children}
    </th>
  );
};

const Link = (props: React.ComponentPropsWithRef<"a">) => {
  const { children, ...otherProps } = props;
  const classes = useLinkStyles();

  return (
    <a {...otherProps} className={classes.root}>
      {children}
    </a>
  );
};

export default function createComponentMapping() {
  return {
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    pre: function Pre({ children }: React.ComponentPropsWithRef<"pre">) {
      return <React.Fragment>{children}</React.Fragment>;
    },
    code: CodeBlock,
    inlineCode: InlineCode,
    hr: HorizontalDivider,
    table: Table,
    tfoot: TableFooter,
    tr: TableRow,
    td: TD,
    th: TH,
    a: Link
  };
}
