import { Meta } from "@storybook/react";
import { useTheme } from "styled-components";
import Flex from "./Flex";
import Card from "../card";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Flex",
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
    gap: {
      control: "string",
    },
  },
};

export default meta;

const Template = (args) => {
  const theme = useTheme();
  const items: React.ReactNode[] = [];

  for (let i = 0; i < 3; i++) {
    items.push(
      <div
        style={{
          backgroundColor: theme.background.primary,
          border: `1px solid ${theme.line}`,
          width: "75px",
          height: "75px",
        }}
      />
    );
  }

  return (
    <Card style={{ width: "500px" }}>
      <Flex
        direction={args.direction}
        justifyContent={args.justifyContent}
        alignItems={args.alignItems}
        gap={args.gap}
      >
        {items}
      </Flex>
    </Card>
  );
};

const defaultArgs = {
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
