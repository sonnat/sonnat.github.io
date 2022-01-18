import { Button, Snackbar } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SnackbarSimpleDemo";

const demoCode = `import { Button, Snackbar } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  const [isOpen, setOpen] = React.useState(false);
  
  return (
    <React.Fragment>
      <Button
        label="Toggle Snackbar"
        variant="outlined"
        size="small"
        onClick={() => void setOpen(o => !o)}
      />
      <Snackbar
        text="This is a snackbar!"
        open={isOpen}
        closable
        onClose={() => void setOpen(false)}
      />
    </React.Fragment>
  );
};

export default Demo;`;

const SnackbarSimpleDemo = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Button
          label="Toggle Snackbar"
          variant="outlined"
          size="small"
          onClick={() => void setOpen(o => !o)}
        />
        <Snackbar
          text="This is a snackbar!"
          open={isOpen}
          closable
          onClose={() => void setOpen(false)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

SnackbarSimpleDemo.displayName = componentName;

export default SnackbarSimpleDemo;
