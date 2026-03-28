export const FooterBrand = () => {
    return (
      <div className="flex flex-col space-y-6 lg:max-w-sm">
        <img 
          src="/kayacarelogo.png" 
          alt="Kaya Care Co Logo" 
          className="h-16 w-auto object-contain object-left brightness-100" 
        />
        
        <img 
          src="/firstnationflags.png" 
          alt="Aboriginal and Torres Strait Islander Flags" 
          className="h-8 w-auto object-contain object-left" 
        />
        
        <p className="text-sm text-slate-400 leading-relaxed pr-4">
          In the spirit of reconciliation, Kaya Care Co acknowledges the Traditional Custodians of Country throughout Australia and their continuing connection to land, sea and waterways. We pay respect to Elders past, present and emerging, and acknowledge the strength and resilience of all Aboriginal and Torres Strait Islander people, families, and communities.
        </p>
      </div>
    );
  };