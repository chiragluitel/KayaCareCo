import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

interface CTAProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const CTA = ({ to, children, variant = 'primary', className = "" }: CTAProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-colors duration-200 shadow-sm";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-[#082a42]",
    secondary: "bg-brand-accent text-white hover:bg-[#e65a2a]",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-secondary/30"
  };

  const combinedClasses = [
    baseStyles, 
    variants[variant], 
    className
  ].filter(Boolean).join(' ');

  return (
    <Link to={to} className={combinedClasses}>
      {children}
    </Link>
  );
};