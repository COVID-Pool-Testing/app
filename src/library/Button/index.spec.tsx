import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";
import "jest-styled-components";

test("should be defined", () => {
  expect(Button).toBeDefined();
});

test("should render text and primary button", () => {
  const { getByText } = render(
    <Button
      primary
      color="#fff"
      text="Click me"
      onAction={() => console.log("")}
    />
  );

  const displayValue = getByText(/Click me/i);
  expect(displayValue).toBeInTheDocument();
  expect(displayValue).toHaveStyleRule("border", "2px solid #56BEB4");
});

test("should render text and secondary button", () => {
  const { getByText } = render(
    <Button
      secondary
      color="#fff"
      text="Click me"
      onAction={() => console.log("")}
    />
  );

  const displayValue = getByText(/Click me/i);
  expect(displayValue).toBeInTheDocument();
  expect(displayValue).toHaveStyleRule("border", "2px solid #000");
});

test("should execute action on click", () => {
  const logSpy = spyOn(console, "log");

  const { getByText } = render(
    <Button
      secondary
      color="#fff"
      text="Click me"
      onAction={() => console.log("test")}
    />
  );

  const element = getByText(/Click me/i);

  fireEvent.click(element);

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("test");
});
