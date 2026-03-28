import { Home, Earth, Contact, PersonStanding } from 'lucide-react';
import { NavLinkItem } from './NavIndividualItem';
import { NavDropdown } from './NavbarDropDownItem';
import { SERVICES_DATA } from '../../data/content';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/kayacarelogo.png" 
                alt="Kaya Care Co Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className="flex items-center gap-2 md:gap-4">
            <NavLinkItem to="/" label="Home" Icon={Home} />
            <NavLinkItem to="/about" label="About Us" Icon={Earth} />
            
            <NavDropdown label="Services">
              {SERVICES_DATA.map((service) => (
                <NavLinkItem 
                  key={service.id} 
                  to={`/services/${service.id}`} 
                  label={service.title} 
                />
              ))}
            </NavDropdown>

            <NavLinkItem to="/contact" label="Contact Us" Icon={Contact} />
            <NavLinkItem to="/referrals" label="Referral" Icon={PersonStanding} />
          </nav>

        </div>
      </div>
    </header>
  );
};