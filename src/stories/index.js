import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import Box from "../components/Box";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addWithJSX("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .addWithJSX("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Box", module).addWithJSX("primary coloured", () => (
  <Box p={1} bg="primary" color="text">
    Hello world
  </Box>
));
