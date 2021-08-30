import Button from "@sonnat/ui/Button";
import Switch from "@sonnat/ui/Switch";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SwitchControlledDemo";

const demoCode = `import Switch from "@sonnat/ui/Switch";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const Demo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="small"
        label="Toggle the Switch"
        onClick={() => void setChecked(c => !c)}
      />
      <Switch
        label="Label"
        checked={checked}
        inputProps={{ id: "sw-box-2" }}
        onChange={() => void setChecked(c => !c)}
      />
    </React.Fragment>
  );
};

export default Demo;
`;

const SwitchControlledDemo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <Button
          variant="outlined"
          size="small"
          label="Toggle the Switch"
          onClick={() => void setChecked(c => !c)}
        />
        <Switch
          label="Label"
          checked={checked}
          inputProps={{ id: "sw-box-2" }}
          onChange={() => void setChecked(c => !c)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

SwitchControlledDemo.displayName = componentName;

export default SwitchControlledDemo;
