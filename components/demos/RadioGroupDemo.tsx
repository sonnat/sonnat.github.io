import Radio from "@sonnat/ui/Radio";
import RadioGroup from "@sonnat/ui/RadioGroup";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "RadioGroupDemo";

const demoCode = `import RadioGroup from "@sonnat/ui/RadioGroup";
import Radio from "@sonnat/ui/Radio";
import * as React from "react";

const Demo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <RadioGroup
        value={value}
        onChange={(e, selectedValue) => void setValue(selectedValue)}
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

const RadioGroupDemo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <RadioGroup
          value={value}
          onChange={(_, selectedValue) => void setValue(selectedValue)}
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
