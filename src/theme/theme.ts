export const lightTheme = {
  background: {
    primary: "#F0F1F2",
    secondary: "#F8F8F8",
  },
  text: {
    primary: "#29353D",
    secondary: "#66727E",
  },
  accent: "#6F8FA6",
  button: {
    primary: {
      background: "#29353D",
      foreground: {
        primary: "#F8F8F8",
        secondary: "#29353D",
      },
    },
    accent: {
      background: "#6F8FA6",
      foreground: {
        primary: "#F8F8F8",
        secondary: "#6F8FA6",
      },
    },
    hover: "#E4E9EB",
  },
  input: {
    background: "#F2F3F3",
    label: "#6D818F",
    placeholder: "#8D9FAA",
  },
  tooltip: {
    background: "#52606B",
    foreground: "#EBEDEF",
  },
  line: "#C5CBD0",
  overlay: "rgba(18, 28, 32, 0.85)",
  boxShadow: "0.5rem 0.5rem 1rem rgba(153, 174, 215, 0.2)",
};

export const darkTheme = {
  background: {
    primary: "#11191F",
    secondary: "#182128",
  },
  text: {
    primary: "#DFEDEE",
    secondary: "#758392",
  },
  button: {
    primary: {
      background: "#2C3C47",
      foreground: {
        primary: "#F8F8F8",
        secondary: "#728999",
      },
    },
    accent: {
      background: "#97DBFB",
      foreground: {
        primary: "#121B20",
        secondary: "#97DBFB",
      },
    },
    hover: "#222D33",
  },
  input: {
    background: "#11181C",
    label: "#8D9FAA",
    placeholder: "#4F5B63",
  },
  tooltip: {
    background: "#2F3A44",
    foreground: "#F8F8F8",
  },
  accent: "#97DBFB",
  line: "#2D343A",
  overlay: "rgba(15, 20, 22, 0.85)",
  boxShadow: "0.25rem 0.25rem 1rem rgba(2, 10, 18, 0.2)",
};

export const getTheme = (theme: "light" | "dark") => {
  return theme === "light" ? lightTheme : darkTheme;
};
