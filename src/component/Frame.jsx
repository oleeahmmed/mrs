import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[334px] items-start gap-[13px] absolute top-2.5 left-[21px]">
      <div className="flex flex-col w-[335px] items-center gap-1.5 relative flex-[0_0_auto] mr-[-1.00px]">
        <p className="relative self-stretch mt-[-1.00px] bg-gradient-to-b from-[#F2C36B] to-[#D99459] bg-clip-text text-transparent font-poppins font-medium text-sm text-center tracking-[0] leading-[16.8px]">
          Your current rank is Silver
        </p>
        <div className="relative w-[333px] h-[54px]">
          <div className="w-[335px] h-[54px]">
            <div className="relative w-[350px] h-[63px] left-[-3px]">
              {/* <img
                className="absolute w-[350px] h-[61px] top-0.5 left-0"
                alt="Rectangle"
                src="/images/rectangle-1622.svg"
              /> */}
              <img
                className="absolute w-[262px] h-[17px] top-[18px] left-[52px]"
                alt="Rectangle"
                src="/images/rectangle-1626.svg"
              />
              <img
                className="absolute w-[146px] h-[15px] top-[19px] left-[53px]"
                alt="Rectangle"
                src="/images/rectangle-1627.svg"
              />
              <img
                className="absolute w-[54px] h-[54px] top-0 left-[3px]"
                alt="Bronze"
                src="/images/bronze.png"
              />
              <p className="absolute top-5 left-[58px] font-inter font-semibold text-white text-[10px] text-center tracking-[0] leading-normal">
                Your points balance is 2,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[118px] h-[35px]">
        <div className="h-[35px]">
          <div className="relative w-[118px] h-[35px]">
            <div className="absolute w-[109px] h-[19px] top-2 left-[9px] rounded-[3px] overflow-hidden border border-solid border-[#d99023]">
              <div className="absolute top-1 left-8 font-poppins font-medium text-[#d99023] text-[8px] text-center tracking-[0] leading-[9.6px]">
                8,888
              </div>
            </div>
            <div className="absolute w-[38px] h-[35px] top-0 left-0">
              <div className="relative h-[35px]">
                <img
                  className="absolute w-[31px] h-8 top-0 left-2"
                  alt="Element"
                  src="/images/42-4.png"
                />
                <img
                  className="absolute w-[31px] h-[31px] top-1 left-0 object-cover"
                  alt="Element"
                  src="/images/60-3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};