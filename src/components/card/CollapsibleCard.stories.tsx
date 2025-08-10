import { Meta } from "@storybook/react";
import { Heading } from "../heading/Heading.styles";
import CollapsibleCard from "./CollapsibleCard";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../config/theme";

const meta: Meta<typeof CollapsibleCard> = {
  component: CollapsibleCard,
  title: "Robokae/CollapsibleCard",
  decorators: [
    (Story, context) => (
      <ThemeProvider
        theme={
          context.parameters.backgrounds?.default === "dark"
            ? darkTheme
            : lightTheme
        }
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    heading: {
      control: "text",
    },
    collapse: {
      control: "boolean",
    },
  },
};

export default meta;

const Template = (args) => (
  <CollapsibleCard
    heading={args.heading}
    collapse={args.collapse}
    style={{ width: "500px" }}
  >
    <p>
      Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
      muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
      jelly-o dragée macaroon lollipop.
    </p>
  </CollapsibleCard>
);

const defaultArgs = {
  heading: "Card heading",
  collapse: false,
};

export const LightTheme = Template.bind({});
LightTheme.args = defaultArgs;

export const DarkTheme = Template.bind({});
DarkTheme.args = defaultArgs;

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
