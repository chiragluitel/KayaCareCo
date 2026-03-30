import { Home, Earth, Contact, PersonStanding, Handshake } from 'lucide-react';
import { NavLinkItem } from './NavIndividualItem';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavDrawer = ({ isOpen, onClose }: MobileNavDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 max-h-[calc(100vh-5rem)] overflow-y-auto">

      <nav className="flex flex-col px-4 py-6 space-y-2" onClick={(e) => {
        if ((e.target as HTMLElement).closest('a')) {
          onClose();
        }
      }}>
        <NavLinkItem to="/" label="Home" Icon={Home} />
        <NavLinkItem to="/about" label="About Us" Icon={Earth} />
        
        {/* The dropdown handles its own open/close state via your useDisclosure hook */}
        {/* <NavDropdown label="Services">
          {SERVICES_DATA.map((service) => (
            <NavLinkItem
              key={service.id}
              to={`/services/${service.id}`}
              label={service.title}
            />
          ))}
        </NavDropdown> */}
        <NavLinkItem to='/services' label='Services' Icon={Handshake} />

        <NavLinkItem to="/contact" label="Contact Us" Icon={Contact} />
        <NavLinkItem to="/referrals" label="Referral" Icon={PersonStanding} />
      </nav>
    </div>
  );
};