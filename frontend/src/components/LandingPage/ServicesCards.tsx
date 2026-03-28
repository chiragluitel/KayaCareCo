import { CTA } from "../ui/CTAButton";
import { Card } from "../ui/Card";

const SERVICES_DATA = [
  { id: 1, img: "/src/assets/card1.png", title: "Daily Living Support", desc: "Help with daily tasks so you can live comfortably at home." },
  { id: 2, img: "/src/assets/card2.png", title: "Community Access", desc: "Support to get out, meet people, and join local activities." },
  { id: 3, img: "/src/assets/card3.png", title: "Therapeutic Support", desc: "Work with professionals to improve your health and well-being." },
  { id: 4, img: "/src/assets/card4.png", title: "Personal Care", desc: "Respectful help with your morning and evening routines." },
  { id: 5, img: "/src/assets/card5.png", title: "Life Skills Training", desc: "Learn new skills to become more independent every day." },
  { id: 6, img: "/src/assets/card6.png", title: "Short Term Accommodation", desc: "A safe and relaxing place to stay for a short break." },
];

export const DisplayHeaderAndCards = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Core Services</h2>
          <p className="text-lg text-gray-600">
            Simple, reliable support that fits seamlessly into your NDIS plan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES_DATA.map((service) => (
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