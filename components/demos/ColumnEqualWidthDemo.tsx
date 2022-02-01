import { Column, Container, Divider, Row } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnEqualWidthDemo";

const demoCode = `import { Column, Container, Divider, Row } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  return (
    <Container>
      <Row>
        <Column>1 of 2</Column>
        <Column>2 of 2</Column>
      </Row>
      <Divider spaced />
      <Row>
        <Column>1 of 2</Column>
        <Column>2 of 2</Column>
        <Column>3 of 2</Column>
      </Row>
    </Container>
  );
};

export default Demo;
`;

const useStyles = makeStyles(
  ({
    darkMode,
    swatches,
    colors: { text, divider },
    spacings: { gutter },
    typography: { variants }
  }) => ({
    col: {
      ...variants.bodySmall,
      display: "flex",
      paddingTop: gutter,
      paddingBottom: gutter,
      color: !darkMode ? text.dark.primary : text.light.primary,
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${!darkMode ? divider.dark : divider.light}`,
      backgroundColor: darkMode ? swatches.grey[900] : swatches.grey[100]
    }
  }),
  { name: componentName }
);
const ColumnEqualWidthDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Container>
          <Row>
            <Column className={classes.col}>1 of 2</Column>
            <Column className={classes.col}>2 of 2</Column>
          </Row>
          <Divider spaced />
          <Row>
            <Column className={classes.col}>1 of 3</Column>
            <Column className={classes.col}>2 of 3</Column>
            <Column className={classes.col}>3 of 3</Column>
          </Row>
        </Container>
      </React.Fragment>
    </DemoBox>
  );
};

ColumnEqualWidthDemo.displayName = componentName;

export default ColumnEqualWidthDemo;
