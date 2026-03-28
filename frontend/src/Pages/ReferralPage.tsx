import { ParticipantDetailsSection } from "../components/Referral/ParticipantDetailsSection";
import { ReferralContactDetails } from "../components/Referral/ReferralContactDetails";
import { ServiceRequestSection } from "../components/Referral/ServiceRequestSection";
import { CONTACT_INFO, REFERRAL_COPY } from "../data/content";
import { useReferralForm } from "../hooks/useReferralForm";

export const ReferralPage = () => {
  const { isPending, isSuccess, error, submitAction } = useReferralForm();

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Referral Received</h2>
          <p className="text-lg text-slate-700">Thank you. Our team will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{REFERRAL_COPY.header}</h1>
          <p className="text-lg text-slate-700">{REFERRAL_COPY.description}</p>
          <div className="pt-4 flex flex-col md:flex-row justify-center gap-4 text-slate-600 font-medium">
            <span>📞 {CONTACT_INFO.phones.join(' / ')}</span>
            <span className="hidden md:inline">•</span>
            <span>✉️ {CONTACT_INFO.email}</span>
          </div>
        </div>
        
        {/* ERROR */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        {/* FORM */}
        <form action={submitAction} className="space-y-8">
          <ParticipantDetailsSection />
          <ServiceRequestSection />
          <ReferralContactDetails />
          <div className="pt-6">
            <button 
              type="submit" 
              disabled={isPending}
              className="w-full md:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-xl shadow-md transition-all disabled:opacity-70 cursor-pointer"
            >
              {isPending ? 'Submitting...' : 'Submit Referral Form'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};