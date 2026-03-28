import { type ReactNode } from 'react';

interface ContactMethodCardProps {
  icon: ReactNode;
  title: string;
  details: string[];
  actionLink?: { url: string; label: string };
}

export const ContactMethodCard = ({ icon, title, details, actionLink }: ContactMethodCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-1 mb-6 flex-grow">
        {details.map((detail, idx) => (
          <p key={idx} className="text-slate-700 font-medium">{detail}</p>
        ))}
      </div>
      {actionLink && (
        <a 
          href={actionLink.url} 
          className="mt-auto text-amber-700 font-bold hover:text-amber-800 transition-colors"
        >
          {actionLink.label}
        </a>
      )}
    </div>
  );
};