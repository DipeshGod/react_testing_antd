import { render, screen, waitFor } from "@testing-library/react";

import { mockTestMatchMedia } from "../../testUtils/mock_test_matchMedia";
import Pokemon from "./Pokemon";

describe("Pokemon Component", () => {
  beforeAll(() => {
    mockTestMatchMedia();
  });

  it("should show loading before pokemon is fetched", async () => {
    render(<Pokemon />);

    expect(await screen.findByText("loading")).toBeInTheDocument();

    const pokeInfo = await screen.findByTestId("poke_info");

    await waitFor(() => expect(pokeInfo).toBeInTheDocument());
  });
});
