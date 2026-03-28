import { HeroImageWithTextAndCTA } from "../components/LandingPage/HeroWithTextAndCTA";
import { ImageOnLeftTextOnRight } from "../components/LandingPage/ImageOnLeftTextRight";
import { DisplayHeaderAndCards } from "../components/LandingPage/ServicesCards";
import { LeadershipSection } from "../components/AboutUs/LeadershipSection";
import { GetInTouchForm } from "../components/Forms/GetInTouchForm";
import { LocationMap } from "../components/Contact/LocationMap";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full bg-slate-50">
    
      <HeroImageWithTextAndCTA />
        {/* ILOVENDIS */}
      <ImageOnLeftTextOnRight />

      <DisplayHeaderAndCards />

      <div className="py-16 bg-white border-y border-slate-200">
        <LeadershipSection />
      </div>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">Ready to start your journey?</h2>
          <p className="mt-4 text-lg text-slate-600">Reach out today. Our friendly team is ready to answer your questions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* MAP */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
            <LocationMap />
          </div>

          {/* FORM */}
          <div className="h-full">
            <GetInTouchForm serviceName="Landing Page" />
          </div>
        </div>
      </section>

    </div>
  );
};