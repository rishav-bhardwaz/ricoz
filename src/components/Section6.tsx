import { FunctionComponent } from "react";

const Section6: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-darkslategray-300 flex flex-col items-end justify-start pt-[119px] px-[99px] pb-[164px] box-border bg-[url('/public/section3@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[381px] max-w-full shrink-0 text-center text-21xl text-white font-playfair-display mq450:pt-[77px] mq450:pb-[107px] mq450:box-border mq800:pl-6 mq800:pr-6 mq800:box-border mq1325:pl-[49px] mq1325:pr-[49px] mq1325:box-border">
      <div className="w-[1440px] h-[381px] relative bg-darkslategray-300 hidden max-w-full" />
      <div className="w-[1139.2px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[199px] relative text-inherit leading-[53px] capitalize font-bold font-inherit flex items-center justify-center z-[1] mq450:text-5xl mq450:leading-[32px] mq800:text-13xl mq800:leading-[42px]">
          contact us
        </h1>
      </div>
      <div className="w-[1140px] rounded flex flex-row items-end justify-center pt-2 px-0 pb-[10.6px] box-border gap-[4.8px] max-w-full z-[1] text-xl text-lavender-300 mq450:flex-wrap mq450:justify-center">
        <h3 className="m-0 w-[55px] relative text-inherit leading-[27px] capitalize font-medium font-inherit flex items-center justify-center min-w-[55px] mq450:text-base mq450:leading-[22px]">
          home
        </h3>
        <div className="w-[15px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border font-roboto">
          <h3 className="m-0 self-stretch relative text-inherit leading-[22px] font-normal font-inherit inline-block min-w-[15px] mq450:text-base mq450:leading-[18px]">
            //
          </h3>
        </div>
        <h3 className="m-0 w-[72px] relative text-inherit leading-[27px] capitalize font-medium font-inherit flex items-center justify-center min-w-[72px] mq450:text-base mq450:leading-[22px]">
          contact
        </h3>
      </div>
    </section>
  );
};

export default Section6;
