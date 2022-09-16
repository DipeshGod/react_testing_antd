import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockTestMatchMedia } from "../../testUtils/mock_test_matchMedia";
import LoginForm from "./LoginForm";

describe("Login Form", () => {
  beforeAll(() => {
    mockTestMatchMedia();
  });

  it("should show error message for no username input on submit button click", async () => {
    render(<LoginForm />);
    const submitBtn = await screen.findByTestId("submit_btn");
    userEvent.click(submitBtn);

    const errorMsg = await screen.findByText("Please input your username!");
    expect(errorMsg).toBeInTheDocument();
  });

  it("should show error message for no password input on submit button click", async () => {
    render(<LoginForm />);
    const submitBtn = await screen.findByTestId("submit_btn");
    userEvent.click(submitBtn);

    const errorMsg = await screen.findByText("Please input your password!");
    expect(errorMsg).toBeInTheDocument();
  });

  it("should show error message for invalid username value", async () => {
    render(<LoginForm />);
    const userName = await screen.findByTestId("user_name");
    userEvent.type(userName, "dip");

    const errorMsg = await screen.findByText(
      "Username must be 5 characters long"
    );
    expect(errorMsg).toBeInTheDocument();
  });
});
