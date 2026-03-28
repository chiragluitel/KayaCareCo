import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "../../data/content";

export const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h3 className="text-xl font-bold text-white tracking-wide">Get in Touch</h3>
      
      <ul className="space-y-4">
        <li>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 text-slate-300 hover:text-amber-500 transition-colors text-sm">
            <Mail size={20} className="flex-shrink-0 mt-0.5" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </li>
        <li>
          <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} className="flex items-start gap-3 text-slate-300 hover:text-amber-500 transition-colors text-sm">
            <Phone size={20} className="flex-shrink-0 mt-0.5" />
            <span>{CONTACT_INFO.phones[0]}</span>
          </a>
        </li>
        <li className="flex items-start gap-3 text-slate-300 text-sm">
          <MapPin size={20} className="flex-shrink-0 mt-0.5" />
          <span>{CONTACT_INFO.address}</span>
        </li>
      </ul>

      {/* Social Icons
      <div className="flex items-center gap-4 pt-4">
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-600 hover:text-white transition-all">
          < size={20} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-600 hover:text-white transition-all">
          <Linkedin size={20} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-600 hover:text-white transition-all">
          <Instagram size={20} />
        </a>
      </div> */}
    </div>
  );
};