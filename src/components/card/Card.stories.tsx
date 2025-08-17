import { Meta } from "@storybook/react";
import Button from "../button";
import Heading from "../heading";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default meta;

const Template = () => (
  <Card style={{ width: "500px" }}>
    <Heading as="h5">Card heading</Heading>
    <p>
      Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
      muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
      jelly-o dragée macaroon lollipop.
    </p>
    <Button style={{ width: "max-content" }} variant="filled" arrow>
      Click me
    </Button>
  </Card>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
