import React from "react";

const TokenomicsCard = ({
  color,
  text,
  percentage,
  dataAos,
  dataAosInner,
  dataAosEasing,
  dataAosDelay,
  dataAos0ffset,
}) => {
  return (
    <div
      className="section5-card flex flex-row justify-between items-center py-0 text-white text-sm lg:text-base"
      data-aos={dataAos}
    >
      <div className="flex items-center">
        <div
          className="border-r-4 h-[35px]"
          style={{ borderColor: color }}
        ></div>
        <p
          className="pl-6 py-4"
          data-aos={dataAosInner}
          data-aos-easing={dataAosEasing}
          data-aos-delay={dataAosDelay}
          data-aos-offset={dataAos0ffset}
        >
          {text}
        </p>
      </div>
      <p
        className="pr-6 py-4"
        data-aos={dataAosInner}
        data-aos-easing={dataAosEasing}
        data-aos-delay={dataAosDelay}
        data-aos-offset={dataAos0ffset}
      >
        {percentage}
      </p>
    </div>
  );
};

export default TokenomicsCard;
