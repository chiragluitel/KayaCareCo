export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4">
        <img 
          src="/kayacarelogo.png" 
          alt="Kaya Care Co Logo" 
          className="h-10 w-auto opacity-90 brightness-100" 
        />
        <p className="text-slate-300 font-medium tracking-wide">
          © {new Date().getFullYear()} Kaya Care Co NDIS Provider. All rights reserved.
        </p>
      </div>
    </footer>
  );
};