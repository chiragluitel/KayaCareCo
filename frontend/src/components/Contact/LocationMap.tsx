export const LocationMap = () => {
    return (
      <div id="map" className="w-full h-[400px] md:h-[600px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.4678822365287!2d144.9288152156828!3d-37.59124417979313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64f8c9b98ec35%3A0x8e82a8bdab85a9bc!2s24%20Brunswick%20Cres%2C%20Craigieburn%20VIC%203064!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Kaya Care Co Office Location"
        ></iframe>
      </div>
    );
  };