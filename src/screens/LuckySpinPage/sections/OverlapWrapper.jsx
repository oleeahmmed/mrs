import React, { useState } from "react";
import { PrizeList } from "./PrizeList";
import { WinnerList } from "./WinnerList";
import { SpinWheel } from "./SpinWheel";

export const OverlapWrapper = ({ 
  prizeListData, 
  winnerListData, 
  wheelSegments, 
  spinsAvailable, 
  setSpinsAvailable,
  onSpinComplete
}) => {
  return (
    <div className="absolute w-[373px] h-[376px] top-[171px] left-0.5">
      <div className="relative h-[376px]">
        <div className="flex w-[373px] items-center justify-between absolute top-[105px] left-0">
          <div className="relative w-[102px] h-[163px] bg-[#ffffff1a] rounded-md overflow-hidden border-2 border-solid border-[#ffff84]">
            <div className="flex flex-col w-[86px] items-start gap-0.5 absolute top-1.5 left-2">
              <div className="relative self-stretch mt-[-1.00px] font-poppins font-medium text-white text-[10px] text-center tracking-[0] leading-normal">
                WINNER
              </div>
              <div className="relative w-[70px] h-3 bg-[#56565680] rounded-sm overflow-hidden border-[0.1px] border-solid border-white">
                <div className="absolute w-[29px] h-2.5 top-px left-px rounded-sm overflow-hidden bg-gradient-to-t from-[rgba(242,195,107,0)] to-[#DD8F1F]">
                  <div className="absolute top-[79px] left-[5px] font-poppins font-medium text-black text-[4px] tracking-[0] leading-normal">
                    Winning List
                  </div>
                </div>
                <div className="absolute top-[81px] left-[53px] font-poppins font-medium text-white text-[4px] tracking-[0] leading-normal">
                  Winning Record
                </div>
              </div>
            </div>
            <WinnerList winners={winnerListData} />
          </div>
          <div className="relative w-[102px] h-[163px] bg-[#ffffff1a] rounded-md overflow-hidden border-2 border-solid border-[#ffff84]">
            <div className="flex flex-col w-[86px] items-center gap-1 relative top-[9px] left-2">
              <div className="relative self-stretch mt-[-1.00px] font-poppins font-medium text-white text-[10px] text-center tracking-[0] leading-normal">
                PRIZE LIST
              </div>
              <PrizeList prizes={prizeListData} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[234px] items-center gap-5 absolute top-0 left-[69px]">
          <div className="relative self-stretch mt-[-1.00px] bg-gradient-to-t from-[rgba(242,195,107,0)] to-[#DD8F1F] bg-clip-text text-transparent font-gilroy font-bold text-[28px] text-center tracking-[0] leading-normal">
            LUCKY SPIN
          </div>
          <div className="flex flex-col items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[246.18px] h-[280px] mr-[-16.09px]">
              <SpinWheel 
                segments={wheelSegments}
                onSpinComplete={onSpinComplete}
                spinsAvailable={spinsAvailable}
                setSpinsAvailable={setSpinsAvailable}
              />
              <div className="absolute w-[152px] h-[68px] top-[212px] left-[37px]">
                <div className="absolute w-[152px] h-[34px] top-[34px] left-0 bg-[url(https://c.animaapp.com/mdfn2b29iC3wMU/img/vector-1.svg)] bg-cover">
                  <p className="absolute top-2.5 left-[17px] font-poppins font-semibold text-white text-[8px] tracking-[0] leading-normal">
                    You have <span className="text-[#F2C36B]">{spinsAvailable}</span> spin{spinsAvailable !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[266px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
              <button 
                className="flex w-[110px] items-center justify-center gap-4 px-[79px] py-1.5 relative rounded-md border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-gradient-to-t from-[rgba(242,195,107,0)] to-[#DD8F1F] hover:brightness-110 transition-all duration-300 active:scale-95"
                onClick={() => setSpinsAvailable(prev => prev + 1)}
              >
                <div className="relative w-fit mt-[-0.50px] ml-[-42.00px] mr-[-42.00px] font-poppins font-semibold text-black text-[8px] text-center tracking-[0] leading-normal">
                  1 Spin <br /> 10 Points
                </div>
              </button>
              <button 
                className="flex w-[110px] items-center justify-center gap-4 px-[79px] py-1.5 relative rounded-md border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-gradient-to-t from-[rgba(242,195,107,0)] to-[#DD8F1F] hover:brightness-110 transition-all duration-300 active:scale-95"
                onClick={() => setSpinsAvailable(prev => prev + 10)}
              >
                <div className="relative w-fit mt-[-0.50px] ml-[-47.50px] mr-[-47.50px] font-poppins font-semibold text-black text-[8px] text-center tracking-[0] leading-normal">
                  10 Spins <br /> 100 Points
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};