import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";

import Button from "../components/Button";
import defaultTheme from "../themes";

storiesOf("Button", module).addWithJSX("button variant demo", () => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <Button variant="primary">Hi I'm a primary button</Button>
      <Button variant="secondary">Hi I'm a secondary button</Button>
    </div>
  </ThemeProvider>
));
