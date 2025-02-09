import React from "react";
import "./detailSection.scss";

export interface DetailSectionPropsInterface {
  imgUrl: string;
  heading: string;
  description: string;
  imgWidth: string;
  imgHeight: string;
  sectionAlignment?: boolean;
  bgColorWhite?: boolean;
  background?: string;
  paddingSmall?: string;
  paddingMedium?: string;
  paddingLarge?: string;
}

const DetailSections = ({
  imgUrl,
  heading,
  description,
  sectionAlignment,
  bgColorWhite,
  background,
  paddingSmall,
  paddingMedium,
  paddingLarge,
}: DetailSectionPropsInterface) => {
  return (
    <section
      className="detail-section"
      style={
        {
          background: background
            ? `url(${background}) no-repeat center / cover`
            : bgColorWhite
            ? "white"
            : "#D1EAFF",
          "--padding-sm": paddingSmall,
          "--padding-md": paddingMedium,
          "--padding-lg": paddingLarge,
        } as React.CSSProperties
      }
    >
      <div className="content">
        <div
          style={{
            order: sectionAlignment ? 1 : 0,
          }}
        >
          <img src={imgUrl} alt="profile-img" className="img" />
        </div>
        <div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailSections;
