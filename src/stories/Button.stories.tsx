import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "../components/button";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
  label: string;
};

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outline", "plain"],
    },
    rounded: {
      control: "boolean",
    },
    arrow: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<StoryProps>;

const LABEL = "Click me";

export const Filled: Story = {
  args: {
    label: LABEL,
    rounded: false,
    arrow: false,
    disabled: false,
  },
  render: ({ label, ...args }: StoryProps) => (
    <Button variant="filled" {...args}>
      {label}
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    label: LABEL,
    rounded: false,
    arrow: false,
    disabled: false,
  },
  render: ({ label, ...args }: StoryProps) => (
    <Button variant="outline" {...args}>
      {label}
    </Button>
  ),
};

export const Plain: Story = {
  args: {
    label: LABEL,
    rounded: false,
    arrow: false,
    disabled: false,
  },
  render: ({ label, ...args }: StoryProps) => (
    <Button {...args}>{label}</Button>
  ),
};
