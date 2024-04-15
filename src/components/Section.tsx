import { FunctionComponent } from "react";
import DataFlowController from "./DataFlowController";

const Section: FunctionComponent = () => {
  return (
    <footer className="w-[1512px] bg-gray-200 flex flex-row items-start justify-between pt-[117px] px-[186px] pb-[99.1px] box-border max-w-[105%] shrink-0 gap-[20px] z-[1] text-left text-xl text-white font-playfair-display mq800:pt-[76px] mq800:px-[46px] mq800:pb-16 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[93px] mq1350:box-border">
      <div className="w-[307px] flex flex-col items-start justify-start pt-[59px] pb-0 pr-5 pl-0 box-border text-base text-darkgray font-poppins">
        <div className="w-[238.4px] relative leading-[22.86px] flex items-center">
          Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor
          utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[32px]">
        <div className="relative leading-[27px] capitalize font-medium inline-block min-w-[112px] mq450:text-base mq450:leading-[22px]">
          Useful Links
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-sm text-darkgray font-roboto">
          <div className="relative leading-[16px] capitalize inline-block min-w-[38px]">
            Home
          </div>
          <div className="relative leading-[16px] capitalize inline-block min-w-[38px]">
            About
          </div>
          <div className="relative leading-[16px] capitalize inline-block min-w-[70px]">
            Contact us
          </div>
        </div>
      </div>
      <DataFlowController />
    </footer>
  );
};

export default Section;
