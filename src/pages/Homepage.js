import React from "react";
import AOS from "aos";
import Hero from "../components/Hero";
import NavbarHomepage from "../components/NavbarHomepage";
import StakingCoin from "../components/StakingCoin";
import Tokenomics from "../components/Tokenomics";
import Faq from "../components/Faq";
// import FooterHomepage from "../components/FooterHomepage";
import PowerSection from "../components/PowerSection";
import PayementGateway from "../components/PaymentGateway";
import LaunchApp from "../components/LaunchApp";
import Roadmap from "../components/Roadmap";

const Homepage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <>
      <div className="overflow-body">
        <div className="hero-bg bg-test">
          <NavbarHomepage />
          <Hero />
          <PowerSection />
        </div>
        <StakingCoin />
        <PayementGateway />
        <Tokenomics />
        <Roadmap />
        <LaunchApp />
        <Faq />
        {/* <FooterHomepage /> */}
      </div>
    </>
  );
};

export default Homepage;
