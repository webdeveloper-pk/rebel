import React from "react";
import { Tilt } from "react-tilt";
import wallet from "../../src/assets/images/hero-wallet.png";
import hero from "../../src/assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="hero-height-wrapper my-24 md:my-32 lg:my-40 xl:my-48">
      <div className="w-full">
        <div className="px-6 md:px-12 lg:px-16 py-2 homepage-container mx-auto">
          <div className="mx-auto flex flex-row items-center justify-center">
            <div className="pt-2 w-[100%] lg:w-[100%] xl:w-[100%] flex flex-col  items-center text-center text-white relative">
              <div className="heroWrapper">
                <Tilt className="Tilt" options={{ max: 50 }}>
                  <img
                    src={hero}
                    alt="world"
                    className="w-[100%] h-auto"
                    data-aos="zoom-in"
                  />
                </Tilt>
              </div>
              <div className="hero-subtitle-animation mb-2 md:mb-5 text-light-gray text-base md:text-[24px] lg:text-[22px] xl:text-[25px] hero-description font-light">
                Time for a Change
              </div>
              <h1 className="block md:hidden hero-title-animation text-3xl mb-3 md:mb-4 uppercase text-white">
                Entering to the
                <span className="text-light-red pl-3">digital world</span> iS
                easier
              </h1>
              <h1 className="hidden md:block hero-title-animation text-4xl md:text-[36px] lg:text-[36px] xl:text-[35px] mb-3 md:mb-4 uppercase text-white">
                Entering to the
                <span className="text-light-red pl-3">digital world</span>
                <br />
                <div className="mt-3">iS easier</div>
              </h1>
              <Tilt className="Tilt" options={{ max: 50 }}>
                <button className="hero-btn1 flex items-center gap-x-4 text-white text-[14px] md:text-[15px] font-semibold py-3 xl:py-3 px-5 lg:px-6 mt-4 lg:mt-6">
                  <span className="hero-btn2">
                    <img
                      src={wallet}
                      alt="wallet"
                      className="w-[30px] md:w-[36px] h-auto z-100"
                    />
                  </span>
                  <span className="hero-btn2">Connect your Wallet</span>
                </button>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
