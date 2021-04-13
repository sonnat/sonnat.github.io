import Menu, { MenuItem } from "@sonnat/ui/Menu";
import Button from "@sonnat/ui/Button";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuOutsideClickDemo";

const demoCode = `import Menu, { MenuItem } from "@sonnat/ui/Menu";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const MenuOutsideClickDemo: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef();

  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu-2"
        ref={anchorElement}
        size="small"
        variant="inlined"
        label="Toggle the menu"
        onClick={() => void setMenuOpen(o => !o)}
      />
      <Menu
        id="simple-menu-2"
        open={isMenuOpen}
        anchorNode={anchorElement.current}
        onOutsideClick={() => void setMenuOpen(false)}
      >
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>Third item</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuOutsideClickDemo;
`;

const MenuOutsideClickDemo: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        {/* @ts-ignore */}
        <Button
          aria-controls="simple-menu-2"
          ref={anchorElement}
          size="small"
          variant="inlined"
          label="Toggle the menu"
          onClick={() => void setMenuOpen(o => !o)}
        />
        <Menu
          id="simple-menu-2"
          open={isMenuOpen}
          anchorNode={anchorElement.current}
          onOutsideClick={() => void setMenuOpen(false)}
        >
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Third item</MenuItem>
        </Menu>
      </React.Fragment>
    </DemoBox>
  );
};

MenuOutsideClickDemo.displayName = componentName;

export default MenuOutsideClickDemo;
