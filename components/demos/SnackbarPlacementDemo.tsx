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

const componentName = "SnackbarPlacementDemo";

type Placement = NonNullable<SnackbarProps>["placement"];

const useStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    demoRow: { display: "flex", "& + &": { marginTop: spaces[7].rem } },
    placementControl: { alignItems: "center" }
  }),
  { name: "SnackbarPlacementDemo" }
);

const SnackbarPlacementDemo = () => {
  const classes = useStyles();

  const [placement, setPlacement] = React.useState<Placement>("center");
  const [isOpen, setOpen] = React.useState(false);

  const demoCode = `<Snackbar
  placement="${placement as string}"
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
            Placement
          </FormControlLabel>
          <RadioGroup
            id="radiogroup-horizontal-align"
            defaultValue="center"
            layoutDirection="row"
            onChange={v => void setPlacement(v as Placement)}
          >
            <Radio
              inputProps={{ id: "radiogroup-horizontal-align-left" }}
              label="left"
              value="left"
            />
            <Radio
              inputProps={{ id: "radiogroup-horizontal-align-center" }}
              label="center"
              value="center"
            />
            <Radio
              inputProps={{ id: "radiogroup-horizontal-align-right" }}
              label="right"
              value="right"
            />
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
          <Snackbar
            key={placement}
            text="The informative text!"
            open={isOpen}
            placement={placement}
          />
        </div>
      </div>
    </DemoBox>
  );
};

SnackbarPlacementDemo.displayName = componentName;

export default SnackbarPlacementDemo;
