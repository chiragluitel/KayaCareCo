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
          
          {/* LOGO SECTION (Left Side) */}
          <div className="flex-shrink-0 flex items-center gap-4 md:gap-6">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/kayacarelogo.png" 
                alt="Kaya Care Co Logo" 
                className="h-14 md:h-20 w-auto object-contain"
              />
            </Link>
            
            <div className="hidden sm:block border-l-2 border-slate-100 pl-4 md:pl-6">
              <img 
                src='src/assets/landing/iheartndis.png'
                alt="I Love NDIS" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          </div>

          {/* NAVIGATION SECTION (Right Side) */}
          <nav className="flex items-center gap-1 md:gap-4 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 sm:pb-0">
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