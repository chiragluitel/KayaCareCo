import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';
import { ContactMethodCard } from './ContactMethodCard';

export const ContactDetailsGrid = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <ContactMethodCard 
            icon={<Phone size={32} />}
            title="Call Us"
            details={CONTACT_INFO.phones}
            actionLink={{ url: `tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`, label: "Call Now" }}
          />
          
          <ContactMethodCard 
            icon={<Mail size={32} />}
            title="Email Us"
            details={[CONTACT_INFO.email]}
            actionLink={{ url: `mailto:${CONTACT_INFO.email}`, label: "Send an Email" }}
          />
          
          <ContactMethodCard 
            icon={<MapPin size={32} />}
            title="Our Office"
            details={[CONTACT_INFO.address]}
            actionLink={{ url: "#map", label: "Get Directions" }}
          />
          
          <ContactMethodCard 
            icon={<Clock size={32} />}
            title="Business Hours"
            details={["Monday - Friday", "9:00 AM - 5:00 PM"]}
          />
          
        </div>
      </div>
    </section>
  );
};