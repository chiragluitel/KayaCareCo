import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

interface CTAProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const CTA = ({ to, children, variant = 'primary', className = '' }: CTAProps) => {
  // Raw tailwind without cn() - strictly mapping variants to accessible colors
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-all duration-200 shadow-sm text-lg";
  
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-slate-900 text-white hover:bg-slate-800 border-2 border-slate-900";
  } else if (variant === 'secondary') {
    variantStyles = "bg-amber-600 text-white hover:bg-amber-700 border-2 border-amber-600";
  } else if (variant === 'outline') {
    variantStyles = "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-100";
  }

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};