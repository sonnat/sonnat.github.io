import Button from "@sonnat/ui/Button";
import Radio from "@sonnat/ui/Radio";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "RadioControlledDemo";

const demoCode = `import Radio from "@sonnat/ui/Radio";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const Demo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="small"
        label="Toggle the Radio"
        onClick={() => void setChecked(c => !c)}
      />
      <Radio
        label="Label"
        checked={checked}
        inputProps={{ id: "radio-2" }}
        onChange={() => void setChecked(true)}
      />
    </React.Fragment>
  );
};

export default Demo;
`;

const RadioControlledDemo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <Button
          variant="outlined"
          size="small"
          label="Toggle the Radio"
          onClick={() => void setChecked(c => !c)}
        />
        <Radio
          label="Label"
          checked={checked}
          inputProps={{ id: "radio-2" }}
          onChange={() => void setChecked(true)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

RadioControlledDemo.displayName = componentName;

export default RadioControlledDemo;
