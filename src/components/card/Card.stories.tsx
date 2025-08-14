import { Meta } from "@storybook/react";
import { Card } from "./Card.styles";
import { Heading } from "../heading/Heading.styles";
import Button from "../button/Button";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Robokae/Card",
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
