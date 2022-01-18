import { Button, Radio } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "RadioControlledDemo";

const demoCode = `import { Button, Radio } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
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

const RadioControlledDemo = () => {
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
