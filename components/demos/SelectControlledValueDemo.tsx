import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SelectControlledValueDemo";

const demoCode = `import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;
import * as React from "react";

const Demo = () => {
  const [value, setValue] = React.useState("");
  
  return (
    <React.Fragment>
      <Select
        value={value}
        onChange={v => void setValue(v)}
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

const SelectControlledValueDemo = () => {
  const [value, setValue] = React.useState("");

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Select
          value={value}
          onChange={v => void setValue(v as string)}
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

SelectControlledValueDemo.displayName = componentName;

export default SelectControlledValueDemo;
