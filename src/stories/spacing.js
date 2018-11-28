import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";

import Box from "../components/Box";
import defaultTheme from "../themes";

storiesOf("Box", module).addWithJSX("spacing example", () => (
  <ThemeProvider theme={defaultTheme}>
    <Box p={1} border="1px solid" display="inline-block">
      Hello world
    </Box>
  </ThemeProvider>
));
