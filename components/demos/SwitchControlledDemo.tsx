import { Button, Switch } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SwitchControlledDemo";

const demoCode = `import { Button, Switch } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
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

const SwitchControlledDemo = () => {
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
