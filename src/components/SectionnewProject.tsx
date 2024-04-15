import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SectionnewProjectType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const SectionnewProject: FunctionComponent<SectionnewProjectType> = ({
  propWidth,
  propAlignSelf,
}) => {
  const sectionnewProjectStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <section
      className="w-[1512px] bg-darkslategray-300 flex flex-row items-start justify-between py-[72px] pr-[190px] pl-[186px] box-border max-w-[105%] shrink-0 gap-[20px] text-left text-11xl text-white font-poppins mq800:pl-[46px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[95px] mq1350:box-border"
      style={sectionnewProjectStyle}
    >
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <h2 className="m-0 relative text-inherit leading-[42px] capitalize font-medium font-inherit mq800:text-5xl mq800:leading-[34px] mq450:text-lg mq450:leading-[25px]">
          Want to start a new project with us? Let’s Start!
        </h2>
      </div>
      <button className="cursor-pointer pt-[19px] pb-[19.6px] pr-[41px] pl-[42px] bg-[transparent] flex flex-row items-start justify-start border-[1px] border-solid border-white hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
        <b className="relative text-smi leading-[16px] uppercase inline-block font-lato text-white text-left min-w-[76px]">
          start now
        </b>
      </button>
    </section>
  );
};

export default SectionnewProject;
