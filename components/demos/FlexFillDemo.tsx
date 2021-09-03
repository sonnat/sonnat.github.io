import Flex, { FlexItem } from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexFillDemo";

const demoCode = `import Flex, { FlexItem } from "@sonnat/ui/Flex";
import * as React from "react";

const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Flex>
        <FlexItem fill>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil
          ut, sint quaerat quam consequatur cumque cum totam voluptates eum
          fugit beatae porro at doloremque numquam maxime sequi suscipit ea.
        </FlexItem>
        <FlexItem fill>Flex item</FlexItem>
        <FlexItem fill>Flex item</FlexItem>
        <FlexItem fill>Flex item</FlexItem>
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
const FlexFillDemo: React.FC = () => {
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
          <FlexItem fill className={classes.item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil
            ut, sint quaerat quam consequatur cumque cum totam voluptates eum
            fugit beatae porro at doloremque numquam maxime sequi suscipit ea.
          </FlexItem>
          <FlexItem fill className={classes.item}>
            Flex item
          </FlexItem>
          <FlexItem fill className={classes.item}>
            Flex item
          </FlexItem>
          <FlexItem fill className={classes.item}>
            Flex item
          </FlexItem>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexFillDemo.displayName = componentName;

export default FlexFillDemo;
