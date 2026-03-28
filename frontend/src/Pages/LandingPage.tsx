import { HeroImageWithTextAndCTA } from "../components/LandingPage/HeroWithTextAndCTA";
import { ImageOnLeftTextOnRight } from "../components/LandingPage/ImageOnLeftTextRight";
import { DisplayHeaderAndCards } from "../components/LandingPage/ServicesCards";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroImageWithTextAndCTA />
      <ImageOnLeftTextOnRight />
      <DisplayHeaderAndCards />
    </div>
  );
};