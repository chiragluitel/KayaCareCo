interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id: string;
    options: string[];
  }
  
  export const SelectField = ({ label, id, options, className = "", ...props }: SelectFieldProps) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-bold text-slate-900">
          {label} {props.required && <span className="text-amber-600">*</span>}
        </label>
        <select
          id={id}
          className="px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 text-slate-900 focus:border-amber-600 focus:ring-0 outline-none transition-colors appearance-none"
          {...props}
        >
          <option value="">Select an option...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    );
  };