import React from "react";

import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import { ThemeProvider } from "styled-components";

import Box from "../components/Box";
import defaultTheme from "../themes";

storiesOf("Box", module).addWithJSX("spacing example", () => (
  <ThemeProvider theme={defaultTheme}>
    <Box p={number("padding (on spacing scale)", 1)}>Hello world</Box>
  </ThemeProvider>
));
