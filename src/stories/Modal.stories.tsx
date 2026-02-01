import { ComponentProps } from "react";
import Modal from "../components/modal/Modal";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "../components/button/Button";

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
};

export default meta;
type Story = StoryObj<StoryProps>;

export const WithOverlay: Story = {
  render: ({ ...args }: StoryProps) => {
    return (
      <>
        <Modal>
          <Modal.Trigger>
            <Button>Open modal</Button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>Modal</Modal.Header>
            <p>hello</p>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const NoOverlay: Story = {
  render: ({ ...args }: StoryProps) => {
    return (
      <>
        <Modal overlay={false}>
          <Modal.Trigger>
            <Button>Open modal</Button>
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>Modal</Modal.Header>
            <p>hello</p>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
