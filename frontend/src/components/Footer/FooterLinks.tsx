import { Link } from 'react-router-dom';

interface FooterLinksProps {
  title: string;
  links: { label: string; path: string }[];
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col space-y-6">
      <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link 
              to={link.path} 
              className="text-slate-300 hover:text-amber-500 transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};