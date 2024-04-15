import { FunctionComponent } from "react";
import Div from "./Div";
import Div1 from "./Div1";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[121.6px] box-border max-w-full text-center text-base text-darkslategray-100 font-poppins mq450:pb-[79px] mq450:box-border">
      <div className="w-[1170px] flex flex-row items-start justify-between pt-0 px-[43px] pb-[15px] box-border gap-[20px] max-w-full mq1125:flex-wrap mq1125:justify-center mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
        <Div
          service4png="/service4png@2x.png"
          riskManagement="risk management"
        />
        <Div1
          service2png="/service5png@2x.png"
          busisnessConsultency="expert advisers"
          loremIpsumDoloDolorInInVo="Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore. epteur sint oat cupidatat"
          propWidth="63.2px"
          propGap="21.4px"
          propWidth1="171px"
          propGap1="11.1px"
          propMarginTop="unset"
        />
        <Div
          service4png="/service6png@2x.png"
          riskManagement="24/7 customer support"
          propWidth="59.3px"
          propWidth1="250px"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
