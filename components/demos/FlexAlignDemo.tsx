import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexAlignDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo = () => {
  return (
    <React.Fragment>
      <Flex crossAxisAlignment="start">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex crossAxisAlignment="end">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex crossAxisAlignment="center">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex crossAxisAlignment="baseline">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex crossAxisAlignment="stretch">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
    </React.Fragment>
  );
};

export default Demo;
`;

const useStyles = makeStyles(
  ({
    colors,
    swatches,
    darkMode,
    spacings: { gutter, spaces },
    typography: { variants }
  }) => ({
    box: {
      width: "100%",
      height: 100,
      border: `1px solid ${colors.divider}`,
      backgroundColor: darkMode ? swatches.grey[900] : swatches.grey[100],
      "& + &": { marginTop: spaces[3].rem }
    },
    item: {
      ...variants.bodySmall,
      padding: gutter,
      border: `1px solid ${colors.divider}`,
      color: colors.text.primary,
      backgroundColor: darkMode ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.04)"
    }
  }),
  { name: componentName }
);

const FlexAlignDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox
      flexDirection="column"
      horizontalAlignment="start"
      verticalAlignment="start"
      code={demoCode}
    >
      <React.Fragment>
        <Flex className={classes.box} crossAxisAlignment="start">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} crossAxisAlignment="end">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} crossAxisAlignment="center">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} crossAxisAlignment="baseline">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} crossAxisAlignment="stretch">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexAlignDemo.displayName = componentName;

export default FlexAlignDemo;
