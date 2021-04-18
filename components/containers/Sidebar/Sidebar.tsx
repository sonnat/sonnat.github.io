import Icon from "@sonnat/ui/Icon";
import Text from "@sonnat/ui/Text";
import InputAdornment from "@sonnat/ui/InputAdornment";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import TextField from "@sonnat/ui/TextField";
import detectScrollBarWidth from "@sonnat/ui/utils/detectScrollBarWidth";
import createClass from "classnames";
import * as React from "react";
import { useNavJsx } from "nav-schema";

interface Props {
  className?: string;
}

const componentName = "Sidebar";

const useStyles = makeStyles(
  theme => {
    const {
      colors,
      typography: { pxToRem }
    } = theme;

    return {
      root: ({ scrollBarWidth }) => ({
        position: "sticky",
        top: pxToRem(128),
        paddingBottom: pxToRem(32),
        zIndex: 1,
        "&:after": {
          marginRight: pxToRem(scrollBarWidth),
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: pxToRem(32),
          height: pxToRem(16),
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0), ${colors.background.origin})`
        }
      }),
      heading: ({ scrollBarWidth }) => ({
        position: "relative",
        zIndex: 2,
        paddingBottom: pxToRem(16),
        paddingRight: pxToRem(16),
        "&:after": {
          marginRight: pxToRem(scrollBarWidth),
          content: '""',
          position: "absolute",
          bottom: pxToRem(-16),
          left: 0,
          right: 0,
          height: pxToRem(16),
          background: `linear-gradient(180deg, ${colors.background.origin}, rgba(255, 255, 255, 0))`
        }
      }),
      hintText: { marginTop: pxToRem(4) }
    };
  },
  { name: componentName }
);

const Sidebar = React.memo<Props>(function Sidebar({ children, className }) {
  const navJsx = useNavJsx();

  const scrollBarWidth = React.useMemo(
    () => (typeof window !== "undefined" ? detectScrollBarWidth() : 0),
    []
  );

  const classes = useStyles({ scrollBarWidth });

  return (
    <aside className={createClass(className, classes.root)}>
      <div className={classes.heading}>
        <TextField
          fluid
          disabled
          name="search"
          leadingAdornment={
            <InputAdornment variant="icon">
              <Icon identifier="magnifier-large" />
            </InputAdornment>
          }
          placeholder="Search"
          size="small"
          inputProps={{ autoComplete: "off", "aria-label": "Search" }}
        />
        <Text
          className={classes.hintText}
          variant="captionText"
          size="medium"
          color="textHint"
          display="block"
          align="center"
        >
          Searchbox is under construction!
        </Text>
      </div>
      {navJsx}
      {children}
    </aside>
  );
});

Sidebar.displayName = componentName;

export default Sidebar;
