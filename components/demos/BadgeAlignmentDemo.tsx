import Badge, { BadgeProps } from "@sonnat/ui/Badge";
import FormControl from "@sonnat/ui/FormControl";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import FormControlLabel from "@sonnat/ui/FormControlLabel";
import RadioGroup from "@sonnat/ui/RadioGroup";
import Radio from "@sonnat/ui/Radio";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BadgeAlignmentDemo";

type VerticalPlacement = NonNullable<BadgeProps["verticalPosition"]>;
type HorizontalPlacement = NonNullable<BadgeProps["horizontalPosition"]>;

const useStyles = makeStyles(
  theme => ({
    demoRow: {
      display: "flex",
      "& + &": { marginTop: theme.typography.pxToRem(16) }
    }
  }),
  {
    name: "BadgeAlignmentDemo"
  }
);

const BadgeAlignmentDemo: React.FC = () => {
  const classes = useStyles();

  const [vertical, setVertical] = React.useState<VerticalPlacement>("top");
  const [horizontal, setHorizontal] = React.useState<HorizontalPlacement>(
    "right"
  );

  const demoCode = `<Badge
  variant="dotted"
  color="secondary"
  verticalPosition="${vertical}"
  horizontalPosition="${horizontal}"
>
  // Rectangular shape
  <div></div>
</Badge>
<Badge
  childShape="circular"
  color="secondary"
  textContent="9"
  verticalPosition="${vertical}"
  horizontalPosition="${horizontal}"
>
  // Circular shape
  <div></div>
</Badge>`;

  return (
    <DemoBox
      code={demoCode}
      flexDirection="column"
      horizontalAlignment="center"
    >
      <div className={classes.demoRow}>
        <FormControl className="demoSubject">
          <FormControlLabel htmlFor="radiogroup-vertical-align">
            Vertical
          </FormControlLabel>
          <RadioGroup
            id="radiogroup-vertical-align"
            defaultValue="top"
            onChange={e =>
              void setVertical(e.target.value as VerticalPlacement)
            }
          >
            <Radio
              inputProps={{ id: "radiogroup-vertical-align-top" }}
              label="top"
              value="top"
            />
            <Radio
              inputProps={{ id: "radiogroup-vertical-align-bottom" }}
              label="bottom"
              value="bottom"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className="demoSubject">
          <FormControlLabel htmlFor="radiogroup-horizontal-align">
            Horizontal
          </FormControlLabel>
          <RadioGroup
            id="radiogroup-horizontal-align"
            defaultValue="right"
            onChange={e =>
              void setHorizontal(e.target.value as HorizontalPlacement)
            }
          >
            <Radio
              inputProps={{ id: "radiogroup-horizontal-align-left" }}
              label="left"
              value="left"
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
          <Badge
            variant="dotted"
            childShape="rectangular"
            color="secondary"
            verticalPosition={vertical}
            horizontalPosition={horizontal}
          >
            <div
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#eaeaea"
              }}
            ></div>
          </Badge>
        </div>
        <div className="demoSubject">
          <Badge
            textContent="9"
            childShape="circular"
            color="secondary"
            verticalPosition={vertical}
            horizontalPosition={horizontal}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#eaeaea"
              }}
            ></div>
          </Badge>
        </div>
      </div>
    </DemoBox>
  );
};

BadgeAlignmentDemo.displayName = componentName;

export default BadgeAlignmentDemo;
