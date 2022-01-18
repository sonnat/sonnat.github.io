import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SelectControlledOpenDemo";

const demoCode = `import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;
import * as React from "react";

const Demo = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <React.Fragment>
      <Select
        open={open}
        onOpen={() => void setOpen(true)}
        onClose={() => void setOpen(false)}
        fluid
        placeholder="Placeholder"
      >
        <SelectOption value="jack" key="k0">Jack</SelectOption>,
        <SelectOption value="asghar" key="k1">Asghar</SelectOption>,
        <SelectOption value="jolie" key="k2">Jolie</SelectOption>,
        <SelectOption value="kyle" key="k3">Kyle</SelectOption>,
        <SelectOption value="ali" key="k4">Ali</SelectOption>,
        <SelectOptionGroup key="k5" title="Group 1">
          <SelectOption value="michael" key="k6">
            Michael
          </SelectOption>
          <SelectOption value="lucie" key="k7">
            Lucie
          </SelectOption>
          <SelectOption value="maria" key="k8">
            Maria
          </SelectOption>
          <SelectOption value="reza" key="k9">
            Reza
          </SelectOption>
          <SelectOption value="mostafa" key="k10">
            Mostafa
          </SelectOption>
        </SelectOptionGroup>
      </Select>
    </React.Fragment>
  );
};

export default Demo;`;

const SelectControlledOpenDemo = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Select
          open={open}
          onOpen={() => void setOpen(true)}
          onClose={() => void setOpen(false)}
          fluid
          placeholder="Placeholder"
        >
          <SelectOption value="jack" key="k0">
            Jack
          </SelectOption>
          <SelectOption value="asghar" key="k1">
            Asghar
          </SelectOption>
          <SelectOption value="jolie" key="k2">
            Jolie
          </SelectOption>
          <SelectOption value="kyle" key="k3">
            Kyle
          </SelectOption>
          <SelectOption value="ali" key="k4">
            Ali
          </SelectOption>
          <SelectOptionGroup key="k5" title="Group 1">
            <SelectOption value="michael" key="k6">
              Michael
            </SelectOption>
            <SelectOption value="lucie" key="k7">
              Lucie
            </SelectOption>
            <SelectOption value="maria" key="k8">
              Maria
            </SelectOption>
            <SelectOption value="reza" key="k9">
              Reza
            </SelectOption>
            <SelectOption value="mostafa" key="k10">
              Mostafa
            </SelectOption>
          </SelectOptionGroup>
        </Select>
      </React.Fragment>
    </DemoBox>
  );
};

SelectControlledOpenDemo.displayName = componentName;

export default SelectControlledOpenDemo;
