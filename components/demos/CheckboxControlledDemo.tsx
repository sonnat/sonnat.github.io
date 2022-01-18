import { Button, Checkbox } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CheckboxControlledDemo";

const demoCode = `import { Button, Checkbox } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="small"
        label="Toggle the Checkbox"
        onClick={() => void setChecked(c => !c)}
      />
      <Checkbox
        label="Label"
        checked={checked}
        inputProps={{ id: "ch-box-2" }}
        onChange={() => void setChecked(c => !c)}
      />
    </React.Fragment>
  );
};

export default Demo;
`;

const CheckboxControlledDemo = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <Button
          variant="outlined"
          size="small"
          label="Toggle the Checkbox"
          onClick={() => void setChecked(c => !c)}
        />
        <Checkbox
          label="Label"
          checked={checked}
          inputProps={{ id: "ch-box-2" }}
          onChange={() => void setChecked(c => !c)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

CheckboxControlledDemo.displayName = componentName;

export default CheckboxControlledDemo;
