import { Radio, RadioGroup } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "RadioGroupDemo";

const demoCode = `import { Radio, RadioGroup } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <RadioGroup
        value={value}
        onChange={selectedValue => void setValue(selectedValue)}
      >
        <Radio label="Ali" value="Ali" />
        <Radio label="David" value="David" />
        <Radio label="Mostafa" value="Mostafa" />
        <Radio label="Jacob" value="Jacob" />
        <Radio label="Mehdi" value="Mehdi" />
      </RadioGroup>
      {values && <small>Value = {value}</small>}
    </React.Fragment>
  );
};

export default Demo;
`;

const RadioGroupDemo = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <RadioGroup
          value={value}
          onChange={selectedValue => void setValue(selectedValue)}
        >
          <Radio label="Ali" value="Ali" />
          <Radio label="David" value="David" />
          <Radio label="Mostafa" value="Mostafa" />
          <Radio label="Jacob" value="Jacob" />
          <Radio label="Mehdi" value="Mehdi" />
        </RadioGroup>
        {value && (
          <React.Fragment>
            <div
              style={{
                width: 32,
                borderTop: "1px solid #ddd",
                paddingTop: 16,
                marginTop: 16
              }}
            ></div>
            <small>Value = {value}</small>
          </React.Fragment>
        )}
      </React.Fragment>
    </DemoBox>
  );
};

RadioGroupDemo.displayName = componentName;

export default RadioGroupDemo;
