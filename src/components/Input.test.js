import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { Input } from "./Input";

const renderComponent = (props) => {
  return render(<Input {...props} />);
};

test("examples of some things", async () => {
  const expectedUsername = "Ada Lovelace";

  renderComponent();

  const input = screen.getByTestId("input");
  expect(input).toBeTruthy();

  fireEvent.changeText(screen.getByTestId("input"), expectedUsername);
  expect(input.props.value).toBe(expectedUsername);

  fireEvent.press(screen.getByText("Print Username"));

  const usernameOutput = await screen.findByTestId("printed-username");

  expect(usernameOutput.children[0]).toBe(expectedUsername);
});
