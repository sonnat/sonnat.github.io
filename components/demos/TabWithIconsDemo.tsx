import TabBar, { Tab } from "@sonnat/ui/TabBar";
import Divider from "@sonnat/ui/Divider";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TabWithIconsDemo";

const demoCode = `<TabBar>
  <Tab label="Tab 1" icon="heart" />
  <Tab label="Tab 2" icon="heart" />
  <Tab label="Tab 3" icon="heart" />
</TabBar>
<TabBar>
  <Tab icon="heart" />
  <Tab icon="heart" />
  <Tab icon="heart" />
</TabBar>`;

const TabWithIconsDemo: React.FC = () => {
  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <TabBar>
          <Tab label="Tab 1" icon="heart" />
          <Tab label="Tab 2" icon="heart" />
          <Tab label="Tab 3" icon="heart" />
        </TabBar>
        <Divider spaced />
        <TabBar>
          <Tab icon="heart" />
          <Tab icon="heart" />
          <Tab icon="heart" />
        </TabBar>
      </React.Fragment>
    </DemoBox>
  );
};

TabWithIconsDemo.displayName = componentName;

export default TabWithIconsDemo;
