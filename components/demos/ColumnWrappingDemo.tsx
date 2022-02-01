import { Column, Container, Row } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnWrappingDemo";

const demoCode = `import { Column, Container, Row } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  return (
    <Container>
      <Row>
        <Column all={9}>Column(9)</Column>
        <Column all={4}>Column(4)</Column>
        <Column all={6}>Column(6)</Column>
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
    typography: { variants },
    spacings: { gutter }
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
const ColumnWrappingDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Container>
          <Row>
            <Column all={9} className={classes.col}>
              Column(9)
            </Column>
            <Column all={4} className={classes.col}>
              Column(4)
            </Column>
            <Column all={6} className={classes.col}>
              Column(6)
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    </DemoBox>
  );
};

ColumnWrappingDemo.displayName = componentName;

export default ColumnWrappingDemo;
