import Button from "@sonnat/ui/Button";
import FormControl, { FormControlLabel } from "@sonnat/ui/FormControl";
import Radio from "@sonnat/ui/Radio";
import RadioGroup from "@sonnat/ui/RadioGroup";
import Snackbar, { SnackbarProps } from "@sonnat/ui/Snackbar";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import clx from "classnames";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SnackbarPlacementDemo";

type Placement = NonNullable<SnackbarProps<Record<string, never>>["placement"]>;

const useStyles = makeStyles(
  theme => ({
    demoRow: {
      display: "flex",
      "& + &": { marginTop: theme.typography.pxToRem(16) }
    },
    placementControl: { alignItems: "center" }
  }),
  {
    name: "SnackbarPlacementDemo"
  }
);

const SnackbarPlacementDemo: React.FC = () => {
  const classes = useStyles();

  const [placement, setPlacement] = React.useState<Placement>("center");
  const [isOpen, setOpen] = React.useState(false);

  const demoCode = `<Snackbar
  placement="${placement}"
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
            onChange={e => void setPlacement(e.target.value as Placement)}
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
