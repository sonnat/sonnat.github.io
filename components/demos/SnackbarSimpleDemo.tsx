import Snackbar from "@sonnat/ui/Snackbar";
import Button from "@sonnat/ui/Button";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SnackbarSimpleDemo";

const demoCode = `import Snackbar from "@sonnat/ui/Snackbar";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const Demo: React.FC = () => {
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

const SnackbarSimpleDemo: React.FC = () => {
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
