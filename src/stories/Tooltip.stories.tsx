import { Meta } from "@storybook/react-webpack5";
import { Tooltip } from "../components/tooltip";
import { Card } from "../components/card";

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

const Template = (args) => {
  return (
    <Card style={{ width: "500px", height: "300px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Tooltip content={args.content} position={args.position}>
          <p>Hover over me</p>
        </Tooltip>
      </div>
    </Card>
  );
};

const defaultArgs = {
  content: "Hint",
  position: "bottom",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
