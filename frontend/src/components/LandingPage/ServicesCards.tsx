import { LANDING_SERVICES_DATA } from "../../data/content";
import { CTA } from "../ui/CTAButton";
import { Card } from "../ui/Card";


export const DisplayHeaderAndCards = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Core Services</h2>
          <p className="text-lg text-slate-700 font-medium">
            Simple, reliable support that fits seamlessly into your NDIS plan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {LANDING_SERVICES_DATA.map((service) => (
            <Card 
              key={service.id}
              imgSrc={service.img}
              imgAlt={service.title}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <CTA variant="primary" to="/services">Explore All Services</CTA>
        </div>

      </div>
    </section>
  );
};