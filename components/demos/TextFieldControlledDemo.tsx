import TextField from "@sonnat/ui/TextField";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TextFieldControlledDemo";

const demoCode = `import TextField from "@sonnat/ui/TextField";
import * as React from "react";

const Demo = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <TextField
        value={value}
        inputProps={{ "aria-label": "Label" }}
        onChange={v => void setValue(v)}
      />
      <span>The value is {\`"\${value}"\`}</span>
    </React.Fragment>
  );
};

export default Demo;
`;

const TextFieldControlledDemo = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <TextField
          value={value}
          inputProps={{ "aria-label": "Label" }}
          onChange={v => void setValue(v)}
        />
        <span
          style={{ marginTop: 16, whiteSpace: "pre-wrap", textAlign: "center" }}
        >
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

TextFieldControlledDemo.displayName = componentName;

export default TextFieldControlledDemo;
