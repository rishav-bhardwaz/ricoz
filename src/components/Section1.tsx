import { FunctionComponent } from "react";

const Section1: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-ghostwhite-100 flex flex-col items-center justify-start pt-[148.9px] pb-0 pr-5 pl-[92px] box-border relative gap-[5px] max-w-full text-center text-11xl text-dimgray-400 font-playfair-display mq800:pl-[23px] mq800:pt-[97px] mq800:box-border mq450:pt-[63px] mq450:box-border mq1350:pl-[46px] mq1350:box-border">
      <h2 className="!m-[0] w-[409.9px] h-10 absolute top-[112px] right-[479px] text-inherit leading-[33px] capitalize font-bold font-inherit flex items-center justify-center mq800:text-5xl mq800:leading-[26px] mq450:text-lg mq450:leading-[20px]">
        what our client say about us
      </h2>
      <div className="w-[1140px] overflow-hidden flex flex-col items-end justify-end pt-[38px] px-[15.6px] pb-[37.8px] box-border relative gap-[26.6px] min-h-[496px] max-w-full z-[1] text-5xl text-gray-100 font-poppins">
        <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[34.29px] font-normal font-inherit mq450:text-lgi mq450:leading-[27px]">
          Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam..
        </h3>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-darkslategray-300">
          <div className="w-[165px] flex flex-col items-start justify-start gap-[8.4px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[33px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
              kevin watson
            </h3>
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[18.5px] text-lg text-gray-100">
              <div className="w-[126px] relative leading-[25px] capitalize font-medium inline-block min-w-[126px]">
                CEO, Kingston
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1730.6px] h-[380.9px] !m-[0] absolute top-[75.1px] left-[549.4px] flex flex-row items-start justify-start text-21xl text-lightsteelblue font-inter">
          <img
            className="h-[100px] w-[100px] absolute !m-[0] top-[0px] left-[-29.4px] rounded-31xl object-cover"
            loading="lazy"
            alt=""
            src="/testimonial1jpg@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-[100px] px-0 pb-0 box-border max-w-full z-[1]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[58px] px-0 box-border max-w-full">
              <div className="h-10 w-[1179.2px] flex flex-row items-start justify-start max-w-full">
                <h1 className="m-0 self-stretch w-10 relative text-inherit leading-[40px] font-normal font-inherit flex items-center justify-center mq800:text-13xl mq800:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
                  
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1140px] flex flex-row items-start justify-center pt-[5px] px-0 pb-[120px] box-border gap-[6px] max-w-full mq450:flex-wrap">
        <div className="h-[15px] w-[15px] relative rounded-5xs-5 bg-darkslategray-300 box-border border-[2px] border-solid border-darkslategray-300 mq450:w-full" />
        <div className="h-[15px] w-[15px] relative rounded-5xs-5 box-border border-[2px] border-solid border-lavender-200" />
        <div className="h-[15px] w-[15px] relative rounded-5xs-5 box-border border-[2px] border-solid border-lavender-200" />
      </div>
    </section>
  );
};

export default Section1;
