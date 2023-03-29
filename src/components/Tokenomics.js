import React from "react";
import { Tilt } from "react-tilt";
import progressbar from "../../src/assets/images/tokenomics-progressbar.png";

const Tokenomics = () => {
  return (
    <div className="w-full inline-block mt-12 xl:mt-16">
      <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div
          className="mb-20 lg:mb-44 flex flex-row justify-center text-center text-[24px] text-white uppercase"
          data-aos="fade-down"
        >
          tokenomics
        </div>
        <div className="mb-20 lg:mb-44 flex flex-row justify-center items-center">
          <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[45%] relative">
            <Tilt className="Tilt" options={{ max: 50 }}>
              <div className="flex justify-center">
                <img
                  src={progressbar}
                  alt="progress-bar"
                  className="w-[80%] lg:w-[70%] xl:w-[80%]"
                  height="auto"
                  data-aos="zoom-out"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="100"
                />
              </div>
            </Tilt>
            <div className="tokenomics-btn1-position">
              <button
                className="tokenomics-btn text-white text-[12px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold py-3 lg:py-3 xl:py-4 px-5 md:px-6 lg:px-7 xl:px-8 uppercase"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                4% - BUY TAX
              </button>
            </div>
            <div className="tokenomics-btn2-position">
              <button
                className="tokenomics-btn text-white text-[12px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-semibold py-3 lg:py-3 xl:py-4 px-5 md:px-6 lg:px-7 xl:px-8 uppercase"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                4% - SELL TAX
              </button>
            </div>
            <div className="progressbar-position text-center">
              <h1
                className="text-white font-bold text-2xl md:text-4xl mb-2"
                data-aos="zoom-out-down"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                100,00,000
              </h1>
              <p
                className="text-white font-bold text-[15px] md:text-[20px]"
                data-aos="zoom-out-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Total Supply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
