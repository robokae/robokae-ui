interface CommonColors {
  background: {
    primary: string;
    secondary: string;
  };
  border: string;
  status: {
    success: string;
    error: string;
  };
  text: {
    primary: string;
    secondary: string;
    button: {
      info: string;
      success: string;
    };
  };
}

export const light: CommonColors = {
  background: {
    primary: "#F0F1F2",
    secondary: "#F8F8F8",
  },
  border: "#B8BEC2",
  status: {
    success: "#6F8FA6",
    error: "#D54A2F",
  },
  text: {
    primary: "#3E4B55",
    secondary: "#8D9FAA",
    button: {
      info: "#8D9FAA",
      success: "#F8F8F8",
    },
  },
};

export const dark: CommonColors = {
  background: {
    primary: "#11191F",
    secondary: "#182128",
  },
  border: "#2D343A",
  status: {
    success: "#97DBFB",
    error: "#F05959",
  },
  text: {
    primary: "#DFEDEE",
    secondary: "#758392",
    button: {
      info: "#F8F8F8",
      success: "#1E4050",
    },
  },
};
