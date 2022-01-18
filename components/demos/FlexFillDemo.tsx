import Flex, { FlexItem } from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexFillDemo";

const demoCode = `import Flex, { FlexItem } from "@sonnat/ui/Flex";
import * as React from "react";

const Demo = () => {
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
const FlexFillDemo = () => {
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
