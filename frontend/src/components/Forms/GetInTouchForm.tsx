import { InputField } from '../ui/forms/InputField';
import { useGetInTouchForm } from '../../hooks/useGetInTouchForm';

export const GetInTouchForm = ({ serviceName }: { serviceName: string }) => {
  const { isPending, isSuccess, error, submitAction } = useGetInTouchForm();

  if (isSuccess) {
    return (
      <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-700">We have received your enquiry regarding {serviceName}. A member of the Kaya Care Co team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">Get In Touch</h2>
        <p className="text-slate-600 mt-2">Interested in our {serviceName} services? Leave your details below and we'll reach out to discuss how we can help.</p>
      </div>

    {/* ERROR SECTION */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      <form action={submitAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" id="name" name="name" required />
          <InputField label="Phone Number" id="phone" name="phone" type="tel" required />
        </div>
        
        <InputField label="Email Address" id="email" name="email" type="email" />
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold text-slate-900">How can we help you?</label>
          <textarea 
            id="message" 
            name="message"
            rows={4}
            className="px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-amber-600 outline-none transition-colors w-full"
            placeholder="Tell us a little bit about what you're looking for..."
          />
        </div>

        {/* Hidden field passes the serviceName to the hook FOR DATA */}
        <input type="hidden" name="serviceOfInterest" value={serviceName} />

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg rounded-xl transition-all disabled:opacity-70 cursor-pointer"
        >
          {isPending ? 'Sending...' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  );
};