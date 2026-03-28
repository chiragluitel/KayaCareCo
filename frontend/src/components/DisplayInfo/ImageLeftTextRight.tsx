import { CheckCircle2 } from 'lucide-react';
import { CTA } from '../ui/CTAButton';
interface ImageLeftTextRightProps {
  header: string,  
  subheader: string,
  imageSrc: string
  highlights? :string[],
  ctaLink?: string,
  ctaText?: string,
    
}

export const ImageLeftTextOnRight = ({highlights, header, subheader, ctaText, ctaLink, imageSrc}:ImageLeftTextRightProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-square lg:aspect-[4/3]">
            <img 
              src={imageSrc} 
              alt="Kaya Care Co staff member chatting with a client" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8 lg:pl-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                {header}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {subheader}
              </p>
            </div>

            <ul className="space-y-4">
              {highlights?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-gray-700 font-medium">
                  <CheckCircle2 className="text-brand-accent flex-shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Display CTA only when a link provided */}
            {ctaLink && <div className="pt-2">
              <CTA variant="outline" to={ctaLink}>{ctaText}</CTA>
            </div>}
            
          </div>

        </div>
      </div>
    </section>
  );
};