import Card, {
  CardBody,
  CardHeader,
  CardMedia,
  CardActionBar
} from "@sonnat/ui/Card";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Image from "@sonnat/ui/Image";
import DotsVertical from "@sonnat/icons/DotsVertical";
import DemoBox from "components/DemoBox";
import * as React from "react";
import Button from "@sonnat/ui/Button";
import Text from "@sonnat/ui/Text";
import { Heart } from "@sonnat/icons";

const componentName = "CardDemo1";

const demoCode = `<Card>
  <CardMedia>
    <Image
      src="https://picsum.photos/300/200?random=1"
      alt="Random Image"
      layout="responsive"
      width="300"
      height="200"
    />
  </CardMedia>
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
  <CardBody>
    <Text variant="body" rootNode="p" color="textSecondary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
      doloribus molestiae fugit molestias.
    </Text>
  </CardBody>
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

const CardDemo1: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Card className={classes.root}>
        <CardMedia>
          <Image
            src="https://picsum.photos/300/200?random=1"
            alt="Random Image"
            layout="responsive"
            width="300"
            height="200"
          />
        </CardMedia>
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
        <CardBody>
          <Text variant="body" rootNode="p" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            doloribus molestiae fugit molestias.
          </Text>
        </CardBody>
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

CardDemo1.displayName = componentName;

export default CardDemo1;
