import { CheckCircle2 } from 'lucide-react';
import { CTA } from '../ui/CTAButton';

interface TextLeftImageRightProps {
  header: string;
  subheader: string;
  imageSrc: string;  
  highlights?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export const ImageRightTextLeft = ({ header, subheader, highlights, ctaText, ctaLink, imageSrc }: TextLeftImageRightProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1. TEXT CONTENT (Left on Desktop) */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{header}</h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">{subheader}</p>
            </div>

            <ul className="space-y-4">
              {highlights?.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-slate-800 font-bold">
                  <CheckCircle2 className="text-amber-600 flex-shrink-0" size={28} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {ctaLink && 
              <div className="pt-4">
                <CTA variant="primary" to={ctaLink}>{ctaText}</CTA>
              </div>
            }
          </div>

          {/* 2. IMAGE CONTENT (Right on Desktop) */}
          {/* Added lg:order-last to push it to the second column on large screens */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 aspect-square lg:aspect-[4/3] border border-slate-200 lg:order-last">
            <img src={imageSrc} alt={header} className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};