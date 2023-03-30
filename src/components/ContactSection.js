import React from "react";

const ContactSection = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-white uppercase text-2xl mb-4">Still Need help?</p>
          <button
            className="launch-btn1 text-white text-xl font-semibold py-5 px-14 rounded-[20px]"
            data-aos="zoom-in-down"
          >
            <span className="launch-btn2">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
