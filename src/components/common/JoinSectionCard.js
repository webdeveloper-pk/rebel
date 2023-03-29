import React from "react";

const JoinSectionCard = ({ src, title, description, dataAos }) => {
  return (
    <div
      className="section1-card flex flex-col items-start pl-7 pr-5 pt-7 pb-10 text-start overflow-hidden"
      data-aos={dataAos}
    >
      <div
        data-aos="zoom-out-down"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <img src={src} alt="logo" width="72px" height="auto" />
      </div>
      <p className="mt-9 text-[18px] font-bold section1-card-title">{title}</p>
      <p className="mt-5 text-[12px] text-white">{description}</p>
    </div>
  );
};

export default JoinSectionCard;
