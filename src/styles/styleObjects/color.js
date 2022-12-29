const primitives = {
  black: {
    pure: "rgba(0, 0, 0)",
    primary: "rgba(0, 0, 0, 0.91)",
    secondary: "rgba(0, 0, 0, 0.53)",
    tertiary: "rgba(0, 0, 0, 0.38)",
    line: "rgba(0, 0, 0, 0.11)",
    barely: "rgba(0, 0, 0, 0.03)",
  },
  white: {
    pure: "rgba(255, 255, 255)",
    primary: "rgba(255, 255, 255, 0.91)",
    secondary: "rgba(255, 255, 255, 0.53)",
    tertiary: "rgba(255, 255, 255, 0.38)",
    line: "rgba(255, 255, 255, 0.11)",
    barely: "rgba(255, 255, 255, 0.03)",
  },
  spot: {
    lightMode: {
      red: "#f00",
      green: "#008000",
      blue: "#33ff",
    },
    darkMode: {
      red: "#FF3636",
      green: "#009F00",
      blue: "#4A95FF",
    },
  },
}

export const lightTheme = {
  ink: primitives.black,
  bg: primitives.white,
  spot: primitives.spot.lm,
}

export const darkTheme = {
  ink: primitives.white,
  bg: primitives.black,
  spot: primitives.spot.lm,
}
