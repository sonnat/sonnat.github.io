import makeStyles from "@sonnat/ui/styles/makeStyles";
import TabBar, { Tab } from "@sonnat/ui/TabBar";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TabSimpleScrollableDemo";

const demoCode = `import TabBar, { Tab } from "@sonnat/ui/TabBar";
import * as React from "react";

const defaultActiveTab = 0;
const content = {
  0: "The content of First Tab!",
  1: "The content of Second Tab!",
  2: "The content of Third Tab!",
  3: "The content of Fourth Tab!",
  4: "The content of Fifth Tab!",
  5: "The content of Sixth Tab!",
  6: "The content of Seventh Tab!"
};

const TabSimpleScrollableDemo = () => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);

  return (
    <React.Fragment>
      <TabBar
        defaultActiveTab={defaultActiveTab}
        onChange={identifier => void setActiveTab(identifier)}
      >
        <Tab label="First tab" />
        <Tab label="Second tab" />
        <Tab label="Third tab" />
        <Tab label="Fourth tab" />
        <Tab label="Fifth tab" />
        <Tab label="Sixth tab" />
        <Tab label="Seventh tab" />
      </TabBar>
      <div><small>{content[activeTab]}</small></div>
    </React.Fragment>
  );
};

export default TabSimpleScrollableDemo;
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
  2: "The content of Third Tab!",
  3: "The content of Fourth Tab!",
  4: "The content of Fifth Tab!",
  5: "The content of Sixth Tab!",
  6: "The content of Seventh Tab!"
};

const TabSimpleScrollableDemo = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = React.useState<string | number>(
    defaultActiveTab
  );

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <TabBar
          defaultActiveTab={defaultActiveTab}
          onChange={identifier => void setActiveTab(identifier)}
        >
          <Tab label="First tab" />
          <Tab label="Second tab" />
          <Tab label="Third tab" />
          <Tab label="Fourth tab" />
          <Tab label="Fifth tab" />
          <Tab label="Sixth tab" />
          <Tab label="Seventh tab" />
        </TabBar>
        <div className={classes.tabPanel}>
          <small>{content[activeTab as 0 | 1 | 2 | 3 | 4 | 5 | 6]}</small>
        </div>
      </React.Fragment>
    </DemoBox>
  );
};

TabSimpleScrollableDemo.displayName = componentName;

export default TabSimpleScrollableDemo;
