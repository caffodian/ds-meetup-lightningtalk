const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors: {
    primary: "blue",
    secondary: "red",
    text: "white"
  },
  buttons: {
    primary: {
      color: "text",
      backgroundColor: "primary",
      "&:hover": {
        backgroundColor: "black"
      }
    }
  }
};

export default theme;
