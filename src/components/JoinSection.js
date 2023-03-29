import React from "react";
import JoinSectionCard from "./common/JoinSectionCard";
import coin from "../../src/assets/images/section1-coin.png";
import community from "../../src/assets/images/section1-community.png";
import earn from "../../src/assets/images/section1-earn.png";
import staking from "../../src/assets/images/section1-staking.png";

const JoinSection = () => {
  return (
    <div className="w-full inline-block my-12 xl:my-16">
      <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div className="w-[100%]  lg:w-[75%] xl:w-[50%] flex flex-row justify-center items-center text-center mx-auto mb-6">
          <div
            className="text-[24px] md:text-[26px] text-white join-title"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="12000"
          >
            <span className="join-title-color px-1.5 text-[24px] md:text-[26px]">
              Join the Crypto Community:
            </span>
            Earn Opportunities and Connect with Like-Minded Enthusiasts!
          </div>
        </div>
        <div
          className="text-white w-[100%] lg:w-[90%]  xl:w-[80%] flex flex-row justify-center items-center text-center mx-auto text-[14px] md:text-[16px] font-light"
          data-aos="zoom-in"
        >
          Shilltok is a social media platform focused on the cryptocurrency
          space, providing a space for content creators, influencers, and
          enthusiasts to create, share, and discover engaging and informative
          content related to cryptocurrencies.
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 px-4 md:px-6">
          <div
            className="section1-card-inner"
            data-aos="fade-down-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <JoinSectionCard
              src={coin}
              title="Shilltok Coin"
              description="Holding $SHILLTOK on Shilltok allows you to post content and access exclusive benefits like staking, rewards, and more."
            />
          </div>
          <div className="section1-card-inner">
            <JoinSectionCard
              src={community}
              title="Verified Community"
              description="Access to exclusive verified community within Shilltok platform."
              dataAos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="12000"
            />
          </div>
          <div className="section1-card-inner">
            <JoinSectionCard
              src={staking}
              title="Staking"
              description="Participate in platform's governance and decision-making processes."
              dataAos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="12000"
            />
          </div>
          <div
            className="section1-card-inner"
            data-aos="fade-down-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <JoinSectionCard
              src={earn}
              title="Earn Rewards & Much More"
              description="Eligible for potential rewards within the platform."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
