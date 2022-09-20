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

  test.each`
    field          | message                                    | value
    ${"user_name"} | ${"Username must be 5-20 characters long"} | ${"dip"}
    ${"user_name"} | ${"Username must be 5-20 characters long"} | ${"thequickbrownfoxjumpedoveralazydog"}
  `(
    "Should show $message when incorrect input $value",
    async ({ field, message, value }) => {
      render(<LoginForm />);
      const userName = await screen.findByTestId(field);
      userEvent.type(userName, value);

      const errorMsg = await screen.findByText(message);
      expect(errorMsg).toBeInTheDocument();
    }
  );

  test.each`
    field         | message                                                                      | value
    ${"password"} | ${"Password must be at least 8 characters long"}                             | ${"dip"}
    ${"password"} | ${"Make sure to have one number, one capital letter and one special symbol"} | ${"nepal#8848"}
    ${"password"} | ${"Make sure to have one number, one capital letter and one special symbol"} | ${"nepalktm8848"}
    ${"password"} | ${"Make sure to have one number, one capital letter and one special symbol"} | ${"KtmNepal"}
  `(
    "Should show $message when incorrect input $value",
    async ({ field, message, value }) => {
      render(<LoginForm />);
      const userName = await screen.findByTestId(field);
      userEvent.type(userName, value);

      const errorMsg = await screen.findByText(message);
      expect(errorMsg).toBeInTheDocument();
    }
  );
});
