import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";

import Box from "../components/Box";
import defaultTheme from "../themes";

storiesOf("Box", module).addWithJSX("basic box component usage", () => (
  <ThemeProvider theme={defaultTheme}>
    <Box p={1} display="inline-block" color="white" bg="blue">
      Hello world
    </Box>
  </ThemeProvider>
));
