import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivType = {
  service4png?: string;
  riskManagement?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const Div: FunctionComponent<DivType> = ({
  service4png,
  riskManagement,
  propWidth,
  propWidth1,
}) => {
  const service4pngIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const riskManagementStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="w-[304px] flex flex-col items-start justify-start pt-[30px] pb-[15.9px] pr-[19.1px] pl-[19.2px] box-border gap-[44px] text-center text-base text-darkslategray-100 font-poppins mq450:gap-[22px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[65px] w-[86px] relative object-cover"
          loading="lazy"
          alt=""
          src={service4png}
          style={service4pngIconStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[11.1px]">
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[10.3px] pr-[33.9px] pl-[37px] text-5xl font-playfair-display">
          <h3
            className="m-0 w-[195px] relative text-inherit leading-[32px] capitalize font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[26px]"
            style={riskManagementStyle}
          >
            {riskManagement}
          </h3>
        </div>
        <div className="self-stretch relative leading-[26.72px] text-dimgray-100">
          Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore.
          epteur sint oat cupidatat
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-darkslategray-300">
          <div className="w-[89px] relative leading-[23px] capitalize flex items-center justify-center min-w-[89px] whitespace-nowrap">
            learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div;
