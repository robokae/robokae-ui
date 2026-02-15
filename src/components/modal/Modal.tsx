import React, { type HTMLAttributes, type PropsWithChildren } from "react";
import { Container, Header, Popup } from "./Modal.styles";
import Overlay from "../overlay/Overlay";
import { ModalProvider, useModalContext } from "./ModalContext";
import IconButton from "../button/IconButton";
import Heading from "../heading";

export interface ModalProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  overlay?: boolean;
}

function Modal({ overlay, children, ...rest }: ModalProps) {
  return (
    <ModalProvider overlay={overlay} {...rest}>
      {children}
    </ModalProvider>
  );
}

Modal.Trigger = function ({ children }: PropsWithChildren) {
  const { open } = useModalContext();
  return <div onClick={open}>{children}</div>;
};

Modal.Header = function ({ children }: PropsWithChildren) {
  const { close } = useModalContext();
  return (
    <Header>
      <Heading as="h5">{children}</Heading>
      <IconButton name="XLg" onClick={close} />
    </Header>
  );
};

Modal.Content = function ({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const { display, close, overlay } = useModalContext();

  return (
    display && (
      <Container>
        {overlay && <Overlay onClick={close} />}
        <Popup className={!overlay ? "boxShadow" : ""}>{children}</Popup>
      </Container>
    )
  );
};

export default Modal;
