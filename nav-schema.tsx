import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClassName from "classnames";
import * as React from "react";
import Text from "@sonnat/ui/Text";
import ActiveLink from "components/ActiveLink";
import { Content, InnerLink, NavItem, Trigger } from "components/Collapsable";

const schema = {
  byChild: {
    Installation: { label: "Installation", href: "/docs/installation" },
    Components: {
      label: "Components",
      byChild: {
        Actions: {
          label: "Actions",
          byChild: {
            Button: {
              label: "Button",
              href: "/docs/components/Button"
            }
          },
          children: ["Button"]
        },
        Display: {
          label: "Display",
          byChild: {
            Badge: {
              label: "Badge",
              href: "/docs/components/Badge"
            },
            Chip: {
              label: "Chip",
              href: "/docs/components/Chip"
            },
            Divider: {
              label: "Divider",
              href: "/docs/components/Divider"
            },
            Tooltip: {
              label: "Tooltip",
              href: "/docs/components/Tooltip"
            },
            Tag: {
              label: "Tag",
              href: "/docs/components/Tag"
            },
            Text: {
              label: "Text",
              href: "/docs/components/Text"
            }
          },
          children: ["Badge", "Chip", "Divider", "Tooltip", "Tag", "Text"]
        },
        Other: {
          label: "Other",
          byChild: {
            CssBaseline: {
              label: "CssBaseline",
              href: "/docs/components/CssBaseline"
            }
          },
          children: ["CssBaseline"]
        }
      },
      children: [
        "Actions",
        "Controls",
        "Display",
        "Layout",
        "Surface",
        "Feedback",
        "Navigation",
        "Other"
      ]
    },
    Theming: { label: "Theming", href: "/docs/theming" },
    Styling: { label: "Styling", href: "/docs/styling" },
    "Server-side Rendering": {
      label: "Server-side Rendering",
      href: "/docs/serverside-rendering"
    }
  },
  children: [
    "Installation",
    "Server-side Rendering",
    "Components",
    "Theming",
    "Styling"
  ]
};

export const getSchema = () => {
  return Object.freeze(schema);
};

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      darkMode,
      typography: { pxToRem, fontWeight }
    } = theme;

    return {
      root: {
        height: `calc(100% - ${pxToRem(48)})`,
        paddingRight: pxToRem(16),
        paddingTop: pxToRem(16),
        paddingBottom: pxToRem(16),
        overflowX: "hidden",
        overflowY: "auto"
      },
      navigationList: {
        position: "relative",
        margin: 0,
        padding: 0,
        listStyle: "none",
        "& $navigationList": {
          paddingLeft: pxToRem(32),
          "& $navigationList": {
            paddingLeft: pxToRem(16),
            "&:before": {
              left: pxToRem(16),
              position: "absolute",
              top: pxToRem(8),
              bottom: pxToRem(8),
              content: '""',
              backgroundColor: colors.divider,
              width: pxToRem(1)
            }
          }
        }
      },
      navigationItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "& $navigationItem": {
          position: "relative",
          "& $navigationItem": {
            flexDirection: "row",
            alignItems: "center",
            "& > $navigationItemLink": {
              height: pxToRem(32),
              "&:before": {
                content: '""',
                position: "absolute",
                left: 0,
                backgroundColor: colors.transparent,
                width: pxToRem(1),
                height: pxToRem(24),
                transition: "background-color 360ms ease"
              }
            },
            "& > $navigationItemLink$active:before": {
              backgroundColor: !darkMode
                ? colors.primary.origin
                : colors.primary.light
            }
          }
        }
      },
      navigationItemLink: {
        paddingLeft: pxToRem(8),
        position: "relative",
        height: pxToRem(40),
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        color: colors.text.secondary,
        transition: "color 360ms ease, font-weight 360ms ease",
        "&$active": {
          color: !darkMode ? colors.primary.origin : colors.primary.light,
          fontWeight: fontWeight.medium
        },
        "&:not($active):hover": {
          color: colors.text.primary
        }
      },
      active: {}
    };
  },
  { name: "Nav" }
);

export const useNavJsx = (className?: string) => {
  const classes = useStyles();
  type ClassesType = typeof classes;

  // @ts-ignore
  const schemaToJSX = (schema, classes: ClassesType, depth = 0) => {
    let jsx;

    if (schema.children && schema.children.length > 0) {
      jsx = schema.children.map((child: string, index: number) => {
        const childSchema = schema.byChild[child];
        const key = `${child}/${index}`;

        if (!childSchema) return undefined;

        const isLeaf =
          !childSchema.children || childSchema.children.length === 0;

        if (isLeaf) {
          if (depth === 0) {
            return (
              <li key={key} className={classes.navigationItem}>
                <ActiveLink
                  href={childSchema.href}
                  activeClassName={classes.active}
                  passHref
                >
                  <Text
                    title={childSchema.label}
                    rootNode="a"
                    variant="bodyText"
                    size="small"
                    className={classes.navigationItemLink}
                  >
                    {childSchema.label}
                  </Text>
                </ActiveLink>
              </li>
            );
          } else {
            return (
              <li key={key} className={classes.navigationItem}>
                <InnerLink
                  href={childSchema.href}
                  activeClassName={classes.active}
                  passHref
                >
                  <Text
                    title={childSchema.label}
                    rootNode="a"
                    variant={depth === 1 ? "bodyText" : "captionText"}
                    size={depth === 1 ? "small" : "large"}
                    className={classes.navigationItemLink}
                  >
                    {childSchema.label}
                  </Text>
                </InnerLink>
              </li>
            );
          }
        } else {
          return (
            <li key={key} className={classes.navigationItem}>
              <NavItem
                trigger={
                  <Trigger
                    title={childSchema.label}
                    className={classes.navigationItemLink}
                  />
                }
                content={
                  <Content>
                    <ul className={classes.navigationList}>
                      {schemaToJSX(childSchema, classes, depth + 1)}
                    </ul>
                  </Content>
                }
              />
            </li>
          );
        }
      });
    }

    return jsx;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const children = React.useMemo(() => schemaToJSX(getSchema(), classes), [
    classes
  ]);

  return (
    <nav className={createClassName(classes.root, className)}>
      <ul className={classes.navigationList}>{children}</ul>
    </nav>
  );
};
