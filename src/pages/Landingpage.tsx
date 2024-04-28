import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Div3 from "../components/Div3";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Section1 from "../components/Section1";
import SectionnewProject from "../components/SectionnewProject";
import Section from "../components/Section";

const Landingpage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/frame-1171275276");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-1171275277");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Div3
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
      />
      <FrameComponent6 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[61.6px] box-border max-w-full text-center text-11xl text-white font-playfair-display">
        <div className="w-[999.4px] flex flex-col items-start justify-start gap-[27px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
            <h2 className="m-0 w-[168px] relative text-inherit leading-[40px] capitalize font-bold font-inherit flex items-center justify-center mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              what we do
            </h2>
          </div>
          <div className="self-stretch relative text-base leading-[32px] font-poppins text-gray-100">
          We work with ambitious brands to ideate, design & build million-dollar businesses powered by beautifully designed and engineered software and technological solutions.
          </div>
        </div>
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Section1 />
      <SectionnewProject />
      <Section />
    </div>
  );
};

export default Landingpage;
