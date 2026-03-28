import { ABOUT_BLOCKS } from "../../data/aboutUsContent"
import { ImageLeftTextOnRight } from "../DisplayInfo/ImageLeftTextRight"
import { ImageRightTextLeft } from "../DisplayInfo/ImageRightTextLeft"

export const FourAboutCards = () => {
    return (
    <>
        <ImageLeftTextOnRight
        header={ABOUT_BLOCKS.mission.header}
        subheader={ABOUT_BLOCKS.mission.subheader}
        highlights={ABOUT_BLOCKS.mission.highlights}
        ctaText={ABOUT_BLOCKS.mission.ctaText}
        ctaLink={ABOUT_BLOCKS.mission.ctaLink}
        imageSrc={ABOUT_BLOCKS.mission.imageSrc}
      />

      {/* Block 2: The Difference (Image Right) */}
      <ImageRightTextLeft 
        header={ABOUT_BLOCKS.difference.header}
        subheader={ABOUT_BLOCKS.difference.subheader}
        highlights={ABOUT_BLOCKS.difference.highlights}
        ctaText={ABOUT_BLOCKS.difference.ctaText}
        ctaLink={ABOUT_BLOCKS.difference.ctaLink}
        imageSrc={ABOUT_BLOCKS.difference.imageSrc}
      />

      {/* Block 3: Values (Image Left) */}
      <ImageLeftTextOnRight 
        header={ABOUT_BLOCKS.values.header}
        subheader={ABOUT_BLOCKS.values.subheader}
        highlights={ABOUT_BLOCKS.values.highlights}
        ctaText={ABOUT_BLOCKS.values.ctaText}
        ctaLink={ABOUT_BLOCKS.values.ctaLink}
        imageSrc={ABOUT_BLOCKS.values.imageSrc}
      />

      {/* Block 4: Community (Image Right) */}
      <ImageRightTextLeft 
        header={ABOUT_BLOCKS.community.header}
        subheader={ABOUT_BLOCKS.community.subheader}
        highlights={ABOUT_BLOCKS.community.highlights}
        ctaText={ABOUT_BLOCKS.community.ctaText}
        ctaLink={ABOUT_BLOCKS.community.ctaLink}
        imageSrc={ABOUT_BLOCKS.community.imageSrc}
      />
    </>
    )
}