import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SERVICES_DATA } from '../../data/content';
import { GetInTouchForm } from '../Forms/GetInTouchForm';

export const ServiceDetailsPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-24">

        {/* 1. HEADER SECTION */}
        <div className="relative h-[40vh] min-h-[400px] w-full bg-slate-900 flex items-center justify-center">
            <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imagePlaceholder})` }}
            />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
                    {service.title}
                </h1>
                <p className="text-xl text-slate-200 font-medium drop-shadow">
                    {service.description}
                </p>
            </div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 font-semibold mb-8 bg-slate-50/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-200 transition-colors">
          <ArrowLeft size={20} /> Back to All Services
        </Link>

        {/* 2. DETAILED COPY SECTION */}
        <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <div className="prose prose-lg prose-slate max-w-none">
            {service.detailedContent.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* 3. GET IN TOUCH FORM */}
        <GetInTouchForm serviceName={service.title} />

      </div>
    </div>
  );
};