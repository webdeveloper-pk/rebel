import React from "react";
import PowerCard from "./common/PowerCard";
import freedom from "../assets/images/power-freedom.png";
import dao from "../assets/images/power-dao.png";
import privacy from "../assets/images/power-privacy.png";
import visa from "../assets/images/power-visa.png";
import staking from "../assets/images/power-staking.png";
import rebel from "../assets/images/power-rebel.png";

const PowerSection = () => {
  return (
    <div className="text-white px-6 md:px-12 lg:px-16 pt-4 pb-12 homepage-container mx-auto">
      <div className="flex flex-row justify-center text-center text-[24px] text-white uppercase">
        power to people
      </div>
      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8">
        <div className="power-card-wrapper">
          <PowerCard
            src={freedom}
            width="52px"
            title="Financial Freedom"
            description="A token for greater economic independence"
            dataAos="fade-right"
          />
        </div>
        <div className="power-card-wrapper">
          <PowerCard
            src={dao}
            width="52px"
            title="DAO"
            description="Participate in platfomr decision through DAO voting."
            dataAos="fade-up"
          />
        </div>
        <div className="power-card-wrapper">
          <PowerCard
            src={privacy}
            width="40px"
            title="Financial Privacy"
            description="Enjoy greater financial privacy and control"
            dataAos="fade-left"
          />
        </div>
        <div className="power-card-wrapper">
          <PowerCard
            src={visa}
            width="52px"
            title="VISA Cards"
            description="Convert $REBEL tokens to virtual Visa Vards for convernient paymnet."
            dataAos="fade-right"
          />
        </div>
        <div className="power-card-wrapper">
          <PowerCard
            src={staking}
            width="48px"
            title="Staking"
            description="Earn Rewards for staking and supporting platfomr growth."
            dataAos="fade-up"
          />
        </div>
        <div className="power-card-wrapper">
          <PowerCard
            src={rebel}
            width="52px"
            title="Rebel HQ"
            description="Connect with other $REBEL holders and contribute to platform growth."
            dataAos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerSection;
