import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header text", () => {
  render(<App />);
  const headerElement = screen.getByText(/React Modularity Assignment/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders ContentA", () => {
  render(<App />);
  const contentAElement = screen.getByText(/Content A/i);
  expect(contentAElement).toBeInTheDocument();
});

test("renders ContentB", () => {
  render(<App />);
  const contentBElement = screen.getByText(/Content B/i);
  expect(contentBElement).toBeInTheDocument();
});

// Edge Cases
test("button in ContentA exists", () => {
  render(<App />);
  const buttonA = screen.getByText(/Click A/i);
  expect(buttonA).toBeInTheDocument();
});

test("button in ContentB exists", () => {
  render(<App />);
  const buttonB = screen.getByText(/Click B/i);
  expect(buttonB).toBeInTheDocument();
});

test("Footer text is correct", () => {
  render(<App />);
  const footerText = screen.getByText(/© 2025 My React App/i);
  expect(footerText).toBeInTheDocument();
});
