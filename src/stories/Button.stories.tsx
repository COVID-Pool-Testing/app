import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../library/Button/index";

storiesOf("Button", module)
  .add("primary", () => (
    <Button
      primary
      color="#333"
      text="Click me"
      onAction={() => console.log("action")}
    ></Button>
  ))
  .add("secondary", () => (
    <Button
      secondary
      color="#333"
      text="Click me"
      onAction={() => console.log("action")}
    ></Button>
  ));
