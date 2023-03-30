import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/header-logo.png";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-white px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div className="mx-auto lg:flex justify-between lg:items-start py-8">
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <Link to="/" data-aos="fade-right">
                <div
                  className="flex items-center uppercase text-white text-base xl:text-[20px] font-bold"
                  style={{ fontWeight: "700" }}
                >
                  <div className="mr-4">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[100px] lg:w-[90px] h-auto"
                    />
                  </div>
                  <div>
                    <div className="hidden lg:block flex justify-center items-center ml-8 xl:ml-16 lg:mt-3">
                      <ul className="flex flex-row items-cente lg:gap-x-12 xl:gap-x-12 text-[15px] lg:text-[13px] xl:text-[15px] uppercase">
                        <li
                          onClick={() => setNavbar(!navbar)}
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="600"
                        >
                          <a href="/">
                            <div className="btn btn-one">home</div>
                          </a>
                        </li>
                        <li
                          onClick={() => setNavbar(!navbar)}
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1000"
                        >
                          <a href="/">
                            <div className="btn btn-one">about</div>
                          </a>
                        </li>
                        <li
                          onClick={() => setNavbar(!navbar)}
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1400"
                        >
                          <a href="#faq">
                            <div className="btn btn-one">faq</div>
                          </a>
                        </li>
                        <li
                          onClick={() => setNavbar(!navbar)}
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="1900"
                        >
                          <a href="#tokenomics">
                            <div className="btn btn-one">how to buy</div>
                          </a>
                        </li>
                        <li
                          onClick={() => setNavbar(!navbar)}
                          data-aos="fade-down"
                          data-aos-easing="linear"
                          data-aos-duration="2400"
                        >
                          <a href="/">
                            <div className="btn btn-one">whitepapers</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="lg:hidden">
                <button
                  className="pt-2 text-light-white rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7 text-light-red"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7 text-light-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center items-center lg:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center justify-center h-[80vh] lg:h-[100%]">
                <div className="block lg:hidden">
                  <div>
                    <div className={`flex justify-center items-center $`}>
                      <ul
                        className="flex flex-col lg:flex-row items-center lg:gap-x-4 xl:gap-x-8 gap-y-3 text-sm lg:text-xs xl:text-sm uppercase"
                        data-aos="zoom-in"
                      >
                        <li
                          className="box-1"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <a href="/">
                            <div className="btn btn-one hover:text-light-red header-item1">
                              home
                            </div>
                          </a>
                        </li>
                        <li
                          className="box-1"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <a href="/">
                            <div className="btn btn-one hover:text-light-red header-item2">
                              about
                            </div>
                          </a>
                        </li>
                        <li
                          className="box-1"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <a href="/">
                            <div className="btn btn-one hover:text-light-red header-item3">
                              faq
                            </div>
                          </a>
                        </li>
                        <li
                          className="box-1"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <a href="#tokenomics">
                            <div className="btn btn-one hover:text-light-red header-item4">
                              how to buy
                            </div>
                          </a>
                        </li>
                        <li
                          className="box-1"
                          onClick={() => setNavbar(!navbar)}
                        >
                          <a href="/">
                            <div className="btn btn-one hover:text-light-red header-item6">
                              whitepapers
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="navbar-btn1 text-white text-[15px] lg:text-[13px] xl:text-[15px] font-semibold py-4 xl:py-5 px-7 lg:px-5 xl:px-12 uppercase mt-6 lg:mt-1"
                    data-aos="fade-left"
                  >
                    <span className="navbar-btn2">Launch dapp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHomepage;
