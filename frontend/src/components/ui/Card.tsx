interface CardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
  }
  
  export const Card = ({ imgSrc, imgAlt, title, description }: CardProps) => {
    return (
      <article className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-200">
        <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-extrabold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-700 font-medium flex-grow leading-relaxed">{description}</p>
        </div>
      </article>
    );
  };