import Column from "@sonnat/ui/Column";
import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "ColumnOffsettingDemo";

const demoCode = `import Container from "@sonnat/ui/Container";
import Row from "@sonnat/ui/Row";
import Column from "@sonnat/ui/Column";
import * as React from "react";

const Demo: React.FC = () => {
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
const ColumnOffsettingDemo: React.FC = () => {
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
