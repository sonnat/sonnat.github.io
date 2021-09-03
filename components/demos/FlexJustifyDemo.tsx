import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexJustifyDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Flex mainAxisAlignment="start">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex mainAxisAlignment="end">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex mainAxisAlignment="center">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex mainAxisAlignment="between">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex mainAxisAlignment="around">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex mainAxisAlignment="evenly">
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
  theme => ({
    box: {
      width: "100%",
      border: `1px solid ${theme.colors.divider}`,
      backgroundColor: theme.darkMode
        ? theme.colors.pallete.grey[900]
        : theme.colors.pallete.grey[100],
      "& + &": { marginTop: theme.typography.pxToRem(8) }
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
const FlexJustifyDemo: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox
      flexDirection="column"
      horizontalAlignment="start"
      verticalAlignment="start"
      code={demoCode}
    >
      <React.Fragment>
        <Flex className={classes.box} mainAxisAlignment="start">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} mainAxisAlignment="end">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} mainAxisAlignment="center">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} mainAxisAlignment="between">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} mainAxisAlignment="around">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} mainAxisAlignment="evenly">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexJustifyDemo.displayName = componentName;

export default FlexJustifyDemo;
