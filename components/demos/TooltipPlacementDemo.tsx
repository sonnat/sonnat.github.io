import Tooltip, { TooltipProps } from "@sonnat/ui/Tooltip";
import FormControl from "@sonnat/ui/FormControl";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import FormControlLabel from "@sonnat/ui/FormControlLabel";
import RadioGroup from "@sonnat/ui/RadioGroup";
import Radio from "@sonnat/ui/Radio";
import DemoBox from "components/DemoBox";
import clx from "classnames";
import * as React from "react";

const componentName = "TooltipPlacementDemo";

type Placement = NonNullable<TooltipProps["placement"]>;

const useStyles = makeStyles(
  theme => ({
    demoRow: {
      display: "flex",
      "& + &": { marginTop: theme.typography.pxToRem(40) }
    },
    placementControl: { alignItems: "center" }
  }),
  {
    name: "TooltipPlacementDemo"
  }
);

const TooltipPlacementDemo: React.FC = () => {
  const classes = useStyles();

  const [placement, setPlacement] = React.useState<Placement>("top");

  const demoCode = `<Tooltip
  text="The informative text!"
  placement="${placement}"
  open={true}
  tailed
>
  <div>Placement (${placement})</div>
</Tooltip>`;

  return (
    <DemoBox
      code={demoCode}
      flexDirection="column"
      horizontalAlignment="center"
    >
      <div className={classes.demoRow}>
        <FormControl className={clx(classes.placementControl, "demoSubject")}>
          <FormControlLabel htmlFor="radiogroup-placement">
            Placement
          </FormControlLabel>
          <RadioGroup
            title="Tooltip's placement"
            id="radiogroup-placement"
            defaultValue="left"
            layoutDirection="row"
            onChange={e => {
              setPlacement(e.target.value as Placement);
            }}
          >
            <Radio
              inputProps={{ id: "radiogroup-placement-top" }}
              label="top"
              value="top"
            />
            <Radio
              inputProps={{ id: "radiogroup-placement-left" }}
              label="left"
              value="left"
            />
            <Radio
              inputProps={{ id: "radiogroup-placement-right" }}
              label="right"
              value="right"
            />
            <Radio
              inputProps={{ id: "radiogroup-placement-bottom" }}
              label="bottom"
              value="bottom"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.demoRow}>
        <Tooltip
          text="The informative text!"
          placement={placement}
          tailed
          open={true}
        >
          <div>Placement ({placement})</div>
        </Tooltip>
      </div>
    </DemoBox>
  );
};

TooltipPlacementDemo.displayName = componentName;

export default TooltipPlacementDemo;
