interface CardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
  }
  
  export const Card = ({ imgSrc, imgAlt, title, description }: CardProps) => {
    return (
      <article className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-brand-primary mb-3">{title}</h3>
          <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
        </div>
      </article>
    );
  };