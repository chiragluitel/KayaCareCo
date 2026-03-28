import { LocationMap } from '../components/Contact/LocationMap';
import { EmergencyContacts } from '../components/Contact/EmergencyContacts';
import { GetInTouchForm } from '../components/Forms/GetInTouchForm';
import { ContactDetailsGrid } from '../components/Contact/Contact';

export const ContactUsPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Kaya Care Co</h1>
        <p className="text-xl text-slate-200 font-medium max-w-2xl mx-auto">
          We are here to answer your questions and help you navigate your NDIS journey.
        </p>
      </div>

      <ContactDetailsGrid />

      {/* Main Content Area: Form & Map Side-by-Side on Desktop */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side: The Map */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Visit Our Office</h2>
                <p className="text-slate-600 font-medium">We are based in Craigieburn, Victoria, and service participants across Melbourne.</p>
              </div>
              <LocationMap />
            </div>

            <div className="h-full">
               <GetInTouchForm serviceName="General Contact Page Enquiry" />
            </div>

          </div>
        </div>
      </section>

      {/* Emergency Contacts Footer Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyContacts />
        </div>
      </section>

    </div>
  );
};