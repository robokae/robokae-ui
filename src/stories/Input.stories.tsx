import { Meta } from "@storybook/react-webpack5";
import Input from "../components/input/Input";
import Card from "../components/card";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  argTypes: {
    as: {
      control: "select",
      options: ["input", "textarea"],
    },
    resize: {
      control: "select",
      options: ["none", "both", "horizontal", "vertical"],
    },
    rows: {
      control: "number",
      if: { arg: "as", eq: "textarea" },
    },
  },
};

export default meta;

const Template = (args) => (
  <Card style={{ width: "500px" }}>
    <Input {...args} />
  </Card>
);

const defaultArgs = {
  as: "textarea",
  label: "Label",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
