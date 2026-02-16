import { Meta } from "@storybook/react-webpack5";
import { Heading } from "../components/heading";
import { HeadingTag } from "../components/heading/Heading.types";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Heading",
};

export default meta;

const tags: HeadingTag[] = ["h1", "h2", "h3", "h4", "h5"];

const Template = () => (
  <>
    {tags.map((tag, index) => (
      <Heading as={tag} key={index}>
        {tag} heading
      </Heading>
    ))}
  </>
);

export const LightTheme = Template.bind({});

export const DarkTheme = Template.bind({});

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
