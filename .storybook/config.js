import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";

addDecorator(withNotes);

setAddon(JSXAddon);

function loadStories() {
  require("../src/stories");
  require("../src/stories/spacing");
}

configure(loadStories, module);
