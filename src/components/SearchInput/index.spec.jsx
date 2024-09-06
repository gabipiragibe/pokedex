import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./index";
import { renderWithProviders } from "../../utils/helpers";
import userEvent from "@testing-library/user-event";

it("<SearchInput />", () => {
  renderWithProviders(<SearchInput setSearchError={jest.fn()} />);

  const input = screen.getByRole("spinbutton");
  const button = screen.getByRole("button");

  userEvent.type(input, "25");
  userEvent.click(button);

  expect(input).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "25" } });
  expect(input.value).toBe("25");

  const mockNavigate = jest.fn();
  jest
    .spyOn(require("react-router-dom"), "useNavigate")
    .mockImplementation(() => mockNavigate);

  expect(mockNavigate).toHaveBeenCalledWith("/details/25");
});
