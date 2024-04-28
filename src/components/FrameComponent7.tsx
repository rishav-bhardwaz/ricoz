import { FunctionComponent } from "react";
import Div2 from "./Div2";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[66.9px] box-border max-w-full shrink-0 text-center text-11xl text-darkslategray-100 font-playfair-display mq800:pb-[43px] mq800:box-border">
      <div className="w-[1170px] flex flex-col items-end justify-start gap-[61.6px] max-w-full mq800:gap-[15px] mq1325:gap-[31px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[999.4px] flex flex-col items-start justify-start gap-[27px] shrink-0 [debug_commit:f6aba90]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
              <h2 className="m-0 w-[168px] relative text-inherit leading-[40px] capitalize font-bold font-inherit flex items-center justify-center mq450:text-lg mq450:leading-[24px] mq800:text-5xl mq800:leading-[32px]">
                what we do
              </h2>
            </div>
            <div className="self-stretch relative text-base leading-[28.8px] font-poppins text-gray-100">
            Services We Deliver & Help You Implement For Success
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-[15px] px-[15px] pb-0 gap-[30px] shrink-0 [debug_commit:f6aba90]">
          <Div2
            consultencypng="/consultencypng@2x.png"
            businessConsultancy="Business Consultancy"
            propPadding="unset"
            propHeight="60px"
            propWidth="61px"
            propColor="#44454f"
            propMinWidth="unset"
          />
          <Div2
            consultencypng="/busisness-growpng@2x.png"
            businessConsultancy="help to grow Business"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="50px"
            propColor="#44454f"
            propMinWidth="unset"
          />
          <Div2
            consultencypng="/supportlogopng@2x.png"
            businessConsultancy="great support"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="44px"
            propColor="#44454f"
            propMinWidth="128.4px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
