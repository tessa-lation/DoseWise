
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders DoseWise branding", () => {
  render(<App />);
  const brandElement = screen.getAllByText(/dosewise/i)[0];
  expect(brandElement).toBeInTheDocument();
});
