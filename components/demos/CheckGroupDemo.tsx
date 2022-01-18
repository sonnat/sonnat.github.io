import { Checkbox, CheckGroup } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CheckGroupDemo";

const demoCode = `import { Checkbox, CheckGroup } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  const [values, setValues] = React.useState([]);

  return (
    <React.Fragment>
      <CheckGroup
        value={values}
        onChange={selectedValues => void setValues(selectedValues)}
      >
        <Checkbox label="Ali" value="Ali" />
        <Checkbox label="David" value="David" />
        <Checkbox label="Mostafa" value="Mostafa" />
        <Checkbox label="Jacob" value="Jacob" />
        <Checkbox label="Mehdi" value="Mehdi" />
      </CheckGroup>
      {values.length > 0 && (
        <small>{values.join(", ")}</small>
      )}
    </React.Fragment>
  );
};

export default Demo;
`;

const CheckGroupDemo = () => {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <CheckGroup
          value={values}
          onChange={selectedValues => void setValues(selectedValues)}
        >
          <Checkbox label="Ali" value="Ali" />
          <Checkbox label="David" value="David" />
          <Checkbox label="Mostafa" value="Mostafa" />
          <Checkbox label="Jacob" value="Jacob" />
          <Checkbox label="Mehdi" value="Mehdi" />
        </CheckGroup>
        {values.length > 0 && (
          <React.Fragment>
            <div
              style={{
                width: 32,
                borderTop: "1px solid #ddd",
                paddingTop: 16,
                marginTop: 16
              }}
            ></div>
            <small>{values.join(", ")}</small>
          </React.Fragment>
        )}
      </React.Fragment>
    </DemoBox>
  );
};

CheckGroupDemo.displayName = componentName;

export default CheckGroupDemo;
