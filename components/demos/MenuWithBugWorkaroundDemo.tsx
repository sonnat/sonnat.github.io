import { Button, Menu, MenuItem } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "MenuWithBugWorkaroundDemo";

const demoCode = `import { Button, Menu, MenuItem } from "@sonnat/ui";
import * as React from "react";

const MenuWithBugWorkaroundDemo = () => {
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
        maxWidth="anchorWidth"
        onOutsideClick={closeCallback}
        anchorNodeReference={anchorElement}
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

const MenuWithBugWorkaroundDemo = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const anchorElement = React.useRef<HTMLButtonElement>(null);

  const closeCallback = () => void setMenuOpen(false);

  return (
    <DemoBox code={demoCode}>
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
          maxWidth="anchorWidth"
          open={isMenuOpen}
          onOutsideClick={closeCallback}
          anchorNodeReference={anchorElement}
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
