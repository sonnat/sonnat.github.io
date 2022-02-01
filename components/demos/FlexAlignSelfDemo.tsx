import Flex, { FlexItem } from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexAlignSelfDemo";

const demoCode = `import Flex, { FlexItem } from "@sonnat/ui/Flex";
import * as React from "react";

const Demo = () => {
  return (
    <React.Fragment>
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem crossAxisSelfAlignment="start">
          Self-aligned item
        </FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem crossAxisSelfAlignment="end">
          Self-aligned item
        </FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem crossAxisSelfAlignment="center">
          Self-aligned item
        </FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem crossAxisSelfAlignment="baseline">
          Self-aligned item
        </FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem crossAxisSelfAlignment="stretch">
          Self-aligned item
        </FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
    </React.Fragment>
  );
};

export default Demo;
`;

const useStyles = makeStyles(
  ({
    swatches,
    darkMode,
    colors: { text, divider },
    spacings: { gutter, spaces },
    typography: { variants }
  }) => ({
    box: {
      width: "100%",
      height: 100,
      border: `1px solid ${!darkMode ? divider.dark : divider.light}`,
      backgroundColor: darkMode ? swatches.grey[900] : swatches.grey[100],
      "& + &": { marginTop: spaces[3].rem }
    },
    item: {
      ...variants.bodySmall,
      padding: gutter,
      border: `1px solid ${!darkMode ? divider.dark : divider.light}`,
      color: !darkMode ? text.dark.primary : text.light.primary,
      backgroundColor: darkMode ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.04)"
    }
  }),
  { name: componentName }
);

const FlexAlignSelfDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox
      flexDirection="column"
      horizontalAlignment="start"
      verticalAlignment="start"
      code={demoCode}
    >
      <React.Fragment>
        <Flex className={classes.box}>
          <FlexItem className={classes.item}>Flex item</FlexItem>
          <FlexItem crossAxisSelfAlignment="start" className={classes.item}>
            Self-aligned item
          </FlexItem>
          <FlexItem className={classes.item}>Flex item</FlexItem>
        </Flex>
        <Flex className={classes.box}>
          <FlexItem className={classes.item}>Flex item</FlexItem>
          <FlexItem crossAxisSelfAlignment="end" className={classes.item}>
            Self-aligned item
          </FlexItem>
          <FlexItem className={classes.item}>Flex item</FlexItem>
        </Flex>
        <Flex className={classes.box}>
          <FlexItem className={classes.item}>Flex item</FlexItem>
          <FlexItem crossAxisSelfAlignment="center" className={classes.item}>
            Self-aligned item
          </FlexItem>
          <FlexItem className={classes.item}>Flex item</FlexItem>
        </Flex>
        <Flex className={classes.box}>
          <FlexItem className={classes.item}>Flex item</FlexItem>
          <FlexItem crossAxisSelfAlignment="baseline" className={classes.item}>
            Self-aligned item
          </FlexItem>
          <FlexItem className={classes.item}>Flex item</FlexItem>
        </Flex>
        <Flex className={classes.box}>
          <FlexItem className={classes.item}>Flex item</FlexItem>
          <FlexItem crossAxisSelfAlignment="stretch" className={classes.item}>
            Self-aligned item
          </FlexItem>
          <FlexItem className={classes.item}>Flex item</FlexItem>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexAlignSelfDemo.displayName = componentName;

export default FlexAlignSelfDemo;
