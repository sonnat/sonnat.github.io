import { InfoCircleLargeO } from "@sonnat/icons";
import {
  Code,
  Divider,
  Text,
  type CodeProps,
  type DividerProps,
  type TextProps
} from "@sonnat/ui";
import {
  adjustColorHsla,
  makeStyles,
  useTheme,
  type Breakpoints,
  type Spacings
} from "@sonnat/ui/styles";
import c from "classnames";
import prismTheme from "components/DemoBox/theme";
import Link from "next/link";
import Highlight, { defaultProps, type Language } from "prism-react-renderer";
import * as React from "react";

interface CustomDivProps extends React.ComponentPropsWithoutRef<"div"> {
  "data-notebox"?: boolean;
}

interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  cols?: number | "auto";
}

const useParagraphStyles = makeStyles(
  theme => ({
    root: {
      paddingTop: theme.spacings.spaces[7].rem,
      paddingBottom: theme.spacings.spaces[7].rem,
      "& + ul, & + ol": { marginTop: `-${theme.spacings.spaces[7].rem}` },
      "& + div > table": { marginTop: `-${theme.spacings.spaces[7].rem}` }
    }
  }),
  { name: "Paragraph" }
);

const baseHeadingStyles = (
  spaces: Spacings["spaces"],
  breakpoints: Breakpoints
) => ({
  root: {
    alignItems: "center",
    "& + .demo-box, & + pre": { marginTop: spaces[3].rem },
    [breakpoints.up("sm")]: {
      "@global .anchor-button": { visibility: "hidden", opacity: 0 }
    },
    "&:hover": {
      "@global .anchor-button": { visibility: "visible", opacity: 1 }
    }
  }
});

const useH1Styles = makeStyles(
  ({ breakpoints, typography: { variants }, spacings: { spaces } }) => ({
    root: {
      ...baseHeadingStyles(spaces, breakpoints).root,
      [breakpoints.down("sm")]: { ...variants.h4 }
    }
  }),
  { name: "H1" }
);

const useH2Styles = makeStyles(
  ({
    breakpoints,
    typography: { pxToRem, variants },
    spacings: { spaces, spacer }
  }) => ({
    root: {
      ...baseHeadingStyles(spaces, breakpoints).root,
      paddingTop: pxToRem(spacer.px * 2),
      [breakpoints.down("sm")]: { ...variants.h5 }
    }
  }),
  { name: "H2" }
);

const useH3Styles = makeStyles(
  ({
    breakpoints,
    typography: { pxToRem, variants },
    spacings: { spaces, spacer }
  }) => ({
    root: {
      ...baseHeadingStyles(spaces, breakpoints).root,
      paddingTop: pxToRem(spacer.px * 2),
      [breakpoints.down("sm")]: { ...variants.h6 }
    }
  }),
  { name: "H3" }
);

const useH4Styles = makeStyles(
  ({
    breakpoints,
    typography: { variants },
    spacings: { spaces, spacer }
  }) => ({
    root: {
      ...baseHeadingStyles(spaces, breakpoints).root,
      paddingTop: spacer.rem,
      [breakpoints.down("sm")]: { ...variants.subtitle }
    }
  }),
  { name: "H4" }
);

const useCodeBlockStyles = makeStyles(
  ({
    breakpoints,
    swatches,
    typography: { pxToRem },
    spacings: { spacer }
  }) => ({
    root: {
      backgroundColor: swatches.grey[900],
      [breakpoints.down("lg")]: { maxWidth: `calc(100vw - ${pxToRem(32)})` },
      "& + ul": { marginTop: pxToRem(spacer.px * 2) },
      "& + p": { marginTop: spacer.rem },
      "& + &": { marginTop: spacer.rem }
    }
  }),
  { name: "CodeBlock" }
);

const useInlineCodeStyles = makeStyles(
  ({ darkMode }) => ({
    root: {
      border: `1px solid rgba(${darkMode ? 255 : 0}, ${darkMode ? 255 : 0}, ${
        darkMode ? 255 : 0
      }, 0.08)`
    }
  }),
  { name: "InlineCode" }
);

const useTableStyles = makeStyles(
  ({
    breakpoints,
    darkMode,
    colors: { text },
    typography: { pxToRem, variants },
    spacings: { spaces }
  }) => ({
    root: {
      marginTop: spaces[7].rem,
      overflow: "auto",
      width: "100%",
      display: "block",
      [breakpoints.down("lg")]: { maxWidth: `calc(100vw - ${pxToRem(32)})` }
    },
    table: {
      borderCollapse: "collapse",
      captionSide: "bottom",
      wordBreak: "normal",
      "& ul, & ol": { paddingTop: 0, paddingBottom: 0 },
      "& li": {
        fontSize: variants.caption.fontSize,
        lineHeight: variants.caption.lineHeight
      },
      "& caption": {
        ...variants.caption,
        color: !darkMode ? text.dark.secondary : text.light.secondary,
        textAlign: "left",
        padding: [[spaces[3].rem, 0]]
      }
    }
  }),
  { name: "Table" }
);

