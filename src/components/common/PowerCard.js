import React from "react";
import { Tilt } from "react-tilt";

const PowerCard = ({ src, width, title, description, dataAos }) => {
  return (
    <Tilt className="Tilt" options={{ max: 50 }}>
      <div
        className="w-full flex flex-col md:flex-row items-center z-50 gap-x-6 gap-y-4 power-wrapper px-3 py-5"
        data-aos={dataAos}
      >
        <div
          className="power-card w-[10%] rounded-xl w-[90px] h-[80px] flex justify-center items-center"
          data-aos="zoom-out-down"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img src={src} alt="logo" width={width} height="auto" />
        </div>
        <div className="text-center md:text-left w-full md:w-[80%]">
          <p className="text-[18px] font-bold">{title}</p>
          <p className="mt-1 text-[13px] text-lighter-white font-light">
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default PowerCard;
