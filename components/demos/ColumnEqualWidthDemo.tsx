import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import Divider from "@sonnat/ui/Divider";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnEqualWidthDemo";

const demoCode = `import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import Divider from "@sonnat/ui/Divider";
import * as React from "react";

const Demo: React.FC = () => {
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
const ColumnEqualWidthDemo: React.FC = () => {
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
