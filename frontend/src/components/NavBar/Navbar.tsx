import { Home, Earth, Contact, PersonStanding, Menu, X } from 'lucide-react';
import { NavLinkItem } from './NavIndividualItem';
import { NavDropdown } from './NavbarDropDownItem';
import { MobileNavDrawer } from './MobileNavDrawer';
import { SERVICES_DATA } from '../../data/content';
import { Link } from 'react-router-dom';
import { useDisclosure } from '../../hooks/useDisclosure';

export const Navbar = () => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useDisclosure(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
                <img
                  src="/kayacarelogo.png"
                  alt="Kaya Care Co Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
            </Link>
            <img
                src="/iheartndis.png"
                alt="I Love NDIS Logo"
                className="h-14 md:h-16 w-auto object-contain sm:block" 
            />
          </div>
          
          {/* DESKTOP Navigation Section - Hidden on mobile/tablet (lg:flex) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
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
            {/* <NavLinkItem to='/services' label='Services' Icon={Handshake} /> */}

            <NavLinkItem to="/contact" label="Contact Us" Icon={Contact} />
            <NavLinkItem to="/referrals" label="Referral" Icon={PersonStanding} />
          </nav>

          {/* MOBILE Hamburger Toggle - Hidden on desktop (lg:hidden) */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-slate-600 hover:text-amber-700 hover:bg-slate-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Inject the Mobile Drawer */}
      <MobileNavDrawer isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};