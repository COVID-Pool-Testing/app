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
  ))
  .add("primary with color white", () => (
    <div style={{ backgroundColor: "#000", width: "300px" }}>
      <Button
        primary
        color="#FFF"
        text="Click me"
        onAction={() => console.log("action")}
      ></Button>
    </div>
  ));
