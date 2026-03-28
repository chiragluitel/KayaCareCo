
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const ServiceCard = ({ id, title, description, imageSrc }: ServiceCardProps) => {
  return (
    <Link 
      to={`/services/${id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
    >
      
      <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${title} at Kaya Care Co`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="pt-4 border-t border-slate-100">
          <span className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:text-amber-800 transition-colors">
            View Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>

    </Link>
  );
};