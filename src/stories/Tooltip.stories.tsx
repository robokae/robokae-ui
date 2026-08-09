import { Meta } from "@storybook/react-webpack5";
import { Tooltip } from "../components/tooltip";
import { ComponentProps } from "react";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Tooltip",
  argTypes: {
    content: {
      control: "text",
    },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    content: "Hint",
    position: "bottom",
  },
  render: ({ ...props }: ComponentProps<typeof Tooltip>) => (
    <div
      style={{
        width: "100%",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tooltip content={props.content} position={props.position}>
        Hover over me
      </Tooltip>
    </div>
  ),
};
