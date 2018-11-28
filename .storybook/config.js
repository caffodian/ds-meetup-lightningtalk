import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withNotes);
addDecorator(withKnobs);

setAddon(JSXAddon);

function loadStories() {
  require("../src/stories");
  require("../src/stories/basicBox");
  require("../src/stories/spacing");
}

configure(loadStories, module);