const useTHStyles = makeStyles(
  ({
    darkMode,
    colors: { text },
    typography: { pxToRem, variants },
    spacings: { spaces }
  }) => ({
    root: {
      ...variants.subtitleSmall,
      color: !darkMode ? text.dark.primary : text.light.primary,
      textAlign: "left",
      padding: [[spaces[6].rem, spaces[7].rem]],
      whiteSpace: "pre",
      minWidth: pxToRem(120)
    }
  }),
  { name: "TH" }
);

const useTDStyles = makeStyles(
  ({
    darkMode,
    colors: { text },
    typography: { variants },
    spacings: { spaces }
  }) => ({
    root: {
      ...variants.bodySmall,
      color: !darkMode ? text.dark.primary : text.light.primary,
      padding: [[spaces[4].rem, spaces[7].rem]]
    }
  }),
  { name: "TD" }
);

const useTableRowStyles = makeStyles(
  ({ darkMode, colors: { divider } }) => ({
    root: {
      borderBottom: `1px solid ${!darkMode ? divider.dark : divider.light}`,
      verticalAlign: "top"
    }
  }),
  { name: "TableRow" }
);

const useTableFooterStyles = makeStyles(
  ({
    darkMode,
    colors: { text },
    typography: { variants },
    spacings: { spaces }
  }) => ({
    root: {
      "& td": {
        ...variants.caption,
        color: !darkMode ? text.dark.primary : text.light.primary,
        padding: [[spaces[3].rem, 0]]
      }
    }
  }),
  { name: "TableFooter" }
);

const useLinkStyles = makeStyles(
  theme => {
    const { colors, darkMode } = theme;

    const primary = !darkMode ? colors.primary.origin : colors.primary.light;

    const primaryHover = adjustColorHsla(primary, {
      saturation: -8,
      lightness: +8
    });

    const primaryActive = adjustColorHsla(primary, {
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
          height: 1,
          backgroundColor: colors.transparent
        }
      }
    };
  },
  { name: "Link" }
);

const useOrderedListStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    root: {
      counterReset: "section",
      listStyle: "none",
      paddingRight: 0,
      paddingLeft: 0,
      margin: 0,
      paddingTop: spaces[7].rem,
      paddingBottom: spaces[7].rem,
      "& + p": { marginTop: `-${spaces[7].rem}` },
      "& > li:before": {
        counterIncrement: "section",
        content: 'counters(section, ".") "-"',
        width: "auto",
        height: "auto",
        backgroundColor: "transparent",
        borderRadius: "initial",
        verticalAlign: "initial",
        marginRight: spaces[1].rem
      }
    }
  }),
  { name: "OrderedList" }
);

const useUnorderedListStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    root: {
      listStyle: "none",
      paddingRight: 0,
      paddingLeft: 0,
      margin: 0,
      paddingTop: spaces[7].rem,
      paddingBottom: spaces[7].rem
    }
  }),
  { name: "UnorderedList" }
);

const useListItemStyles = makeStyles(
  ({
    darkMode,
    radius,
    colors: { text },
    spacings: { spaces, spacer },
    typography: { variants, pxToRem }
  }) => ({
    root: {
      ...variants.body,
      position: "relative",
      color: !darkMode ? text.dark.primary : text.light.primary,
      "& pre": {
        marginTop: spaces[7].rem,
        marginBottom: pxToRem(spacer.px * 2)
      },
      "&:before": {
        marginRight: spaces[3].rem,
        content: '""',
        verticalAlign: "middle",
        display: "inline-block",
        width: pxToRem(4),
        height: pxToRem(4),
        borderRadius: radius.medium,
        flexShrink: 0,
        backgroundColor: !darkMode ? text.dark.primary : text.light.primary
      }
    }
  }),
  { name: "ListItem" }
);

const useCustomDivStyles = makeStyles(
  ({ darkMode, swatches, spacings: { spaces } }) => ({
    root: {
      "&#tickle-anchor": {
        width: 150,
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ddd"
      }
    },
    noteBox: {
      display: "flex",
      alignItems: "center",
      marginTop: spaces[7].rem,
      color: !darkMode ? swatches.navy[600] : swatches.navy[400]
    },
    noteBoxIcon: {
      marginRight: spaces[3].rem,
      alignSelf: "flex-start",
      position: "relative",
      top: spaces[0].rem
    }
  }),
  { name: "CustomDiv" }
);

const useMarkStyles = makeStyles(
  ({ colors, swatches, darkMode }) => ({
    root: {
      backgroundColor: colors.transparent,
      color: !darkMode ? swatches.navy[600] : swatches.navy[400],
      fontStyle: "italic",
      "&:before, &:after": { content: '"\'"' }
    }
  }),
  { name: "Mark" }
);

