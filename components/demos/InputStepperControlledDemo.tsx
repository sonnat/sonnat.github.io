import InputStepper from "@sonnat/ui/InputStepper";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "InputStepperControlledDemo";

const demoCode = `import InputStepper from "@sonnat/ui/InputStepper";
import * as React from "react";

const Demo = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <InputStepper value={value} onChange={newValue => void setValue(newValue)} />
      <span>The value is {\`"\${value}"\`}</span>
    </React.Fragment>
  );
};

export default Demo;
`;

const InputStepperControlledDemo = () => {
  const [value, setValue] = React.useState(0);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <InputStepper
          value={value}
          onChange={newValue => void setValue(newValue)}
        />
        <span style={{ marginTop: 16, textAlign: "center" }}>
          The value is
          <br />
          <strong
            style={{ paddingTop: 8, display: "inline-block" }}
          >{`"${value}"`}</strong>
        </span>
      </React.Fragment>
    </DemoBox>
  );
};

InputStepperControlledDemo.displayName = componentName;

export default InputStepperControlledDemo;
