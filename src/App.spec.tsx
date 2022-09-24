import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { mockTestMatchMedia } from "./testUtils/mock_test_matchMedia";

describe("App Screen", () => {
  beforeAll(() => {
    mockTestMatchMedia();
  });

  it("should call login api when form is submmited with valid inputs keeping submit button disabled until response comes", async () => {
    render(<App />);
    const userName = await screen.findByTestId("user_name");
    const password = await screen.findByTestId("password");
    const submitBtn = await screen.findByTestId("submit_btn");
    userEvent.type(userName, "dipesh chaulagain");
    userEvent.type(password, "Nepal#8848");
    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(submitBtn).toBeDisabled();
    });

    await waitFor(async () => {
      const msg = await screen.findByTestId("msg");
      expect(msg).toBeInTheDocument();
    });
    expect(submitBtn).toBeEnabled();
  });

  it("should show pokemon component if login is successfull", async () => {
    render(<App />);
    const userName = await screen.findByTestId("user_name");
    const password = await screen.findByTestId("password");
    const submitBtn = await screen.findByTestId("submit_btn");
    userEvent.type(userName, "dipesh chaulagain");
    userEvent.type(password, "Nepal#8848");
    userEvent.click(submitBtn);
    const pokemon = await screen.findByTestId("pokemon");
    await waitFor(() => {
      expect(pokemon).toBeInTheDocument();
    });
  });
});
