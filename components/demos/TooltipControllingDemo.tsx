import Tooltip from "@sonnat/ui/Tooltip";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TooltipControllingDemo";

const demoCode = `import Tooltip from "@sonnat/ui/Tooltip";
import * as React from "react";

const TooltipControllingDemo = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Tooltip text="The informative text!" defaultOpen={true}>
        <small>uncontrolled</small>
      </Tooltip>
      <Tooltip
        text="The informative text!"
        open={isOpen}
        onOpen={() => void setOpen(true)}
        onClose={() => void setOpen(false)}
      >
        <small>controlled</small>
      </Tooltip>
    </React.Fragment>
  );
};

export default TooltipControllingDemo;`;

const TooltipControllingDemo = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <div className="demoSubject">
          <Tooltip text="The informative text!" defaultOpen={true}>
            <small>uncontrolled</small>
          </Tooltip>
        </div>
        <div className="demoSubject">
          <Tooltip
            text="The informative text!"
            open={isOpen}
            onOpen={() => void setOpen(true)}
            onClose={() => void setOpen(false)}
          >
            <small>controlled</small>
          </Tooltip>
        </div>
      </React.Fragment>
    </DemoBox>
  );
};

TooltipControllingDemo.displayName = componentName;

export default TooltipControllingDemo;
