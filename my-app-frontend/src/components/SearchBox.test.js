// src/components/SearchBox.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBox from "./SearchBox";

test("calls onSearch with the correct value", () => {
  const mockSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchBox onSearch={mockSearch} />
  );

  const input = getByPlaceholderText(/search github users/i);
  fireEvent.change(input, { target: { value: "octocat" } });

  const button = getByText(/search/i);
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith("octocat");
});
