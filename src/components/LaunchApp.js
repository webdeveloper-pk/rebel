import React from "react";
import { Tilt } from "react-tilt";
import launch from "../assets/images/launch-image.png";

const LaunchApp = () => {
  return (
    <Tilt className="Tilt" options={{ max: 50 }}>
      <div className="mb-16 md:mb-32 lg:mb-60 xl:mb-60">
        <div className="relative">
          <div className="launch-postion">
            <img
              src={launch}
              alt="launch-bg"
              className="w-[100%] lg:w-[80%] h-auto"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="200"
            />
          </div>
          <div className="launch-postion2 md:hidden">
            <img src={launch} alt="launch-bg" className="w-[100%] h-auto" />
          </div>
          <div className="launch-postion3 md:hidden">
            <img src={launch} alt="launch-bg" className="w-[100%] h-auto" />
          </div>
          <div className="w-full launchWrapper py-8 xl:py-10">
            <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
              <div className="mx-auto flex flex-row items-center justify-center">
                <div className="w-[100%] lg:w-[70%] xl:w-[55%] flex flex-col  items-center text-center text-white">
                  <h1
                    className="text-2xl mb-5 md:mb-8 uppercase text-white"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    DAO
                  </h1>
                  <div
                    className="mb-6 md:mb-6 text-[15px] font-lighter"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="100"
                    data-aos-offset="200"
                  >
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                  <button
                    className="launch-btn1 text-white text-[14px] md:text-[15px] font-semibold py-4 xl:py-5 px-8 lg:px-12 uppercase"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <span className="launch-btn2">Launch dapp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default LaunchApp;
