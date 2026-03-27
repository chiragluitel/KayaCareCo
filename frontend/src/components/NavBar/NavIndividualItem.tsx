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
        flex items-center gap-2 px-3 py-2 transition-colors rounded-md
        ${isActive 
          ? 'text-brand-accent bg-brand-secondary/20 font-medium' 
          : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'}
        ${className}
      `}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </NavLink>
  );
};