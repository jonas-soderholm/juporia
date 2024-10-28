// Hero.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/hero";

describe("Hero Component", () => {
  it("renders Hello text in an h1 tag", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { name: /hello/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-[5rem] font-bold mb-4");
  });
});
