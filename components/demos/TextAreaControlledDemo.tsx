import TextArea from "@sonnat/ui/TextArea";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TextAreaControlledDemo";

const demoCode = `import TextArea from "@sonnat/ui/TextArea";
import * as React from "react";

const Demo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <React.Fragment>
      <TextArea
        value={value}
        onChange={e => void setValue(e.target.value)}
      />
      <span>The value is {\`"\${value}"\`}</span>
    </React.Fragment>
  );
};

export default Demo;
`;

const TextAreaControlledDemo: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <TextArea value={value} onChange={e => void setValue(e.target.value)} />
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

TextAreaControlledDemo.displayName = componentName;

export default TextAreaControlledDemo;
