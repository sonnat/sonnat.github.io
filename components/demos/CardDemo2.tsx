import { Heart } from "@sonnat/icons";
import DotsVertical from "@sonnat/icons/DotsVertical";
import Button from "@sonnat/ui/Button";
import Card, {
  CardActionableArea,
  CardActionBar,
  CardBody,
  CardHeader,
  CardMedia
} from "@sonnat/ui/Card";
import Image from "@sonnat/ui/Image";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CardDemo2";

const demoCode = `<Card>
  <CardHeader
    action={
      <Button
        variant="inlined"
        leadingIcon={<DotsVertical />}
        aria-label="Demo Button"
      />
    }
  >
    <Text variant="subtitle">This is the header</Text>
  </CardHeader>
  <CardActionableArea aria-label="Card's Actionable Area">
    <CardMedia>
      <Image
        src="https://picsum.photos/300/200?random=1"
        alt="Random Image"
        layout="responsive"
        width="300"
        height="200"
      />
    </CardMedia>
    <CardBody>
      <Text variant="body" rootNode="p" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
        doloribus molestiae fugit molestias.
      </Text>
    </CardBody>
  </CardActionableArea>
  <CardActionBar>
    <Button label="Action 1" variant="inlined" />
    <Button label="Action 2" variant="inlined" />
    <Button
      style={{ marginLeft: "auto" }}
      leadingIcon={<Heart />}
      variant="inlined"
      aria-label="Demo Button"
    />
  </CardActionBar>
</Card>`;

const useStyles = makeStyles(theme => {
  const {
    typography: { pxToRem }
  } = theme;

  return {
    root: {
      maxWidth: pxToRem(300)
    }
  };
});

const CardDemo2: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Button
              variant="inlined"
              leadingIcon={<DotsVertical />}
              aria-label="Demo Button"
            />
          }
        >
          <Text variant="subtitle">This is the header</Text>
        </CardHeader>
        <CardActionableArea aria-label="Card's Actionable Area">
          <CardMedia>
            <Image
              src="https://picsum.photos/300/200?random=1"
              alt="Random Image"
              layout="responsive"
              width="300"
              height="200"
            />
          </CardMedia>
          <CardBody>
            <Text variant="body" rootNode="p" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              doloribus molestiae fugit molestias.
            </Text>
          </CardBody>
        </CardActionableArea>
        <CardActionBar>
          <Button label="Action 1" variant="inlined" />
          <Button label="Action 2" variant="inlined" />
          <Button
            style={{ marginLeft: "auto" }}
            leadingIcon={<Heart />}
            variant="inlined"
            aria-label="Demo Button"
          />
        </CardActionBar>
      </Card>
    </DemoBox>
  );
};

CardDemo2.displayName = componentName;

export default CardDemo2;
