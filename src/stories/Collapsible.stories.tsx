import { Meta } from "@storybook/react-webpack5";
import { Collapsible } from "../components/collapsible";
import { Card } from "../components/card";
import { Flex } from "../components/flex";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: "Collapsible",
  argTypes: {
    animate: {
      control: "boolean",
    },
  },
};

export default meta;

const Template = (args) => (
  <Card style={{ width: "500px" }}>
    <Collapsible animate={args.animate} style={{ width: "100%" }}>
      <Flex justifyContent="space-between">
        <Collapsible.Heading as="h5">Heading</Collapsible.Heading>
        <Collapsible.Trigger />
      </Flex>
      <Collapsible.Content>
        <p>
          Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
          muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
          jelly-o dragée macaroon lollipop.
        </p>
      </Collapsible.Content>
    </Collapsible>
  </Card>
);

const defaultArgs = {
  animate: true,
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
