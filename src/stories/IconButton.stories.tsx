import { ComponentProps } from "react";
import { IconButton } from "../components/button";
import { Meta, StoryObj } from "@storybook/react-webpack5";

type StoryProps = ComponentProps<typeof IconButton>;

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "IconButton",
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => <IconButton name="Cake" />,
};
