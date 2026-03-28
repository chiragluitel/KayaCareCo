import { Mail, Phone } from 'lucide-react';

interface DirectorProfileProps {
  name: string;
  role: string;
  experience: string;
  phone: string;
  email: string;
  photoSrc: string;
}

export const DirectorProfileCard = ({ name, role, experience, phone, email, photoSrc }: DirectorProfileProps) => {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square w-full bg-slate-200 relative overflow-hidden">
        <img 
          src={photoSrc} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-slate-900">{name}</h3>
        <p className="text-amber-700 font-bold mb-4">{role}</p>
        <p className="text-slate-700 leading-relaxed flex-grow mb-6">
          {experience}
        </p>
        
        <div className="space-y-3 pt-6 border-t border-slate-100">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-700 hover:text-amber-700 font-semibold transition-colors">
            <Phone size={18} className="text-amber-600" /> {phone}
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-700 hover:text-amber-700 font-semibold transition-colors break-all">
            <Mail size={18} className="text-amber-600" /> {email}
          </a>
        </div>
      </div>
    </article>
  );
};