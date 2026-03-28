import { Home, Info, Users, Earth, Contact } from 'lucide-react';
import { NavLinkItem } from './NavIndividualItem';
import { NavDropdown } from './NavbarDropDownItem';

export const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/kayacarelogo.png" 
              alt="Kaya Care Co Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Navigation Section */}
          <nav className="flex items-center gap-2 md:gap-4">
            <NavLinkItem to="/" label="Home" Icon={Home} />
            <NavLinkItem to="/about" label="About Us" Icon={Earth} />
            
            <NavDropdown label="Services">
              <NavLinkItem to="/community" label="Community" Icon={Info} />
              <NavLinkItem to="/therapy" label="Therapy" Icon={Users} />
            </NavDropdown>

            <NavLinkItem to="/contact" label="Contact Us" Icon={Contact} />
          </nav>

        </div>
      </div>
    </header>
  );
};