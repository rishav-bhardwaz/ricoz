import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[114.3px] box-border max-w-full text-left text-11xl text-darkslategray-100 font-playfair-display mq800:pb-12 mq800:box-border mq1125:pb-[74px] mq1125:box-border">
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[49px] max-w-full mq800:gap-[24px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[62px] shrink-0 [debug_commit:f6aba90] mq800:gap-[15px] mq1350:gap-[31px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[1.7px] pr-[35px] pl-[15px] box-border gap-[27px] max-w-full">
            <h2 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              Our Finished Projects
            </h2>
            <div className="w-[378.9px] relative text-base leading-[22.86px] font-poppins text-gray-100 flex items-center max-w-full">
            Services We Deliver & Help You Implement For Success
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start pt-0 pb-0.5 pr-0 pl-[15px] box-border gap-[15px] max-w-full mq1125:flex-wrap">
              <img
                className="w-[360px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1125:flex-1"
                loading="lazy"
                alt=""
                src="/div1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[507px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[30px] pr-[69.4px] pl-[15px] box-border gap-[30px] max-w-full mq800:flex-wrap mq800:pr-[34px] mq800:box-border mq450:gap-[15px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-1@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-2@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[30px] pr-[69.4px] pl-[15px] box-border gap-[30px] max-w-full mq800:flex-wrap mq800:pr-[34px] mq800:box-border mq450:gap-[15px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-3@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-4@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer py-[18px] pr-[54px] pl-[55.8px] bg-darkslategray-300 w-[185px] box-border flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90] border-[1px] border-solid border-darkslategray-300 hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
            <div className="flex-1 relative text-sm tracking-[1.2px] leading-[16px] uppercase font-roboto text-white text-center inline-block min-w-[73.6px]">
              view all
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
