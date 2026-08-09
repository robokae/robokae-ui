import { Meta } from "@storybook/react-webpack5";
import { Icon } from "../components/icon";
import { ComponentProps } from "react";
import * as bootstrapIcons from "react-bootstrap-icons";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(bootstrapIcons),
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

export const Default = {
  args: {
    name: "Book",
    size: "md",
  },
  render: ({ ...props }: ComponentProps<typeof Icon>) => <Icon {...props} />,
};
