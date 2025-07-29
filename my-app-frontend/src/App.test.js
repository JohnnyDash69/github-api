// src/App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the App UI correctly (snapshot)", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
