import { Meta } from "@storybook/react-webpack5";
import { Collapsible } from "../components/collapsible";
import { Card } from "../components/card";
import { ComponentProps } from "react";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: "Collapsible",
  argTypes: {
    animate: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {
    animate: true,
  },
  render: ({ animate }: ComponentProps<typeof Collapsible>) => (
    <Card style={{ width: "500px" }}>
      <Collapsible animate={animate} style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Collapsible.Heading as="h5">Heading</Collapsible.Heading>
          <Collapsible.Trigger />
        </div>
        <Collapsible.Content>
          <p>
            Wafer cheesecake sesame snaps cake shortbread chocolate cake. Powder
            muffin chocolate jelly beans danish macaroon carrot cake jelly. Cake
            jelly-o dragée macaroon lollipop.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </Card>
  ),
};
