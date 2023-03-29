import React from "react";
import line from "../assets/images/roadmap-phase-line.png";
import verticalLine from "../assets/images/roadmap-vertical-line.png";

const Roadmap = () => {
  return (
    <div className="w-full inline-block mb-12 md:mb-32 xl:mb-48">
      <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div
          className="mb-8 md:mb-16 lg:mb-32 flex flex-row justify-center text-center text-[24px] text-white uppercase"
          data-aos="fade-down"
        >
          roadmap
        </div>
        {/* for small screens */}
        <div className="block lg:hidden">
          <div className="flex flex-col justify-center items-stretch md:px-6 lg:px-8 xl:px-20">
            <div className="bg-phase1-4 pt-16">
              {/* phase 1 */}
              <div>
                <p className="text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 1
                </p>
                <div
                  className="roadmap-card-wrapper text-white text-sm md:text-[13px] px-5  py-6"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                    Launch and Community Building
                  </span>
                  <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                    <li>Launch of REBEL token and initial distribution</li>
                    <li>
                      Building of the REBEL community through social media and
                      marketing efforts
                    </li>
                    <li>Initial development of the REBEL platform and dApp</li>
                  </ul>
                </div>
                <div className="flex flx-row justify-center">
                  <img src={verticalLine} alt="" className="h-[100px]" />
                </div>
              </div>
              {/* phase 2 */}
              <div className="-mt-[34px]">
                <p className="text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 2
                </p>
                <div
                  className="roadmap-card-wrapper text-white text-sm md:text-[13px] px-5 py-6"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                    Platform Development and Integration
                  </span>
                  <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                    <li>
                      Launch of the REBEL dApp with staking and governance
                      features
                    </li>
                    <li>
                      Integration of additional functionalities such as a
                      payment system and the ability to convert REBEL tokens to
                      virtual visa cards
                    </li>
                    <li>
                      Formation of partnerships with other blockchain projects
                      to expand REBEL's reach and capabilities
                    </li>
                  </ul>
                </div>
                <div className="flex flx-row justify-center">
                  <img src={verticalLine} alt="" className="h-[100px]" />
                </div>
              </div>
            </div>
            <div className="bg-phase2-3 pb-16">
              {/* phase 3 */}
              <div className="-mt-[34px]">
                <p className="text-white  lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 3
                </p>
                <div
                  className="roadmap-card-wrapper text-white text-sm md:text-[13px] px-5 py-6"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="text-white lg:text-[15px] xl:text-[18px] roadmap-card-title">
                    Optimization and Expansion
                  </span>
                  <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4 raodmap-card-desc text-[12px] mb-0">
                    <li>
                      Continued development and optimization of the REBEL
                      platform, including enhancements to user experience and
                      security
                    </li>
                    <li>
                      Expansion of REBEL's marketing efforts to attract new
                      users and build the community Implementation of additional
                      features and functionalities based on feedback and needs
                      of the REBEL community
                    </li>
                  </ul>
                </div>
                <div className="flex flx-row justify-center">
                  <img src={verticalLine} alt="" className="h-[100px]" />
                </div>
              </div>
              {/* phase 4 */}
              <div className="-mt-[34px]">
                <p className="text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 4
                </p>
                <div
                  className="roadmap-card-wrapper text-white text-sm md:text-[13px] px-5 py-6"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                    Scaling and Sustainability
                  </span>
                  <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                    <li>
                      Launch of payment system and expansion of partnerships
                    </li>
                    <li>
                      Continued development based on feedback and needs of the
                      community
                    </li>
                    <li>
                      Exploration of new use cases and applications for REBEL
                      technology
                    </li>
                    <li>
                      Development of a long-term sustainability plan for the
                      REBEL ecosystem.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for large screens */}
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-stretch md:px-6 lg:px-8 xl:px-20">
            <div className="flex flex-col w-full md:w-[46%] xl:w-[46%] bg-phase1-4 py-16">
              <div
                className="roadmap-card-wrapper text-white text-sm md:text-[13px] lg:px-5 xl:px-7 py-6 lg:h-[220px] xl:h-[185px]"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="-mt-14 mb-9 -ml-4 text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 1
                </p>
                <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                  Launch and Community Building
                </span>
                <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                  <li>Launch of REBEL token and initial distribution</li>
                  <li>
                    Building of the REBEL community through social media and
                    marketing efforts
                  </li>
                  <li>Initial development of the REBEL platform and dApp</li>
                </ul>
              </div>
              <div className="flex flx-row justify-center invisible">
                <img src={verticalLine} alt="" className="h-[710%]" />
              </div>
              <div
                className="roadmap-card-wrapper text-white text-sm md:text-[13px] lg:px-5 xl:px-7 py-6 lg:h-[220px] xl:h-[185px] -mt-[75px]"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="-mt-14 mb-9 -ml-4 text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 4
                </p>
                <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                  Scaling and Sustainability
                </span>
                <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                  <li>
                    Launch of payment system and expansion of partnerships
                  </li>
                  <li>
                    Continued development based on feedback and needs of the
                    community
                  </li>
                  <li>
                    Exploration of new use cases and applications for REBEL
                    technology
                  </li>
                  <li>
                    Development of a long-term sustainability plan for the REBEL
                    ecosystem.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-[8%] xl:w-[8%] py-16">
              <div
                className="flex flex-row items-center lg:h-[220px] xl:h-[185px]"
                data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="100"
              >
                <img src={line} alt="line" className="w-[100%]" />
              </div>
              <div>
                <img src={line} alt="line" className="w-[100%] invisible" />
              </div>
              <div
                className="flex flex-row items-center lg:h-[220px] xl:h-[185px]"
                data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="100"
              >
                <img src={line} alt="line" className="w-[100%]" />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[46%] xl:w-[46%] bg-phase2-3 py-16">
              <div
                className="roadmap-card-wrapper text-white text-sm md:text-[13px] lg:px-5 xl:px-7 py-6 lg:h-[220px] xl:h-[185px]"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="-mt-14 mb-9 -ml-4 text-white lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 2
                </p>
                <span className="text-white lg:text-[15px] xl:text-[18px]  roadmap-card-title">
                  Platform Development and Integration
                </span>
                <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4  raodmap-card-desc text-[12px] mb-0">
                  <li>
                    Launch of the REBEL dApp with staking and governance
                    features
                  </li>
                  <li>
                    Integration of additional functionalities such as a payment
                    system and the ability to convert REBEL tokens to virtual
                    visa cards
                  </li>
                  <li>
                    Formation of partnerships with other blockchain projects to
                    expand REBEL's reach and capabilities
                  </li>
                </ul>
              </div>
              <div
                className="flex flx-row justify-center"
                data-aos="zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="100"
              >
                <img src={verticalLine} alt="" className="h-[71%]" />
              </div>
              <div
                className="roadmap-card-wrapper text-white text-sm md:text-[13px] lg:px-5 xl:px-7 py-6 lg:h-[220px] xl:h-[185px] -mt-[75px]"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p className="-mt-14 mb-9 -ml-4 text-white  lg:text-[15px] xl:text-[18px] uppercase mb-3 ml-2 card-phase-count">
                  phase 3
                </p>
                <span className="text-white lg:text-[15px] xl:text-[18px] roadmap-card-title">
                  Optimization and Expansion
                </span>
                <ul className="list-disc pl-5 md:pl-5 lg:pl-5 lg:mt-2 xl:mt-4 raodmap-card-desc text-[12px] mb-0">
                  <li>
                    Continued development and optimization of the REBEL
                    platform, including enhancements to user experience and
                    security
                  </li>
                  <li>
                    Expansion of REBEL's marketing efforts to attract new users
                    and build the community Implementation of additional
                    features and functionalities based on feedback and needs of
                    the REBEL community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
