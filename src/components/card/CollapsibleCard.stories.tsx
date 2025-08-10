import { Meta } from "@storybook/react";
import { Heading } from "../heading/Heading.styles";
import CollapsibleCard from "./CollapsibleCard";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../config/theme";

const meta: Meta<typeof CollapsibleCard> = {
  component: CollapsibleCard,
  title: "Robokae/CollapsibleCard",
};

export default meta;

export const LightTheme = () => (
  <ThemeProvider theme={lightTheme}>
    <CollapsibleCard heading="Card heading" style={{ width: "500px" }}>
      <p>
        Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
        muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
        jelly-o dragée macaroon lollipop.
      </p>
    </CollapsibleCard>
  </ThemeProvider>
);

export const DarkTheme = () => (
  <ThemeProvider theme={darkTheme}>
    <CollapsibleCard heading="Card heading" style={{ width: "500px" }}>
      <p>
        Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
        muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
        jelly-o dragée macaroon lollipop.
      </p>
    </CollapsibleCard>
  </ThemeProvider>
);

DarkTheme.parameters = {
  backgrounds: { default: "dark" },
};
