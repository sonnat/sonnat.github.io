import Menu, { MenuItem } from "@sonnat/ui/Menu";
import Button from "@sonnat/ui/Button";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuWithBugWorkaroundDemo";

const demoCode = `import Menu, { MenuItem } from "@sonnat/ui/Menu";
import Button from "@sonnat/ui/Button";
import * as React from "react";

const MenuWithBugWorkaroundDemo: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef();

  const closeCallback = () => void setMenuOpen(false);

  return (
    <React.Fragment>
      <Button
        aria-controls="with-workaround-0"
        ref={anchorElement}
        size="small"
        variant="inlined"
        label="Toggle the menu"
        onClick={() => void setMenuOpen(o => !o)}
      />
      <Menu
        id="with-workaround-0"
        open={isMenuOpen}
        onOutsideClick={closeCallback}
        anchorNode={anchorElement.current}
      >
        <MenuItem onClick={closeCallback}>First item</MenuItem>
        <MenuItem onClick={closeCallback}>
          <span style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            Second item longwordlongwordlongword
          </span>
        </MenuItem>
        <MenuItem onClick={closeCallback}>Third item</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MenuWithBugWorkaroundDemo;
`;

const MenuWithBugWorkaroundDemo: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>();

  const closeCallback = () => void setMenuOpen(false);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        {/* @ts-ignore */}
        <Button
          aria-controls="with-workaround-0"
          ref={anchorElement}
          size="small"
          variant="inlined"
          label="Toggle the menu"
          onClick={() => void setMenuOpen(o => !o)}
        />
        <Menu
          id="with-workaround-0"
          open={isMenuOpen}
          onOutsideClick={closeCallback}
          anchorNode={anchorElement.current}
        >
          <MenuItem onClick={closeCallback}>First item</MenuItem>
          <MenuItem onClick={closeCallback}>
            <span style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
              Second item longwordlongwordlongword
            </span>
          </MenuItem>
          <MenuItem onClick={closeCallback}>Third item</MenuItem>
        </Menu>
      </React.Fragment>
    </DemoBox>
  );
};

MenuWithBugWorkaroundDemo.displayName = componentName;

export default MenuWithBugWorkaroundDemo;
