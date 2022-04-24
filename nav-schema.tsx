/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import usePreviousValue from "@sonnat/ui/utils/usePreviousValue";
import createClassName from "classnames";
import ActiveLink from "components/ActiveLink";
import { Content, InnerLink, NavItem, Trigger } from "components/Collapsable";
import isDeepEqual from "fast-deep-equal/react";
import * as React from "react";

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
            InputSlider: {
              label: "InputSlider",
              href: "/docs/components/InputSlider"
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
            InputStepper: {
              label: "InputStepper",
              href: "/docs/components/InputStepper"
            }
          },
          children: [
            "Checkbox",
            "CheckGroup",
            "Radio",
            "RadioGroup",
            "Switch",
            "FormControl",
            "InputSlider",
            "InputStepper",
            "Select",
            "TextField",
            "TextArea"
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
            Code: {
              label: "Code",
              href: "/docs/components/Code"
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
            },
            Table: {
              label: "Table",
              href: "/docs/components/Table"
            },
            Icon: {
              label: "Icon",
              href: "/docs/components/Icon"
            },
            Image: {
              label: "Image",
              href: "/docs/components/Image"
            },
            Card: {
              label: "Card",
              href: "/docs/components/Card"
            }
          },
          children: [
            "Badge",
            "Card",
            "Chips",
            "Code",
            "Divider",
            "Icon",
            "Image",
            "Tooltip",
            "Tag",
            "Table",
            "Text"
          ]
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
            },
            Dialog: {
              label: "Dialog",
              href: "/docs/components/Dialog"
            }
          },
          children: ["Dialog", "Spinners", "Snackbar"]
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
            },
            Flex: {
              label: "Flex",
              href: "/docs/components/Flex"
            }
          },
          children: ["CssBaseline", "InputAdornment", "Flex"]
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
    Colors: { label: "Colors", href: "/docs/colors" },
    "Server-side Rendering": {
      label: "Server-side Rendering",
      href: "/docs/server-side-rendering"
    },
    Packages: {
      label: "Packages",
      byChild: {
        Icons: {
          label: "Icons",
          href: "/docs/packages/icons"
        }
      },
      children: ["Icons"]
    }
  },
  children: [
    "Installation",
    "Server-side Rendering",
    "Components",
    "Theming",
    "Styling",
    "Colors",
    "Packages"
  ]
};

export const getSchema = (): Readonly<typeof schema> => {
  return Object.freeze(schema);
};

const useStyles = makeStyles(
  theme => {
    const {
      darkMode,
      colors: { text, divider, transparent, primary },
      typography: { pxToRem, fontWeight }
    } = theme;

    return {
      root: {
        height: `100%`,
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
              backgroundColor: !darkMode ? divider.dark : divider.light,
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
                backgroundColor: transparent,
                width: pxToRem(1),
                height: pxToRem(24),
                transition: "background-color 360ms ease"
              }
            },
            "& > $navigationItemLink$active:before": {
              backgroundColor: !darkMode ? primary.origin : primary.light
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
        color: !darkMode ? text.dark.secondary : text.light.secondary,
        transition: "color 360ms ease, font-weight 360ms ease",
        "&$active": {
          color: !darkMode ? primary.origin : primary.light,
          fontWeight: fontWeight.medium
        },
        "&:not($active):hover": {
          color: !darkMode ? text.dark.primary : text.light.primary
        }
      },
      active: {}
    };
  },
  { name: "Nav" }
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
                  as="a"
                  variant="bodySmall"
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
                  as="a"
                  variant={depth === 1 ? "bodySmall" : "caption"}
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

export const useNavJsx = (className?: string): JSX.Element => {
  const classes = useStyles();

  const children = React.useRef(null);
  const changeId = React.useRef("");

  const prevClasses = usePreviousValue(classes);
  const classesChanged = !isDeepEqual(classes, prevClasses);

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
