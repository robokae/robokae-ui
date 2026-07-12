import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const getTheme = (theme: "light" | "dark") => {
  return theme === "light" ? lightTheme : darkTheme;
};
