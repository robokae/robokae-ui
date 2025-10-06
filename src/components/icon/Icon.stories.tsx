import { Meta } from "@storybook/react-webpack5";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(require("react-bootstrap-icons")),
      description: "Icon name",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: "color",
    },
  },
};

export default meta;

const Template = (args) => <Icon {...args} />;

const defaultArgs = {
  name: "Book",
  size: "md",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
