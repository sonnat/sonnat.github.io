import Heart from "@sonnat/icons/Heart";
import { Divider, Tab, TabBar } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TabWithIconsDemo";

const demoCode = `<TabBar>
  <Tab label="Tab 1" {<Heart />} />
  <Tab label="Tab 2" icon={<Heart />} />
  <Tab label="Tab 3" icon={<Heart />} />
</TabBar>
<TabBar>
  <Tab icon={<Heart />} />
  <Tab icon={<Heart />} />
  <Tab icon={<Heart />} />
</TabBar>`;

const TabWithIconsDemo: React.FC = () => {
  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <TabBar>
          <Tab label="Tab 1" icon={<Heart />} />
          <Tab label="Tab 2" icon={<Heart />} />
          <Tab label="Tab 3" icon={<Heart />} />
        </TabBar>
        <Divider spaced />
        <TabBar>
          <Tab icon={<Heart />} />
          <Tab icon={<Heart />} />
          <Tab icon={<Heart />} />
        </TabBar>
      </React.Fragment>
    </DemoBox>
  );
};

TabWithIconsDemo.displayName = componentName;

export default TabWithIconsDemo;
