import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Hotels from "./Hotels";
import { useHotelsContext } from "../../contexts/HotelsContext";
import HotelsMockData from "../../data/HotelsData.json";

vi.mock("../../contexts/HotelsContext");

describe("Hotels Tests", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    useHotelsContext.mockReturnValue({ hotels: HotelsMockData });
    render(<Hotels />);
  });

  afterEach(cleanup);

  it("should render hotels with correct data", async () => {
    const aguamarinaGolfHotelName = await screen.findByRole("heading", {
      name: /aguamarina golf hotel/i,
    });

    expect(aguamarinaGolfHotelName).toBeInTheDocument();
    expect(aguamarinaGolfHotelName).toBeVisible();
  });

  it("should show/hide hotel overview when read more/read less about hotel link is clicked", async () => {
    const readMoreAboutHotelLinks = await screen.findAllByText(/read more/i);

    const readAboutHotelLinkForIberostarGrandHotel = readMoreAboutHotelLinks[0];

    expect(readAboutHotelLinkForIberostarGrandHotel).toBeInTheDocument();
    expect(readAboutHotelLinkForIberostarGrandHotel).toBeVisible();
    expect(readAboutHotelLinkForIberostarGrandHotel).toHaveTextContent(
      "Read more"
    );

    await user.click(readAboutHotelLinkForIberostarGrandHotel);

    expect(readAboutHotelLinkForIberostarGrandHotel).toBeInTheDocument();
    expect(readAboutHotelLinkForIberostarGrandHotel).toBeVisible();
    expect(readAboutHotelLinkForIberostarGrandHotel).toHaveTextContent(
      "Read less"
    );
  });
});
