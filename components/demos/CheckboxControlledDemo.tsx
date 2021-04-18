import Checkbox from "@sonnat/ui/Checkbox";
import Button from "@sonnat/ui/Button";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CheckboxControlledDemo";

const demoCode = `import Checkbox from "@sonnat/ui/Checkbox";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const Demo: React.FC = () => {
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

const CheckboxControlledDemo: React.FC = () => {
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
