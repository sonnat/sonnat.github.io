import { Button, Menu, MenuItem } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuSimpleDemo";

const demoCode = `import { Button, Menu, MenuItem } from "@sonnat/ui";
import * as React from "react";

const MenuSimpleDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef();

  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu-1"
        ref={anchorElement}
        size="small"
        variant="inlined"
        label="Toggle the menu"
        onClick={() => void setMenuOpen(o => !o)}
      />
      <Menu
        id="simple-menu-1"
        open={isMenuOpen}
        anchorNodeReference={anchorElement}
      >
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuSimpleDemo;
`;

const MenuSimpleDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>(null);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Button
          aria-controls="simple-menu-1"
          ref={anchorElement}
          size="small"
          variant="inlined"
          label="Toggle the menu"
          onClick={() => void setMenuOpen(o => !o)}
        />
        <Menu
          id="simple-menu-1"
          open={isMenuOpen}
          anchorNodeReference={anchorElement}
        >
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Third item</MenuItem>
        </Menu>
      </React.Fragment>
    </DemoBox>
  );
};

MenuSimpleDemo.displayName = componentName;

export default MenuSimpleDemo;
