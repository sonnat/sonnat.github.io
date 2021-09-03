import Flex from "@sonnat/ui/Flex";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FlexAlignContentDemo";

const demoCode = `import Flex from "@sonnat/ui/Flex";
import * as React from "react";

const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="start"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="end"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="center"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="between"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="around"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="evenly"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
      <Flex
        wrap="wrap"
        mainAxisAlignment="start"
        contentAlignment="stretch"
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
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
      height: 150,
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
const FlexAlignContentDemo: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox
      flexDirection="column"
      horizontalAlignment="start"
      verticalAlignment="start"
      code={demoCode}
    >
      <React.Fragment>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="start"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="end"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="center"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="between"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="around"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="evenly"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
        <Flex
          wrap="wrap"
          className={classes.box}
          mainAxisAlignment="start"
          contentAlignment="stretch"
        >
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
          <div className={classes.item}>Flex item</div>
        </Flex>
      </React.Fragment>
    </DemoBox>
  );
};

FlexAlignContentDemo.displayName = componentName;

export default FlexAlignContentDemo;
