import { Column, Container, Row } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnOffsettingDemo";

const demoCode = `import { Column, Container, Row } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  return (
    <Container>
      <Row>
        <Column all={{ size: 4 }}>
          Column(4)
        </Column>
        <Column all={{ size: 4, offset: 4 }}>
          Column(4) / Offset(4)
        </Column>
        <Column all={{ size: 6, offset: 3 }}>
          Column(6) / Offset(3)
        </Column>
      </Row>
    </Container>
  );
};

export default Demo;
`;

const useStyles = makeStyles(
  ({
    colors,
    darkMode,
    swatches,
    typography: { variants },
    spacings: { gutter }
  }) => ({
    col: {
      ...variants.bodySmall,
      display: "flex",
      paddingTop: gutter,
      paddingBottom: gutter,
      color: colors.text.primary,
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${colors.divider}`,
      backgroundColor: darkMode ? swatches.grey[900] : swatches.grey[100]
    }
  }),
  { name: componentName }
);
const ColumnOffsettingDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Container>
          <Row>
            <Column all={{ size: 4 }} className={classes.col}>
              Column(4)
            </Column>
            <Column all={{ size: 4, offset: 4 }} className={classes.col}>
              Column(4) / Offset(4)
            </Column>
            <Column all={{ size: 6, offset: 3 }} className={classes.col}>
              Column(6) / Offset(3)
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    </DemoBox>
  );
};

ColumnOffsettingDemo.displayName = componentName;

export default ColumnOffsettingDemo;
