import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexWrapDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo: React.FC = () => {
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
  theme => ({
    box: {
      width: "100%",
      border: `1px solid ${theme.colors.divider}`,
      backgroundColor: theme.darkMode
        ? theme.colors.pallete.grey[900]
        : theme.colors.pallete.grey[100],
      "& + &": { marginTop: theme.typography.pxToRem(8) }
    },
    nowrapBox: {
      extend: "box",
      width: 100,
      marginBottom: theme.typography.pxToRem(8)
    },
    item: {
      padding: theme.typography.pxToRem(theme.spacings.gutter),
      lineHeight: 1.45,
      fontSize: theme.typography.pxToRem(14),
      border: `1px solid ${theme.colors.divider}`,
      color: theme.colors.text.primary,
      backgroundColor: theme.darkMode
        ? "rgba(0, 0, 0, 0.25)"
        : "rgba(0, 0, 0, 0.04)"
    }
  }),
  { name: componentName }
);
const FlexWrapDemo: React.FC = () => {
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
