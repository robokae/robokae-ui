import { Meta } from "@storybook/react";
import { Heading } from "./Heading.styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../config/theme";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Robokae/Heading",
};

export default meta;

const tags = ["h1", "h2", "h3", "h4", "h5"];

export const LightTheme = () => (
  <ThemeProvider theme={lightTheme}>
    {tags.map((tag, index) => (
      <Heading as={tag} key={index}>
        {tag} heading
      </Heading>
    ))}
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider theme={darkTheme}>
    {tags.map((tag, index) => (
      <Heading as={tag} key={index}>
        {tag} heading
      </Heading>
    ))}
  </ThemeProvider>
);

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
