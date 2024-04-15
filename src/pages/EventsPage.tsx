import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Div3 from "../components/Div3";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import Section3 from "../components/Section3";
import FrameComponent7 from "../components/FrameComponent7";
import SectionnewProject from "../components/SectionnewProject";
import Section2 from "../components/Section2";

const EventsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full h-[3492px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[485.4px] box-border leading-[normal] tracking-[normal] mq450:h-auto">
      <Div3 onHomeTextClick={onHomeTextClick} />
      <FrameComponent9 />
      <FrameComponent8 />
      <Section3 />
      <FrameComponent7 />
      <SectionnewProject propWidth="unset" propAlignSelf="stretch" />
      <Section2 />
    </div>
  );
};

export default EventsPage;
