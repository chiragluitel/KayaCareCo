import { Link } from 'react-router-dom';
import { Home, PhoneForwarded } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center space-y-8">
        
        {/* Error Code & Graphic */}
        <div className="space-y-2">
          <p className="text-sm font-extrabold text-amber-600 tracking-widest uppercase">
            Error 404
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
        </div>

        {/* User-friendly message */}
        <p className="text-lg text-slate-600 leading-relaxed">
          Oops! It looks like you've taken a wrong turn. The page you are looking for might have been moved, deleted, or perhaps the URL was typed incorrectly.
        </p>

        {/* Recovery Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <PhoneForwarded size={20} />
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};