import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Tests", () => {
  it("should render App without crashing", () => {
    render(<App />);
  });
});
