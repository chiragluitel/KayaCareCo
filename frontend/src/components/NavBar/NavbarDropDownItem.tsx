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
      <button className="flex items-center gap-1 px-3 py-2 text-brand-primary font-medium">
        {label}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 p-1 z-50">
          {children}
        </div>
      )}
    </div>
  );
};