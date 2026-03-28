import { GetInTouchForm } from '../components/Forms/GetInTouchForm';
import { FourAboutCards } from '../components/AboutUs/FourAboutCards';
import { LeadershipSection } from '../components/AboutUs/LeadershipSection';

export const AboutUsPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
    
        {/* HEADER */}
        <div className="bg-slate-900 py-20 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Kaya Care Co</h1>
            <p className="text-xl text-slate-200 font-medium max-w-2xl mx-auto">
                Dedicated to providing exceptional, personalized support for NDIS participants.
            </p>
        </div>

        <FourAboutCards />

        <LeadershipSection />
        
        {/* Contact Form Section */}
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GetInTouchForm serviceName="General Enquiry" />
            </div>
        </section>

    </div>
  );
};