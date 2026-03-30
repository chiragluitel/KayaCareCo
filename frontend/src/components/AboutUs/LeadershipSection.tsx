import { DIRECTORS_DATA } from "../../data/aboutUsContent";
import { DirectorProfileCard } from "./DirectorProfileCard";

export const LeadershipSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Meet Our Directors</h2>
          <p className="text-lg text-slate-700 font-medium">
            Led by experienced professionals dedicated to elevating the standard of NDIS support across Australia.
          </p>
        </div>

        {/* 1. Face & Experience: Side-by-Side Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {DIRECTORS_DATA.map((director) => (
            <DirectorProfileCard 
              key={director.id}
              name={director.name}
              role={director.role}
              experience={director.experience}
              phone={director.phone}
              email={director.email}
              photoSrc={director.photoSrc}
            />
          ))}
        </div>

        {/* 2. Business Cards Display: Side-by-Side */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold text-slate-900">Direct Contact</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">

            <div key={`${DIRECTORS_DATA[1].id}-card`} className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white hover:shadow-xl transition-shadow duration-300">
              <img 
                src={DIRECTORS_DATA[1].cardSrc} 
                alt={`${DIRECTORS_DATA[1].name}'s Business Card`} 
                className="w-full h-auto object-contain"
              />
            </div>
          
        </div>

      </div>
    </section>
  );
};