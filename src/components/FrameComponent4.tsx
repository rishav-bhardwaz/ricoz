import { FunctionComponent } from "react";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[118px] box-border max-w-full text-left text-11xl text-dimgray-400 font-playfair-display mq1125:pb-[77px] mq1125:box-border mq450:pb-[50px] mq450:box-border">
      <div className="flex-1 bg-ghostwhite-100 flex flex-row items-end justify-center pt-[120px] pb-[175px] pr-[114px] pl-[186px] box-border gap-[84px] max-w-full mq800:gap-[21px] mq800:pt-[78px] mq800:pb-[114px] mq800:pr-7 mq800:pl-[46px] mq800:box-border mq1125:flex-wrap mq450:pl-5 mq450:box-border mq1350:gap-[42px] mq1350:pl-[93px] mq1350:pr-[57px] mq1350:box-border">
        <div className="w-[501px] flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border min-w-[501px] min-h-[327px] max-w-full mq1125:flex-1 mq1125:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h2 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit inline-block min-w-[124px] mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              about us
            </h2>
            <div className="self-stretch flex flex-col items-start justify-start gap-[31.9px] text-base text-gray-100 font-poppins mq800:gap-[16px]">
              <div className="self-stretch relative leading-[27.2px]">
                About Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse.
              </div>
              <button className="cursor-pointer py-[18px] pr-[38px] pl-[40.2px] bg-darkslategray-300 w-[185px] box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkslategray-300 hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                <div className="flex-1 relative text-sm tracking-[1.2px] leading-[16px] uppercase font-roboto text-white text-center inline-block min-w-[104.8px]">
                  learn more
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[426px] flex-1 relative bg-[url('/public/aboutpartjpg@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[361px] max-w-full z-[2] text-sm text-darkslategray-200 font-roboto mq800:min-w-full">
          <div className="absolute top-[55px] left-[-23px] box-border w-full h-full border-[3px] border-solid border-lavender-100" />
          <div className="absolute top-[58px] left-[-20px] leading-[20px] flex items-center w-full h-full" />
          <img
            className="absolute top-[calc(50%_-_213px)] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="/aboutpartjpg@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
