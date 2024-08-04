import React from "react";
import { render } from "@testing-library/react";
import { BasicInformations } from "./index";

describe("Jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
  it("should display elements", () => {
    render(<BasicInformations />);
  });
});
