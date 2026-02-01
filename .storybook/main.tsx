import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
