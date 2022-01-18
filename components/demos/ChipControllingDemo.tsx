import ChoiceChip from "@sonnat/ui/ChoiceChip";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ChipControllingDemo";

const demoCode = `import ChoiceChip from "@sonnat/ui/ChoiceChip";
import * as React from "react";

const ChipControllingDemo = () => {
  const [isSelected, setSelected] = React.useState(false);

  return (
    <React.Fragment>
      <ChoiceChip label="uncontrolled" defaultSelected={true} />
      <ChoiceChip
        label="controlled"
        selected={isSelected}
        onToggle={() => void setSelected(s => !s)}
      />
    </React.Fragment>
  );
};

export default ChipControllingDemo;`;

const ChipControllingDemo = () => {
  const [isSelected, setSelected] = React.useState(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <div className="demoSubject">
          <ChoiceChip label="uncontrolled" defaultSelected={true} />
        </div>
        <div className="demoSubject">
          <ChoiceChip
            label="controlled"
            selected={isSelected}
            onToggle={() => void setSelected(s => !s)}
          />
        </div>
      </React.Fragment>
    </DemoBox>
  );
};

ChipControllingDemo.displayName = componentName;

export default ChipControllingDemo;
