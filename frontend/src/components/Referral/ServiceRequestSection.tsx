import { PLAN_MANAGEMENT_OPTIONS, SERVICE_OPTIONS } from "../../data/content";
import { InputField } from "../ui/forms/InputField";
import { SelectField } from "../ui/forms/SelectField";

export const ServiceRequestSection = () => {
  return (
    <fieldset className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
      <legend className="text-2xl font-extrabold text-slate-900 px-2 -ml-2 mb-4">
        Service Requirements
      </legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField label="Service Requested" id="serviceType" name="serviceType" options={SERVICE_OPTIONS} required />
        <SelectField label="Plan Management Type" id="planManagement" name="planManagement" options={PLAN_MANAGEMENT_OPTIONS} required />
        <InputField label="Requested Service Frequency" id="frequency" name="frequency" placeholder="e.g., 2 hours per week" />
        <InputField label="NDIS Planner/Manager Details" id="plannerDetails" name="plannerDetails" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="goals" className="text-sm font-bold text-slate-900">Participant Goals</label>
        <textarea 
          id="goals" 
          name="goals"
          rows={4}
          className="px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-amber-600 outline-none transition-colors w-full"
          placeholder="Please share the 'About Me' or 'Goals' section of the NDIS plan..."
        />
      </div>
    </fieldset>
  );
};