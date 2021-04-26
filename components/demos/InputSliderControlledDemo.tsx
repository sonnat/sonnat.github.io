import InputSlider from "@sonnat/ui/InputSlider";
import InputStepper from "@sonnat/ui/InputStepper";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "InputSliderControlledDemo";

const demoCode = `import InputSlider from "@sonnat/ui/InputSlider";
import InputStepper from "@sonnat/ui/InputStepper";
import * as React from "react";

const Demo: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
    <InputSlider
      min={0}
      max={10}
      value={value}
      onChange={(_, newValue) => void setValue(newValue as number)}
    />
    <InputStepper
      size="small"
      min={0}
      max={10}
      value={value}
      onAdd={() => void setValue(v => Math.floor(v) + 1)}
      onSubtract={() => void setValue(v => Math.floor(v) - 1)}
    />
    </React.Fragment>
  );
};

export default Demo;
`;

const InputSliderControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <InputSlider
          min={0}
          max={10}
          value={value}
          onChange={(_, newValue) => void setValue(newValue as number)}
        />
        <br />
        <InputStepper
          size="small"
          min={0}
          max={10}
          value={value}
          onAdd={() => void setValue(v => Math.floor(v) + 1)}
          onSubtract={() => void setValue(v => Math.floor(v) - 1)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

InputSliderControlledDemo.displayName = componentName;

export default InputSliderControlledDemo;
