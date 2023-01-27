import React from "react";
import App from "./App";
import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("App compiles", async () => {
    const AppComponent = render(<App />);

    const el = await screen.findByText("Vite + React");
    el; //?
    expect(el).toBeTruthy();
  });
  it("");
});
