import Code, { CodeProps } from "@sonnat/ui/Code";
import Divider, { DividerProps } from "@sonnat/ui/Divider";
import { adjustColor } from "@sonnat/ui/styles/colorUtils";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text, { TextProps } from "@sonnat/ui/Text";
import Icon from "@sonnat/ui/Icon";
import createClassName from "classnames";
import prismTheme from "components/DemoBox/theme";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import Link from "next/link";
import * as React from "react";
import useTheme from "@sonnat/ui/styles/useTheme";

interface CustomDivProps extends React.ComponentPropsWithRef<"div"> {
  "data-notebox"?: boolean;
}

interface TableProps extends React.ComponentPropsWithRef<"table"> {
  cols?: number;
}

const useParagraphStyles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.typography.pxToRem(16),
      paddingBottom: theme.typography.pxToRem(16),
      "& + ul, & + ol": { marginTop: theme.typography.pxToRem(-16) }
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

const useH4Styles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.typography.pxToRem(16),
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
  { name: "H4" }
);

const useCodeBlockStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.colors.pallete.grey[900],
      [theme.breakpoints.down("lg")]: {
        maxWidth: `calc(100vw - ${theme.typography.pxToRem(32)})`
      },
      "& + ul": { marginTop: theme.typography.pxToRem(32) },
      "& + p": { marginTop: theme.typography.pxToRem(16) },
      "& + &": { marginTop: theme.typography.pxToRem(16) }
    }
  }),
  { name: "CodeBlock" }
);

const useInlineCodeStyles = makeStyles(
  theme => ({
    root: {
      border: `1px solid ${
        theme.darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
      }`
    }
  }),
  { name: "InlineCode" }
);

const useTableStyles = makeStyles(
  theme => ({
    root: {
      marginTop: theme.typography.pxToRem(16),
      overflow: "auto",
      width: "100%",
      display: "block",
      [theme.breakpoints.down("lg")]: {
        maxWidth: `calc(100vw - ${theme.typography.pxToRem(32)})`
      }
    },
    table: {
      borderCollapse: "collapse",
      captionSide: "bottom",
      wordBreak: "normal",
      "& ul, & ol": { paddingTop: 0, paddingBottom: 0 },
      "& li": {
        fontSize: theme.typography.pxToRem(12)
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

const useOrderedListStyles = makeStyles(
  theme => ({
    root: {
      counterReset: "section",
      listStyle: "none",
      paddingRight: 0,
      paddingLeft: 0,
      margin: 0,
      paddingTop: theme.typography.pxToRem(16),
      paddingBottom: theme.typography.pxToRem(16),
      "& + p": { marginTop: theme.typography.pxToRem(-16) },
      "& > li:before": {
        counterIncrement: "section",
        content: 'counters(section, ".") "-"',
        width: "auto",
        height: "auto",
        backgroundColor: "transparent",
        borderRadius: "initial",
        verticalAlign: "initial",
        marginRight: theme.typography.pxToRem(4)
      }
    }
  }),
  { name: "OrderedList" }
);

const useUnorderedListStyles = makeStyles(
  theme => ({
    root: {
      listStyle: "none",
      paddingRight: 0,
      paddingLeft: 0,
      margin: 0,
      paddingTop: theme.typography.pxToRem(16),
      paddingBottom: theme.typography.pxToRem(16)
    }
  }),
  { name: "UnorderedList" }
);

const useListItemStyles = makeStyles(
  theme => ({
    root: {
      position: "relative",
      color: theme.colors.text.primary,
      fontSize: theme.typography.pxToRem(16),
      "& pre": {
        marginTop: theme.typography.pxToRem(16),
        marginBottom: theme.typography.pxToRem(32)
      },
      "&:before": {
        marginRight: theme.typography.pxToRem(8),
        content: '""',
        verticalAlign: "middle",
        display: "inline-block",
        width: "0.25rem",
        height: "0.25rem",
        borderRadius: "0.5em",
        flexShrink: 0,
        backgroundColor: theme.colors.text.primary
      }
    }
  }),
  { name: "ListItem" }
);

const useCustomDivStyles = makeStyles(
  theme => ({
    root: {},
    noteBox: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.typography.pxToRem(16),
      color: !theme.darkMode
        ? theme.colors.secondary.origin
        : theme.colors.secondary.light
    },
    noteBoxIcon: {
      marginRight: theme.typography.pxToRem(8),
      alignSelf: "flex-start",
      position: "relative",
      top: theme.typography.pxToRem(5)
    }
  }),
  { name: "CustomDiv" }
);

const useMarkStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.colors.transparent,
      color: theme.darkMode
        ? theme.colors.secondary.light
        : theme.colors.secondary.origin,
      fontStyle: "italic",
      "&:before, &:after": { content: '"\'"' }
    }
  }),
  { name: "Mark" }
);

