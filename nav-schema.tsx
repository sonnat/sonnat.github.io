import makeStyles from "@sonnat/ui/styles/makeStyles";
import usePreviousValue from "@sonnat/ui/utils/usePreviousValue";
import createClassName from "classnames";
import * as React from "react";
import Text from "@sonnat/ui/Text";
import ActiveLink from "components/ActiveLink";
import { diff } from "deep-diff";
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
        Controls: {
          label: "Controls",
          byChild: {
            Checkbox: {
              label: "Checkbox",
              href: "/docs/components/Checkbox"
            },
            CheckGroup: {
              label: "CheckGroup",
              href: "/docs/components/CheckGroup"
            },
            Radio: {
              label: "Radio",
              href: "/docs/components/Radio"
            },
            RadioGroup: {
              label: "RadioGroup",
              href: "/docs/components/RadioGroup"
            },
            Switch: {
              label: "Switch",
              href: "/docs/components/Switch"
            },
            FormControl: {
              label: "FormControl",
              href: "/docs/components/FormControl"
            },
            RangeSlider: {
              label: "RangeSlider",
              href: "/docs/components/RangeSlider"
            },
            Select: {
              label: "Select",
              href: "/docs/components/Select"
            },
            TextField: {
              label: "TextField",
              href: "/docs/components/TextField"
            },
            TextArea: {
              label: "TextArea",
              href: "/docs/components/TextArea"
            },
            Stepper: {
              label: "Stepper",
              href: "/docs/components/Stepper"
            }
          },
          children: [
            "Checkbox",
            "CheckGroup",
            "Radio",
            "RadioGroup",
            "Switch",
            "FormControl",
            "RangeSlider",
            "Select",
            "TextField",
            "TextArea",
            "Stepper"
          ]
        },
        Display: {
          label: "Display",
          byChild: {
            Badge: {
              label: "Badge",
              href: "/docs/components/Badge"
            },
            Chips: {
              label: "Chips",
              href: "/docs/components/Chips"
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
            }
          },
          children: ["Badge", "Chips", "Divider", "Tooltip", "Tag"]
        },
        Feedback: {
          label: "Feedback",
          byChild: {
            Spinners: {
              label: "Spinners",
              href: "/docs/components/Spinners"
            },
            Snackbar: {
              label: "Snackbar",
              href: "/docs/components/Snackbar"
            }
          },
          children: ["Spinners", "Snackbar"]
        },
        Layout: {
          label: "Layout",
          byChild: {
            Container: {
              label: "Container",
              href: "/docs/components/Container"
            },
            Row: {
              label: "Row",
              href: "/docs/components/Row"
            },
            Column: {
              label: "Column",
              href: "/docs/components/Column"
            }
          },
          children: ["Container", "Row", "Column"]
        },
        Navigation: {
          label: "Navigation",
          byChild: {
            Breadcrumb: {
              label: "Breadcrumb",
              href: "/docs/components/Breadcrumb"
            },
            Menu: {
              label: "Menu",
              href: "/docs/components/Menu"
            },
            TabBar: {
              label: "TabBar",
              href: "/docs/components/TabBar"
            }
          },
          children: ["Breadcrumb", "Menu", "TabBar"]
        },
        Other: {
          label: "Other",
          byChild: {
            CssBaseline: {
              label: "CssBaseline",
              href: "/docs/components/CssBaseline"
            },
            InputAdornment: {
              label: "InputAdornment",
              href: "/docs/components/InputAdornment"
            }
          },
          children: ["CssBaseline", "InputAdornment"]
        }
      },
      children: [
        "Actions",
        "Controls",
        "Display",
        "Feedback",
        "Layout",
        "Surface",
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
        height: `calc(100% - ${pxToRem(72)})`,
        paddingRight: pxToRem(16),
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

// @ts-ignore
const schemaToJSX = (schema, classes, depth = 0) => {
  let jsx;

  if (schema.children && schema.children.length > 0) {
    jsx = schema.children.map((child: string, index: number) => {
      const childSchema = schema.byChild[child];
      const key = `${child}/${index}`;

      if (!childSchema) return undefined;

      const isLeaf = !childSchema.children || childSchema.children.length === 0;

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

export const useNavJsx = (className?: string) => {
  const classes = useStyles();

  const children = React.useRef(null);
  const changeId = React.useRef("");

  const prevClasses = usePreviousValue(classes);

  const classesChanged = diff(classes, prevClasses) != null;
  const idChanged = classes.root !== changeId.current;

  if (classesChanged && idChanged) {
    changeId.current = classes.root;
    children.current = schemaToJSX(getSchema(), classes);
  }

  return (
    <nav className={createClassName(classes.root, className)}>
      <ul className={classes.navigationList}>{children.current}</ul>
    </nav>
  );
};
