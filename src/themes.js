const colors = {
  primary: "blue",
  primaryDarker: "navy",
  secondary: "red",
  secondaryDarker: "darkred",
  text: "white"
};

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors,
  buttons: {
    primary: {
      color: colors.text,
      backgroundColor: colors.primary,
      "&:hover": {
        backgroundColor: colors.primaryDarker
      }
    },
    secondary: {
      color: colors.text,
      backgroundColor: colors.secondary,
      "&:hover": {
        backgroundColor: colors.secondaryDarker
      }
    }
  }
};

export default theme;
