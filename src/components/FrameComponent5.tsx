import { FunctionComponent } from "react";
import Div2 from "./Div2";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[40.9px] box-border max-w-full text-center text-xl text-white font-playfair-display mq450:pb-[27px] mq450:box-border">
      <div className="w-[1170px] flex flex-row flex-wrap items-start justify-center pt-[15px] px-[15px] pb-0 box-border gap-[30px] max-w-full">
        <Div2
          consultencypng="/consultencypng@2x.png"
          businessConsultancy="SaaS Development"
        />
        <Div2
          consultencypng="/busisness-growpng@2x.png"
          businessConsultancy="help to grow Business"
          propPadding="0px 0px 9.5px"
          propHeight="50px"
          propWidth="50px"
          propColor="#fff"
          propMinWidth="unset"
        />
        <Div2
          consultencypng="/supportlogopng@2x.png"
          businessConsultancy="great support"
          propPadding="0px 0px 9.5px"
          propHeight="50px"
          propWidth="44px"
          propColor="#fff"
          propMinWidth="128.4px"
        />
      </div>
    </section>
  );
};

export default FrameComponent5;
