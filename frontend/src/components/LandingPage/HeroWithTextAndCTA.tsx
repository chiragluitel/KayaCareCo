import { CTA } from "../ui/CTAButton";

export const HeroImageWithTextAndCTA = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-slate-900">
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        <img 
          src="/src/assets/landing/heroimage.jpg" 
          alt="NDIS support worker helping a participant smile" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Empowering Your <br className="hidden md:block" /> NDIS Journey
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 font-medium max-w-xl drop-shadow">
            Quality care and support to help you live independently and achieve your personal goals.
          </p>
          <div className="pt-6 flex flex-wrap gap-4">
            <CTA variant="secondary" to="/contact">Get Started Today</CTA>
            <CTA variant="outline" className="text-white border-white hover:bg-slate-800/80 hover:text-white" to="/services">
              View Our Services
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
};