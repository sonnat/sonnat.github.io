import { Heart } from "@sonnat/icons";
import {
  Button,
  Card,
  CardActionBar,
  CardBody,
  CardHeader,
  IconButton,
  Text
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CardDemo3";

const demoCode = `import { Heart } from "@sonnat/icons";
import {
  Button,
  Card,
  CardActionBar,
  CardBody,
  CardHeader,
  IconButton,
  Text
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    [breakpoints.down("sm")]: { flexDirection: "column" }
  }
}));

const Demo: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader style={{ flexShrink: 0 }}>
        <Text display="block" variant="subtitle">
          This is the title
        </Text>
        <Text display="block" variant="caption" color="textSecondary">
          This is the subtitle
        </Text>
      </CardHeader>
      <div>
        <CardBody>
          <Text variant="body" as="p" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            doloribus molestiae fugit molestias.
          </Text>
        </CardBody>
        <CardActionBar>
          <Button label="Action 1" variant="inlined" />
          <Button label="Action 2" variant="inlined" />
          <IconButton
            style={{ marginLeft: "auto" }}
            icon={<Heart />}
            variant="inlined"
            aria-label="Demo Button"
          />
        </CardActionBar>
      </div>
    </Card>
  );
};

export default Demo;
`;

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    [breakpoints.down("sm")]: { flexDirection: "column" }
  }
}));

const CardDemo3 = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Card className={classes.root}>
        <CardHeader style={{ flexShrink: 0 }}>
          <Text display="block" variant="subtitle">
            This is the title
          </Text>
          <Text display="block" variant="caption" color="textSecondary">
            This is the subtitle
          </Text>
        </CardHeader>
        <div>
          <CardBody>
            <Text variant="body" as="p" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              doloribus molestiae fugit molestias.
            </Text>
          </CardBody>
          <CardActionBar>
            <Button label="Action 1" variant="inlined" />
            <Button label="Action 2" variant="inlined" />
            <IconButton
              style={{ marginLeft: "auto" }}
              icon={<Heart />}
              variant="inlined"
              aria-label="Demo Button"
            />
          </CardActionBar>
        </div>
      </Card>
    </DemoBox>
  );
};

CardDemo3.displayName = componentName;

export default CardDemo3;
