import Column from "@sonnat/ui/Column";
import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnOrderingDemo";

const demoCode = `import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import * as React from "react";

const Demo: React.FC = () => {
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
  theme => ({
    col: {
      display: "flex",
      paddingTop: theme.typography.pxToRem(theme.spacings.gutter),
      paddingBottom: theme.typography.pxToRem(theme.spacings.gutter),
      lineHeight: 1.45,
      fontSize: theme.typography.pxToRem(14),
      color: theme.colors.text.primary,
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${theme.colors.divider}`,
      backgroundColor: theme.darkMode
        ? theme.colors.pallete.grey[900]
        : theme.colors.pallete.grey[100]
    }
  }),
  { name: componentName }
);
const ColumnOrderingDemo: React.FC = () => {
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
