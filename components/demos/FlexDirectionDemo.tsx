import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexDirectionDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Flex>
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex direction="row-reverse">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex direction="column">
        <div>Flex item 1</div>
        <div>Flex item 2</div>
        <div>Flex item 3</div>
      </Flex>
      <Flex direction="column-reverse">
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
const FlexDirectionDemo: React.FC = () => {
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
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} direction="row-reverse">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} direction="column">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
        <Flex className={classes.box} direction="column-reverse">
          <div className={classes.item}>Flex item 1</div>
          <div className={classes.item}>Flex item 2</div>
          <div className={classes.item}>Flex item 3</div>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexDirectionDemo.displayName = componentName;

export default FlexDirectionDemo;
