import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "SelectSimpleDemo";

const demoCode = `import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;
import * as React from "react";

const children = [
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
];

const renderChildren = children => {
  return children.map(child => child);
};

const Demo = () => {
  return (
    <React.Fragment>
      <Select fluid placeholder="Placeholder">
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="Filled variant"
        variant="filled"
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="Searchable"
        searchable
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="Multiple"
        searchable
        multiple
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With searchable + multiple"
        searchable
        multiple
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="Disabled"
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With default value"
        defaultValue="kyle"
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With default value"
        defaultValue={["ali", "kyle"]}
        multiple
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With default value"
        defaultValue={["ali", "kyle"]}
        multiple
        disabled
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With default value + disabled"
        defaultValue="kyle"
        disabled
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With rounded + hasError"
        hasError
        rounded
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="With helperText"
        helperText="This is an informative helper text."
      >
        {renderChildren(children)}
      </Select>
      <Select
        fluid
        placeholder="Small"
        size="small"
      >
        {renderChildren(children)}
      </Select>
    </React.Fragment>
  );
};

export default Demo;`;

const children = [
  <SelectOption value="jack" key="k0">
    Jack
  </SelectOption>,
  <SelectOption value="asghar" key="k1">
    Asghar
  </SelectOption>,
  <SelectOption value="jolie" key="k2">
    Jolie
  </SelectOption>,
  <SelectOption value="kyle" key="k3">
    Kyle
  </SelectOption>,
  <SelectOption value="ali" key="k4">
    Ali
  </SelectOption>,
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
];

const renderChildren = (children: JSX.Element[]) => {
  return children.map(child => child);
};

const SelectSimpleDemo = () => {
  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Select fluid placeholder="Placeholder" className="demoSubject">
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="Filled variant"
          variant="filled"
          className="demoSubject"
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="Searchable"
          className="demoSubject"
          searchable
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="Multiple"
          className="demoSubject"
          searchable
          multiple
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With searchable + multiple"
          className="demoSubject"
          searchable
          multiple
        >
          {renderChildren(children)}
        </Select>
        <Select fluid placeholder="Disabled" disabled className="demoSubject">
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With default value"
          className="demoSubject"
          defaultValue="kyle"
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With default value"
          className="demoSubject"
          defaultValue={["ali", "kyle"]}
          multiple
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With default value"
          className="demoSubject"
          defaultValue={["ali", "kyle"]}
          multiple
          disabled
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With default value + disabled"
          className="demoSubject"
          defaultValue="kyle"
          disabled
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With rounded + hasError"
          className="demoSubject"
          hasError
          rounded
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          placeholder="With helperText"
          className="demoSubject"
          helperText="This is an informative helper text."
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          multiple
          placeholder="Large"
          className="demoSubject"
          size="large"
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          multiple
          placeholder="Medium (default)"
          className="demoSubject"
          size="medium"
        >
          {renderChildren(children)}
        </Select>
        <Select
          fluid
          multiple
          placeholder="Small"
          className="demoSubject"
          size="small"
        >
          {renderChildren(children)}
        </Select>
      </React.Fragment>
    </DemoBox>
  );
};

SelectSimpleDemo.displayName = componentName;

export default SelectSimpleDemo;
