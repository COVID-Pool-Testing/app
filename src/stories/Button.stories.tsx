import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../library/Button/index";

storiesOf("Button", module).add("default", () => (
  <Button text="Click me" onAction={() => console.log("action")}></Button>
));