const Mark = (props: React.ComponentPropsWithoutRef<"mark">) => {
  const { children, ...otherProps } = props;

  const classes = useMarkStyles();

  return (
    <mark {...otherProps} className={classes.root}>
      {children}
    </mark>
  );
};

const CustomDiv = React.forwardRef(function CustomDiv(
  props: CustomDivProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    children,
    "data-notebox": isNoteBox,
    className,
    ...otherProps
  } = props;
  const classes = useCustomDivStyles();

  return (
    <div
      {...otherProps}
      ref={ref}
      className={c(classes.root, className, {
        [classes.noteBox]: isNoteBox
      })}
    >
      {isNoteBox ? (
        <React.Fragment>
          <InfoCircleLargeO size={18} className={classes.noteBoxIcon} />
          <Text variant="bodySmall">{children}</Text>
        </React.Fragment>
      ) : (
        children
      )}
    </div>
  );
});

const Paragraph = (props: TextProps<"p">) => {
  const { children, ...otherProps } = props;

  const classes = useParagraphStyles();

  return (
    <Text {...otherProps} className={classes.root} variant="body" as="p">
      {children}
    </Text>
  );
};

const H1 = (props: TextProps<"h1">) => {
  const { children, ...otherProps } = props;

  const classes = useH1Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="h3"
      display="flex"
      as="h1"
    >
      {children}
    </Text>
  );
};

const H2 = (props: TextProps<"h2">) => {
  const { children, ...otherProps } = props;

  const classes = useH2Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="h4"
      display="flex"
      as="h2"
    >
      {children}
    </Text>
  );
};

const H3 = (props: TextProps<"h3">) => {
  const { children, ...otherProps } = props;

  const classes = useH3Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="h5"
      display="flex"
      as="h3"
    >
      {children}
    </Text>
  );
};

const H4 = (props: TextProps<"h4">) => {
  const { children, ...otherProps } = props;

  const classes = useH4Styles();

  return (
    <Text
      {...otherProps}
      className={classes.root}
      variant="h6"
      display="flex"
      as="h4"
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
          className={c(className, classes.root)}
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
  const { children, cols = "auto", style, ...otherProps } = props;

  const classes = useTableStyles();
  const theme = useTheme();

  const widthProp =
    cols === "auto"
      ? { width: "100%" }
      : { minWidth: theme.typography.pxToRem(cols * 200) };

  return (
    <div className={classes.root}>
      <table
        style={{
          ...style,
          ...widthProp
        }}
        {...otherProps}
        className={classes.table}
      >
        {children}
      </table>
    </div>
  );
};

const TableFooter = (props: React.ComponentPropsWithoutRef<"tfoot">) => {
  const { children, ...otherProps } = props;

  const classes = useTableFooterStyles();

  return (
    <tfoot {...otherProps} className={classes.root}>
      {children}
    </tfoot>
  );
};

const TableRow = (props: React.ComponentPropsWithoutRef<"tr">) => {
  const { children, ...otherProps } = props;

  const classes = useTableRowStyles();

  return (
    <tr {...otherProps} className={classes.root}>
      {children}
    </tr>
  );
};

const TD = (props: React.ComponentPropsWithoutRef<"td">) => {
  const { children, ...otherProps } = props;

  const classes = useTDStyles();

  return (
    <td {...otherProps} className={classes.root}>
      {children}
    </td>
  );
};

const TH = (props: React.ComponentPropsWithoutRef<"th">) => {
  const { children, ...otherProps } = props;

  const classes = useTHStyles();

  return (
    <th {...otherProps} className={classes.root}>
      {children}
    </th>
  );
};

const CustomLink = (props: React.ComponentPropsWithoutRef<"a">) => {
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

const OrderedList = (props: React.ComponentPropsWithoutRef<"ol">) => {
  const { children, ...otherProps } = props;

  const classes = useOrderedListStyles();

  return (
    <ol {...otherProps} className={classes.root}>
      {children}
    </ol>
  );
};

const UnorderedList = (props: React.ComponentPropsWithoutRef<"ul">) => {
  const { children, ...otherProps } = props;

  const classes = useUnorderedListStyles();

  return (
    <ul {...otherProps} className={classes.root}>
      {children}
    </ul>
  );
};

const ListItem = (props: React.ComponentPropsWithoutRef<"li">) => {
  const { children, ...otherProps } = props;

  const classes = useListItemStyles();

  return (
    <li {...otherProps} className={classes.root}>
      <Text variant="body">{children}</Text>
    </li>
  );
};

const Pre = (props: React.ComponentPropsWithoutRef<"pre">) => (
  <>{props.children}</>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createComponentMapping() {
  return {
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    pre: Pre,
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
