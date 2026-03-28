import { InputField } from "../ui/forms/InputField";

export const ParticipantDetailsSection = () => {
  return (
    <fieldset className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
      <legend className="text-2xl font-extrabold text-slate-900 px-2 -ml-2 mb-4">
        Participant Details
      </legend>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Full Name" id="participantName" name="participantName" required />
        <InputField label="Date of Birth" id="dob" name="dob" type="date" required />
        <InputField label="NDIS Number" id="ndisNumber" name="ndisNumber" required />
        <InputField label="Plan Dates" id="planDates" name="planDates" placeholder="e.g., Jan 2026 - Jan 2027" />
        <InputField label="Contact Phone" id="participantPhone" name="participantPhone" type="tel" required />
        <InputField label="Email Address" id="participantEmail" name="participantEmail" type="email" />
      </div>
      
      <InputField label="Home Address" id="address" name="address" className="w-full" required />
      <InputField label="Primary Disability / Health Factors" id="disability" name="disability" className="w-full" required />
    </fieldset>
  );
};