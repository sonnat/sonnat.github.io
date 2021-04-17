import Snackbar, { SnackbarProps } from "@sonnat/ui/Snackbar";
import FormControl from "@sonnat/ui/FormControl";
import FormControlLabel from "@sonnat/ui/FormControlLabel";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import RadioGroup from "@sonnat/ui/RadioGroup";
import Radio from "@sonnat/ui/Radio";
import DemoBox from "components/DemoBox";
import clx from "classnames";
import * as React from "react";
import Button from "@sonnat/ui/Button";

const componentName = "SnackbarPlacementDemo";

type Placement = NonNullable<SnackbarProps["placement"]>;

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
