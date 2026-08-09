import { Meta } from "@storybook/react-webpack5";
import { Input } from "../components/input";
import { ComponentProps } from "react";

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

export const Default = {
  args: {
    as: "textarea",
    label: "Label",
    leftSublabel: "",
    rightSublabel: "",
    errorMessage: "",
  },
  render: ({ ...props }: ComponentProps<typeof Input>) => (
    <div style={{ width: "500px" }}>
      <Input {...props} />
    </div>
  ),
};
