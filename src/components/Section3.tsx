import { FunctionComponent } from "react";

const Section3: FunctionComponent = () => {
  return (
    <section className="ml-[-4px] mb-[63px] self-stretch bg-darkslategray-300 flex flex-row items-start justify-end py-[98px] px-[120px] box-border bg-[url('/public/section2@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[284px] max-w-full shrink-0 text-left text-13xl text-white font-poppins mq800:pl-[30px] mq800:pr-[30px] mq800:box-border mq1325:pl-[60px] mq1325:pr-[60px] mq1325:box-border">
      <div className="h-[284px] w-[1446px] relative bg-darkslategray-300 hidden max-w-full" />
      <div className="w-[1140px] flex flex-row flex-wrap items-start justify-center py-0 px-[15px] box-border gap-[30px] max-w-full z-[1]">
        <div className="h-[75px] flex flex-row items-start justify-start pt-0 pb-[18px] pr-[31px] pl-0 box-border gap-[28px]">
          <img
            className="h-[57px] w-[63px] relative object-cover"
            loading="lazy"
            alt=""
            src="/counter1png@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[10.7px]">
            <div className="relative leading-[45px] inline-block min-w-[61px] mq450:text-lgi mq450:leading-[27px] mq800:text-7xl mq800:leading-[36px]">
              1610
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
            <div className="relative leading-[45px] inline-block min-w-[59px] mq450:text-lgi mq450:leading-[27px] mq800:text-7xl mq800:leading-[36px]">
              205
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
            <div className="relative leading-[45px] inline-block min-w-[51px] mq450:text-lgi mq450:leading-[27px] mq800:text-7xl mq800:leading-[36px]">
              961
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
            <div className="relative leading-[45px] inline-block min-w-[60px] mq450:text-lgi mq450:leading-[27px] mq800:text-7xl mq800:leading-[36px]">
              539
            </div>
            <div className="relative text-xl leading-[28px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
              client satisfied
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
