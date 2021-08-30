import Column from "@sonnat/ui/Column";
import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnWrappingDemo";

const demoCode = `import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import * as React from "react";

const Demo: React.FC = () => {
  return (
    <Container>
      <Row>
        <Column all={8}>Column(8)</Column>
        <Column all={4}>Column(4)</Column>
        <Column all={12}>Column(12)</Column>
        <Column>Column(auto)</Column>
        <Column>Column(auto)</Column>
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
const ColumnWrappingDemo: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Container>
          <Row>
            <Column all={8} className={classes.col}>
              Column(8)
            </Column>
            <Column all={4} className={classes.col}>
              Column(4)
            </Column>
            <Column all={12} className={classes.col}>
              Column(12)
            </Column>
            <Column className={classes.col}>Column(auto)</Column>
            <Column className={classes.col}>Column(auto)</Column>
          </Row>
        </Container>
      </React.Fragment>
    </DemoBox>
  );
};

ColumnWrappingDemo.displayName = componentName;

export default ColumnWrappingDemo;
