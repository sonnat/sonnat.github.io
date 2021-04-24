import TextField from "@sonnat/ui/TextField";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TextFieldControlledDemo";

const demoCode = `import TextField from "@sonnat/ui/TextField";
import * as React from "react";

const Demo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <TextField
        value={value}
        onChange={e => void setValue(e.target.value)}
        legendLabel="Label"
      />
      <span>The value is {\`"\${value}"\`}</span>
    </React.Fragment>
  );
};

export default Demo;
`;

const TextFieldControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <TextField
          value={value}
          onChange={e => void setValue(e.target.value)}
          legendLabel="Label"
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
