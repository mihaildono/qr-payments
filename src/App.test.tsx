import { render } from "@testing-library/react";
import App from "./App";

xtest("renders learn react link", () => {
  render(<App />);
  expect("foo").toBeInTheDocument();
});
