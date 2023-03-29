import React from "react";
import { Tilt } from "react-tilt";
import payment from "../../src/assets/images/payment-image.png";

const PayementGateway = () => {
  return (
    <section className="w-full inline-block lg:-mt-24">
      <div className="px-6 md:px-12 lg:px-16 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-0">
          <div
            className="w-[100%] lg:w-[47%] flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="w-full xl:w-[100%] text-[26px] xl:text-[32px] mb-5 font-bold text-white">
              Get a payment gateway to use your Token online
            </h1>
            <span className="w-full text-[13px] xl:text-[15px]">
              Vestibulum porta, leo sed viverra egestas, eros dui lacinia ipsum,
              id pulvinar libero ligula id odio. Praesent scelerisque, est sed
              porttitor pretium, mauris turpis fringilla ipsum, in lacinia diam
              nisi eu augue. Duis luctus, enim nec efficitur pellentesque, odio
              lectus convallis nulla, vitae sollicitudin mauris velit in felis.
              Duis tempus congue augue ut dignissim. Vestibulum tincidunt metus
              vel malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
            </span>
          </div>
          <div className="w-[100%] lg:w-[47%] flex justify-center items-center">
            <Tilt className="Tilt" options={{ max: 50 }}>
              <img
                src={payment}
                alt="payment"
                className="w-[90%] md:w-[70%] lg:w-[100%] xl:w-[100%] h-auto"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayementGateway;