const Mark = (props: React.ComponentPropsWithRef<"mark">) => {
  const { children, ...otherProps } = props;
  const classes = useMarkStyles();

  return (
    <mark {...otherProps} className={classes.root}>
      {children}
    </mark>
  );
};

const CustomDiv = (props: CustomDivProps) => {
  const { children, "data-notebox": isNoteBox, ...otherProps } = props;
  const classes = useCustomDivStyles();

  return (
    <div
      {...otherProps}
      className={createClassName(classes.root, {
        [classes.noteBox]: isNoteBox
      })}
    >
      {isNoteBox ? (
        <React.Fragment>
          <Icon
            size={18}
            className={classes.noteBoxIcon}
            identifier="info-circle-large-o"
          />
          <Text variant="bodyText" size="small" responsive>
            {children}
          </Text>
        </React.Fragment>
      ) : (
        children
      )}
    </div>
  );
};

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

const H4 = (props: TextProps<{}, "h4">) => {
  const { children, ...otherProps } = props;
  const classes = useH4Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="titleText"
      display="flex"
      size="extraSmall"
      rootNode="h4"
      responsive
    >
      {children}
    </Text>
  );
};

const CodeBlock = (props: CodeProps) => {
  const { children, className, ...otherProps } = props;

  const classes = useCodeBlockStyles();

  const language: Language = (className
    ?.split(" ")
    .filter(v => v.includes("language-"))[0]
    .replace("language-", "") || "javascript") as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
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
          {tokens.map((line, i) => {
            const isLastLine = i === tokens.length - 1;

            return (
              <div key={`${line}/${i}`} {...getLineProps({ line, key: i })}>
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
  );
};

const InlineCode = (props: CodeProps) => {
  const { children, ...otherProps } = props;
  const classes = useInlineCodeStyles();

  return (
    <Code {...otherProps} className={classes.root}>
      {children}
    </Code>
  );
};

const HorizontalDivider = (props: DividerProps) => {
  return <Divider {...props} />;
};

const Table = (props: TableProps) => {
  const { children, cols = 1, ...otherProps } = props;

  const classes = useTableStyles();
  const theme = useTheme();

  const width = theme.typography.pxToRem(cols * 200);

  return (
    <div className={classes.root}>
      <table style={{ width }} {...otherProps} className={classes.table}>
        {children}
      </table>
    </div>
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

const CustomLink = (props: React.ComponentPropsWithRef<"a">) => {
  const { children, href = "", ...otherProps } = props;
  const classes = useLinkStyles();

  return (
    <Link href={href}>
      <a {...otherProps} className={classes.root}>
        {children}
      </a>
    </Link>
  );
};

const OrderedList = (props: React.ComponentPropsWithRef<"ol">) => {
  const { children, ...otherProps } = props;
  const classes = useOrderedListStyles();

  return (
    <ol {...otherProps} className={classes.root}>
      {children}
    </ol>
  );
};

const UnorderedList = (props: React.ComponentPropsWithRef<"ul">) => {
  const { children, ...otherProps } = props;
  const classes = useUnorderedListStyles();

  return (
    <ul {...otherProps} className={classes.root}>
      {children}
    </ul>
  );
};

const ListItem = (props: React.ComponentPropsWithRef<"li">) => {
  const { children, ...otherProps } = props;
  const classes = useListItemStyles();

  return (
    <li {...otherProps} className={classes.root}>
      <Text variant="bodyText" size="medium" responsive>
        {children}
      </Text>
    </li>
  );
};

export default function createComponentMapping() {
  return {
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    pre: function Pre({ children }: React.ComponentPropsWithRef<"pre">) {
      return <React.Fragment>{children}</React.Fragment>;
    },
    mark: Mark,
    code: CodeBlock,
    inlineCode: InlineCode,
    hr: HorizontalDivider,
    table: Table,
    tfoot: TableFooter,
    tr: TableRow,
    td: TD,
    th: TH,
    a: CustomLink,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    div: CustomDiv
  };
}
