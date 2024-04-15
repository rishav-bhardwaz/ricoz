import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Div1Type = {
  service2png?: string;
  busisnessConsultency?: string;
  loremIpsumDoloDolorInInVo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propGap1?: CSSProperties["gap"];
  propMarginTop?: CSSProperties["marginTop"];
};

const Div1: FunctionComponent<Div1Type> = ({
  service2png,
  busisnessConsultency,
  loremIpsumDoloDolorInInVo,
  propWidth,
  propGap,
  propWidth1,
  propGap1,
  propMarginTop,
}) => {
  const service2pngIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const busisnessConsultencyStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className="w-[304px] flex flex-col items-start justify-start pt-[30px] pb-[15.9px] pr-[19.1px] pl-[19.2px] box-border gap-[44px] text-center text-5xl text-darkslategray-100 font-playfair-display mq450:gap-[22px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[65px] w-[56.1px] relative object-cover"
          loading="lazy"
          alt=""
          src={service2png}
          style={service2pngIconStyle}
        />
      </div>
      <div
        className="self-stretch flex flex-col items-end justify-start gap-[8.4px]"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[8.7px] pl-[9px]">
          <h3
            className="m-0 w-[248px] relative text-inherit leading-[32px] capitalize font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[26px]"
            style={busisnessConsultencyStyle}
          >
            {busisnessConsultency}
          </h3>
        </div>
        <div
          className="self-stretch flex flex-col items-end justify-start text-base text-dimgray-100 font-poppins"
          style={frameDiv1Style}
        >
          <div className="self-stretch relative leading-[26.72px]">
            {loremIpsumDoloDolorInInVo}
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] mt-[-1.9px] text-darkslategray-300"
            style={frameDiv2Style}
          >
            <div className="w-[89px] relative leading-[23px] capitalize flex items-center justify-center min-w-[89px] whitespace-nowrap">
              learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div1;
