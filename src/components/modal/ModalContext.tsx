import React, {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface ModalContextType {
  display: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  overlay: boolean;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps extends PropsWithChildren {
  overlay?: boolean;
}

export const ModalProvider = ({
  overlay = true,
  children,
}: ModalProviderProps) => {
  const [display, setDisplay] = useState(false);

  const toggle = () => setDisplay((prev) => !prev);
  const open = () => setDisplay(true);
  const close = () => setDisplay(false);

  return (
    <ModalContext.Provider value={{ display, toggle, open, close, overlay }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};
