import { Column, Container, Row } from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnOrderingDemo";

const demoCode = `import { Column, Container, Row } from "@sonnat/ui";
import * as React from "react";

const Demo = () => {
  return (
    <Container>
      <Row>
        <Column>
          First element with no order applied
        </Column>
        <Column all={{ order: 5 }}>
          Second element with a larger order
        </Column>
        <Column all={{ order: 1 }}>
          Third element with a smaller order
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
const ColumnOrderingDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Container>
          <Row>
            <Column className={classes.col}>
              First element with no order applied
            </Column>
            <Column all={{ order: 5 }} className={classes.col}>
              Second element with a larger order
            </Column>
            <Column all={{ order: 1 }} className={classes.col}>
              Third element with a smaller order
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    </DemoBox>
  );
};

ColumnOrderingDemo.displayName = componentName;

export default ColumnOrderingDemo;
