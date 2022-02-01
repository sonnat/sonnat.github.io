import makeStyles from "@sonnat/ui/styles/makeStyles";
import TabBar, { Tab } from "@sonnat/ui/TabBar";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TabSimpleFluidDemo";

const demoCode = `import TabBar, { Tab } from "@sonnat/ui/TabBar";
import * as React from "react";

const defaultActiveTab = 0;
const content = {
  0: "The content of First Tab!",
  1: "The content of Second Tab!",
  2: "The content of Third Tab!",
};

const TabSimpleFluidDemo = () => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);

  return (
    <React.Fragment>
      <TabBar
        variant="fluid"
        defaultActiveTab={defaultActiveTab}
        onChange={identifier => void setActiveTab(identifier)}
      >
        <Tab label="First tab" />
        <Tab label="Second tab" />
        <Tab label="Third tab" />
      </TabBar>
      <div><small>{content[activeTab]}</small></div>
    </React.Fragment>
  );
};

export default TabSimpleFluidDemo;
`;

const useStyles = makeStyles(
  ({ darkMode, colors: { divider }, spacings: { spaces } }) => ({
    tabPanel: {
      width: "100%",
      borderTop: `1px solid ${!darkMode ? divider.dark : divider.light}`,
      paddingTop: spaces[7].rem
    }
  }),
  { name: componentName }
);

const defaultActiveTab = 0;
const content = {
  0: "The content of First Tab!",
  1: "The content of Second Tab!",
  2: "The content of Third Tab!"
};

const TabSimpleFluidDemo = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = React.useState<number | string>(
    defaultActiveTab
  );

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <TabBar
          variant="fluid"
          defaultActiveTab={defaultActiveTab}
          onChange={identifier => void setActiveTab(identifier)}
        >
          <Tab label="First tab" />
          <Tab label="Second tab" />
          <Tab label="Third tab" />
        </TabBar>
        <div className={classes.tabPanel}>
          <small>{content[activeTab as 0 | 1 | 2]}</small>
        </div>
      </React.Fragment>
    </DemoBox>
  );
};

TabSimpleFluidDemo.displayName = componentName;

export default TabSimpleFluidDemo;
