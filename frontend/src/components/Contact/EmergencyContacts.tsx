import { AlertCircle } from 'lucide-react';

export const EmergencyContacts = () => {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-md border-l-8 border-amber-500">
      <div className="flex items-center gap-4 mb-6">
        <AlertCircle size={32} className="text-amber-500" />
        <h3 className="text-2xl font-extrabold text-white">Emergency & Crisis Support</h3>
      </div>
      <p className="text-slate-300 mb-6">
        If you or someone else is in immediate danger, or experiencing a medical emergency, please call 000 immediately.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Police / Ambulance</p>
          <p className="text-white font-mono text-xl">000</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Lifeline</p>
          <p className="text-white font-mono text-xl">13 11 14</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">NDIS Enquiries</p>
          <p className="text-white font-mono text-xl">1800 800 110</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Disability Gateway</p>
          <p className="text-white font-mono text-xl">1800 643 787</p>
        </div>
      </div>
    </div>
  );
};