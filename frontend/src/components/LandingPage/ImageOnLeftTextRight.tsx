import { ImageLeftTextOnRight } from '../DisplayInfo/ImageLeftTextRight';
const HIGHLIGHTS = [
  'Experienced and caring staff',
  'Support available 24 hours a day',
  'Focus on building your life skills'
];

export const ImageOnLeftTextOnRight = () => {
  return (
    <
        ImageLeftTextOnRight 
        header='Compassionate Care, Built Around You' 
        subheader='At Kaya Care Co, we put you first. We take the time to understand your unique needs, creating a support plan that makes sense for your daily life and future goals.' 
        highlights={HIGHLIGHTS} 
        ctaText='Learn More About Us' 
        ctaLink='/about'
        imageSrc='/landing/kayacarehelpingclient.png'
    />
  );
};