import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexWrapDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo = () => {
  return (
    <React.Fragment>
      <Flex>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex wrap="wrap">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
        <div>Flex item 4</div>
        <div>Flex item 5</div>
        <div>Flex item 6</div>
        <div>Flex item 7</div>
        <div>Flex item 8</div>
        <div>Flex item 9</div>
        <div>Flex item 10</div>
        <div>Flex item 11</div>
        <div>Flex item 12</div>
      </Flex>
      <Flex wrap="wrap-reverse">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
        <div>Flex item 4</div>
        <div>Flex item 5</div>
        <div>Flex item 6</div>
        <div>Flex item 7</div>
        <div>Flex item 8</div>
        <div>Flex item 9</div>
        <div>Flex item 10</div>
        <div>Flex item 11</div>
        <div>Flex item 12</div>
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
      border: `1px solid ${colors.divider}`,
      backgroundColor: darkMode ? swatches.grey[900] : swatches.grey[100],
      "& + &": { marginTop: spaces[3].rem }
    },
    nowrapBox: {
      extend: "box",
      width: 100,
      marginBottom: spaces[3].rem
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
const FlexWrapDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox
      flexDirection="column"
      horizontalAlignment="start"
      verticalAlignment="start"
      code={demoCode}
    >
      <React.Fragment>
        <Flex className={classes.nowrapBox}>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex wrap="wrap" className={classes.box}>
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
          <div className={classes.item}>Flex item 4</div>
          <div className={classes.item}>Flex item 5</div>
          <div className={classes.item}>Flex item 6</div>
          <div className={classes.item}>Flex item 7</div>
          <div className={classes.item}>Flex item 8</div>
          <div className={classes.item}>Flex item 9</div>
          <div className={classes.item}>Flex item 10</div>
          <div className={classes.item}>Flex item 11</div>
          <div className={classes.item}>Flex item 12</div>
        </Flex>
        <Flex wrap="wrap-reverse" className={classes.box}>
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
          <div className={classes.item}>Flex item 4</div>
          <div className={classes.item}>Flex item 5</div>
          <div className={classes.item}>Flex item 6</div>
          <div className={classes.item}>Flex item 7</div>
          <div className={classes.item}>Flex item 8</div>
          <div className={classes.item}>Flex item 9</div>
          <div className={classes.item}>Flex item 10</div>
          <div className={classes.item}>Flex item 11</div>
          <div className={classes.item}>Flex item 12</div>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexWrapDemo.displayName = componentName;

export default FlexWrapDemo;
