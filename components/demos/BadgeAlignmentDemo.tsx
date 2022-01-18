import {
  Badge,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  type BadgeProps
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BadgeAlignmentDemo";

type VerticalPlacement = NonNullable<BadgeProps["verticalPosition"]>;
type HorizontalPlacement = NonNullable<BadgeProps["horizontalPosition"]>;

const useStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    demoRow: { display: "flex", "& + &": { marginTop: spaces[7].rem } }
  }),
  { name: "BadgeAlignmentDemo" }
);

const BadgeAlignmentDemo: React.FC = () => {
  const classes = useStyles();

  const [vertical, setVertical] = React.useState<VerticalPlacement>("top");
  const [horizontal, setHorizontal] =
    React.useState<HorizontalPlacement>("right");

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
  text="9"
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
            onChange={selectedValue =>
              void setVertical(selectedValue as VerticalPlacement)
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
            onChange={selectedValue =>
              void setHorizontal(selectedValue as HorizontalPlacement)
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
            text="9"
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
