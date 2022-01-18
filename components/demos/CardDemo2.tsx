import { DotsVertical, Heart } from "@sonnat/icons";
import {
  Button,
  Card,
  CardActionableArea,
  CardActionBar,
  CardBody,
  CardHeader,
  CardMedia,
  IconButton,
  Image,
  Text
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "CardDemo2";

const demoCode = `<Card variant="outlined">
  <CardHeader
    action={
      <IconButton
        variant="inlined"
        icon={<DotsVertical />}
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
      <Text variant="body" as="p" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
        doloribus molestiae fugit molestias.
      </Text>
    </CardBody>
  </CardActionableArea>
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
</Card>`;

const useStyles = makeStyles(({ typography: { pxToRem } }) => ({
  root: { maxWidth: pxToRem(300) }
}));

const CardDemo2 = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          action={
            <IconButton
              variant="inlined"
              icon={<DotsVertical />}
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
            <Text variant="body" as="p" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              doloribus molestiae fugit molestias.
            </Text>
          </CardBody>
        </CardActionableArea>
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
      </Card>
    </DemoBox>
  );
};

CardDemo2.displayName = componentName;

export default CardDemo2;
