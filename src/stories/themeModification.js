import React from "react";

import { storiesOf } from "@storybook/react";

import { ThemeProvider } from "styled-components";

import { object } from "@storybook/addon-knobs";

import Button from "../components/Button";
import defaultTheme from "../themes";

storiesOf("Button", module).addWithJSX("button theme knob demo", () => (
  <ThemeProvider theme={object("theme", defaultTheme)}>
    <div>
      <Button variant="primary" p={[1, 2]}>
        Hi I'm a primary button
      </Button>
      <Button variant="secondary" p={[1, 2]}>
        Hi I'm a secondary button
      </Button>
    </div>
  </ThemeProvider>
));
