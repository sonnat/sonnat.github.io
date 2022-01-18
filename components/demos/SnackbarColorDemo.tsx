import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  type SnackbarProps
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import clx from "classnames";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SnackbarColorDemo";

type Color = NonNullable<SnackbarProps>["color"];

const useStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    demoRow: { display: "flex", "& + &": { marginTop: spaces[7].rem } },
    placementControl: { alignItems: "center" }
  }),
  { name: "SnackbarColorDemo" }
);

const SnackbarColorDemo = () => {
  const classes = useStyles();

  const [color, setColor] = React.useState<Color>("default");
  const [isOpen, setOpen] = React.useState(false);

  const demoCode = `<Snackbar
  color="${color as string}"
/>`;

  return (
    <DemoBox
      code={demoCode}
      flexDirection="column"
      horizontalAlignment="center"
    >
      <div className={classes.demoRow}>
        <FormControl className={clx("demoSubject", classes.placementControl)}>
          <FormControlLabel htmlFor="radiogroup-horizontal-align">
            Color
          </FormControlLabel>
          <RadioGroup
            defaultValue={color}
            layoutDirection="row"
            onChange={v => void setColor(v as Color)}
          >
            <Radio label="default" value="default" />
            <Radio label="success" value="success" />
            <Radio label="warning" value="warning" />
            <Radio label="error" value="error" />
            <Radio label="info" value="info" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.demoRow}>
        <div className="demoSubject">
          <Button
            label="Toggle Snackbar"
            variant="outlined"
            size="small"
            onClick={() => void setOpen(o => !o)}
          />
          <Snackbar text="The informative text!" open={isOpen} color={color} />
        </div>
      </div>
    </DemoBox>
  );
};

SnackbarColorDemo.displayName = componentName;

export default SnackbarColorDemo;
