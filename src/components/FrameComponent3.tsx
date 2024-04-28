import { FunctionComponent } from "react";
import Div1 from "./Div1";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[60px] box-border max-w-full text-center text-11xl text-darkslategray-100 font-playfair-display mq800:pb-[39px] mq800:box-border">
      <div className="w-[1170px] flex flex-col items-end justify-start gap-[43.6px] max-w-full mq800:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[999.4px] flex flex-col items-start justify-start gap-[27px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h2 className="m-0 w-[178px] relative text-inherit leading-[40px] capitalize font-bold font-inherit flex items-center justify-center mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
                our services
              </h2>
            </div>
            <div className="self-stretch relative text-base leading-[28.8px] font-poppins text-gray-100">
            Services We Deliver & Help You Implement For Success
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-[43px] pb-[15px] gap-[20px] text-5xl mq1125:flex-wrap mq1125:justify-center mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
          <div className="w-[304px] flex flex-col items-start justify-start pt-[30px] pb-[15.9px] pr-[19.1px] pl-[19.2px] box-border gap-[44px] mq450:gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <img
                className="h-[65px] w-[50.7px] relative object-cover"
                loading="lazy"
                alt=""
                src="/service1png@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start">
              <div className="self-stretch flex flex-col items-end justify-start gap-[8.4px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[27.1px] pl-[29px]">
                  <h3 className="m-0 w-[210px] relative text-inherit leading-[32px] capitalize font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[26px]">
                    SaaS Development
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[26.72px] font-poppins text-dimgray-100">
                  Lorem ipsum dolo dolor in in voluptate velit esse cillum
                  dolore. epteur sint oat cupidatat Businmes
                </div>
              </div>
            </div>
          </div>
          <Div1
            service2png="/service2png@2x.png"
            busisnessConsultency="Web Development"
            loremIpsumDoloDolorInInVo="Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat cupidatat consultancy"
          />
          <Div1
            service2png="/service3png@2x.png"
            busisnessConsultency="Mobile Application Development"
            loremIpsumDoloDolorInInVo="Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat cupidatat"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
