import { NavLink } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';

interface NavLinkItemProps {
  to: string;
  label: string;
  Icon?: LucideIcon;
  className?: string;
}

export const NavLinkItem = ({ to, label, Icon, className = "" }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 px-4 py-2 transition-all duration-200 rounded-md text-base
        ${isActive 
          ? 'text-amber-800 bg-amber-50 font-bold border-b-2 border-amber-600' 
          : 'text-slate-700 font-semibold hover:text-slate-900 hover:bg-slate-100'}
        ${className}
      `}
    >
      {/* We use a render prop here to expose isActive to the children */}
      {({ isActive }) => (
        <>
          {Icon && (
            <Icon 
              size={20} 
              // Now we pass a pure string based on the boolean!
              className={isActive ? "text-amber-700" : "text-slate-500"} 
            />
          )}
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
};