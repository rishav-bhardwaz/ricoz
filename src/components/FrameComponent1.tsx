import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[46px] box-border max-w-full text-left text-13xl text-white font-poppins">
      <div className="h-[284px] flex-1 relative bg-[url('/public/section@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq1125:h-auto mq1125:min-h-[284]">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-darkslategray-300 w-[1512px]" />
        <div className="absolute top-[98px] left-[186px] w-[1140px] flex flex-row flex-wrap items-start justify-start py-0 px-[15px] box-border gap-[30px] max-w-full z-[1]">
          <div className="h-[75px] flex flex-row items-start justify-start pt-0 pb-[18px] pr-[31px] pl-0 box-border gap-[28px]">
            <img
              className="h-[57px] w-[63px] relative object-cover"
              loading="lazy"
              alt=""
              src="/counter1png@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[10.7px]">
              <div className="relative leading-[45px] inline-block min-w-[79px] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                2044
              </div>
              <div className="relative text-xl leading-[28px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
                days worked
              </div>
            </div>
          </div>
          <div className="h-[75px] flex flex-row items-start justify-start pt-0 pb-[15px] pr-[9px] pl-0 box-border gap-[28px]">
            <img
              className="h-[60px] w-[60px] relative object-cover"
              loading="lazy"
              alt=""
              src="/counter2png@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[10.7px]">
              <div className="relative leading-[45px] inline-block min-w-[59px] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                260
              </div>
              <div className="relative text-xl leading-[28px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
                project finished
              </div>
            </div>
          </div>
          <div className="h-[75px] flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[28px] min-w-[166px]">
            <img
              className="h-[60px] w-[59px] relative object-cover"
              loading="lazy"
              alt=""
              src="/counter3png@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[10.7px]">
              <div className="w-[88px] relative leading-[45px] flex items-center box-border pr-5 mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                1220
              </div>
              <div className="relative text-xl leading-[28px] capitalize font-medium inline-block min-w-[114px] mq450:text-base mq450:leading-[22px]">
                coffee cup
              </div>
            </div>
          </div>
          <div className="h-[75px] flex flex-row items-start justify-start pt-0 pb-[15px] pr-4 pl-0 box-border gap-[28px]">
            <img
              className="h-[60px] w-[60px] relative object-cover"
              loading="lazy"
              alt=""
              src="/counter4png@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[10.7px]">
              <div className="relative leading-[45px] inline-block min-w-[51px] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                681
              </div>
              <div className="relative text-xl leading-[28px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
                client satisfied
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
