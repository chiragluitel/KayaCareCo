import { InputField } from "../ui/forms/InputField";

export const ReferralContactDetails = () => {
  return (
    <fieldset className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
      <legend className="text-2xl font-extrabold text-slate-900 px-2 -ml-2 mb-4">
        Referral Contact Details
      </legend>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Referral Name" id="referralName" name="referralName" required />
        <InputField label="Referral Organisation Name" id="referralOrganisationName" name="referralOrganisationName" />
        <InputField label="Address" id="referallAddress" name="referallAddress" placeholder="" />
        <InputField label="Phone Number" id="referralPhone" name="referralPhone" type="tel" required  />
        <InputField label="Email Address" id="referralEmail" name="referralEmail" type="email" />
      </div>
    </fieldset>
  );
};