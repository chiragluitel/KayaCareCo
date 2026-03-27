import { Home, Info, Users, Earth, Contact } from 'lucide-react';
import { NavLinkItem } from './NavIndividualItem';
import { NavDropdown } from './NavbarDropDownItem';

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-4">
    
      {/* Home */}
    <NavLinkItem to="/" label="Home" Icon={Home} />
    <NavLinkItem to="/about" label="About Us" Icon={Earth} />
    <NavDropdown label="Services">
    <NavLinkItem to="/community" label="Community" Icon={Info} />
    <NavLinkItem to="/therapy" label="Therapy" Icon={Users} />
    </NavDropdown>

    <NavLinkItem to="/contact" label="Contact Us" Icon={Contact} />
    </nav>
  );
};