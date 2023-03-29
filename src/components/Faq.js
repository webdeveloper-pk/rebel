import React from "react";
import { Collapse } from "antd";
import dropdown from "../../src/assets/images/dropdown.png";
import dropup from "../../src/assets/images/dropup.png";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <section className="w-full pt-6 pb-12">
      <div
        className="px-6 md:px-12 lg:px-16 homepage-container mx-auto"
        id="faq"
      >
        <div className="flex flex-row justify-center items-center text-center text-white uppercase">
          <div className="text-2xl font-light" data-aos="fade-down">
            Faqs
          </div>
        </div>
        <div
          className="mt-8 lg:mt-14 flex flex-col md:px-8  lg:px-20 xl:px-40"
          data-aos="zoom-in"
        >
          <div>
            <Collapse
              ghost
              // defaultActiveKey={["1"]}
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel header="What is Rebel Toke?" key="1">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white lowercase">
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel header="What is Rebel Toke?" key="1">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white  lowercase">
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel header="What is Rebel Toke?" key="1">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white  lowercase">
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel header="What is Rebel Toke?" key="1">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white  lowercase">
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel header="What is Rebel Toke?" key="1" className="">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white  lowercase">
                    Vestibulum porta, leo sed viverra egestas, eros dui lacinia
                    ipsum, id pulvinar libero ligula id odio. Praesent
                    scelerisque, est sed porttitor pretium, mauris turpis
                    fringilla ipsum, in lacinia diam nisi eu augue. Duis luctus,
                    enim nec efficitur pellentesque, odio lectus convallis
                    nulla, vitae sollicitudin mauris velit in felis. Duis tempus
                    congue augue ut dignissim. Vestibulum tincidunt metus vel
                    malesuada vulputate. Nulla lacinia arcu leo, vitae eleifend
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
