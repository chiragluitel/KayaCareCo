import { FooterLinks } from './FooterLinks';
import { FooterContact } from './FooterContact';
import { FooterBrand } from './FooterBranding';
import { QUICK_LINKS, SERVICE_LINKS } from '../../data/footerdata';


export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t-4 border-amber-600 mt-auto">
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-1">
            <FooterBrand />
          </div>
          
          <div className="lg:col-span-1">
            <FooterLinks title="Quick Links" links={QUICK_LINKS} />
          </div>
          
          <div className="lg:col-span-1">
            <FooterLinks title="Our Services" links={SERVICE_LINKS} />
          </div>
          
          <div className="lg:col-span-1">
            <FooterContact />
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kaya Care Co | NDIS Provider</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};