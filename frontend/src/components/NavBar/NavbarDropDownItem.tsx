import { type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { useDisclosure } from '../../hooks/useDisclosure';

interface NavDropdownProps {
  label: string;
  children: ReactNode;
}

export const NavDropdown = ({ label, children }: NavDropdownProps) => {
  const { isOpen, open, close } = useDisclosure(false);

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <button className="flex items-center gap-1 px-4 py-2 text-slate-900 hover:text-amber-700 font-bold transition-colors rounded-md hover:bg-slate-50">
        {label}
        <ChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg border border-slate-200 p-2 z-50">
          <div className="flex flex-col gap-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};