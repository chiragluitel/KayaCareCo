import { SERVICES_DATA, SERVICES_COPY } from "../../data/content";
import { ServiceCard } from "./ServicesCards";


export const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            {SERVICES_COPY.header}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {SERVICES_COPY.subheader}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
            <ServiceCard 
            key={service.id}
            id={service.id} 
            title={service.title}
            description={service.description}
            imageSrc={service.imagePlaceholder}
            />
        ))}
        </div>

      </div>
    </section>
  );
};