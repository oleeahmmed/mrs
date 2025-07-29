import React from "react";
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
          {/* Winner List Section */}
          <div className="relative w-[102px] h-[163px] rounded-md overflow-hidden border-2 border-solid" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'var(--color-primary)' }}>
            <div className="flex flex-col w-[86px] items-start gap-0.5 absolute top-1.5 left-2">
              <div className="relative self-stretch mt-[-1.00px] font-poppins font-medium text-center tracking-[0] leading-normal" style={{ color: 'var(--color-text-white)' }}>
                WINNER
              </div>
              <div className="relative w-[70px] h-3 rounded-sm overflow-hidden border-[0.1px] border-solid" style={{ backgroundColor: 'rgba(86, 86, 86, 0.5)', borderColor: 'var(--color-text-white)' }}>
                <div className="absolute w-[29px] h-2.5 top-px left-px rounded-sm overflow-hidden gradient-gold-vertical">
                  <div className="absolute top-[79px] left-[5px] font-poppins font-medium text-[4px] tracking-[0] leading-normal" style={{ color: 'var(--color-text-black)' }}>
                    Winning List
                  </div>
                </div>
                <div className="absolute top-[81px] left-[53px] font-poppins font-medium text-[4px] tracking-[0] leading-normal" style={{ color: 'var(--color-text-white)' }}>
                  Winning Record
                </div>
              </div>
            </div>
            <WinnerList winners={winnerListData} />
          </div>

          {/* Prize List Section */}
          <div className="relative w-[102px] h-[163px] rounded-md overflow-hidden border-2 border-solid" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'var(--color-primary)' }}>
            <div className="flex flex-col w-[86px] items-center gap-1 relative top-[9px] left-2">
              <div className="relative self-stretch mt-[-1.00px] font-poppins font-medium text-center tracking-[0] leading-normal" style={{ color: 'var(--color-text-white)' }}>
                PRIZE LIST
              </div>
              <PrizeList prizes={prizeListData} />
            </div>
          </div>
        </div>

        {/* Lucky Spin Section */}
        <div className="flex flex-col w-[234px] items-center gap-5 absolute top-0 left-[69px]">
          <div className="relative self-stretch mt-[-1.00px] gradient-gold-vertical bg-clip-text text-transparent font-gilroy font-bold text-[28px] text-center tracking-[0] leading-normal">
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
                <div className="absolute w-[152px] h-[34px] top-[34px] left-0 bg-[url(/images/vector-1548.svg)] bg-cover">
                  <p className="absolute top-2.5 left-[17px] font-poppins font-semibold text-[8px] tracking-[0] leading-normal" style={{ color: 'var(--color-text-white)' }}>
                    You have <span style={{ color: 'var(--color-primary)' }}>{spinsAvailable}</span> spin{spinsAvailable !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[266px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
              <button
                className="flex w-[110px] items-center justify-center gap-4 px-[79px] py-1.5 relative rounded-md border-[0.5px] border-solid shadow-button gradient-gold-button hover:brightness-110 transition-all duration-300 active:scale-95"
                style={{ borderColor: 'var(--color-border-white-40)' }}
                onClick={() => setSpinsAvailable(prev => prev + 1)}
              >
                <div className="relative w-fit mt-[-0.50px] ml-[-42.00px] mr-[-42.00px] font-poppins font-semibold text-[8px] text-center tracking-[0] leading-normal" style={{ color: 'var(--color-text-black)' }}>
                  1 Spin <br /> 10 Points
                </div>
              </button>
              <button
                className="flex w-[110px] items-center justify-center gap-4 px-[79px] py-1.5 relative rounded-md border-[0.5px] border-solid shadow-button gradient-gold-button hover:brightness-110 transition-all duration-300 active:scale-95"
                style={{ borderColor: 'var(--color-border-white-40)' }}
                onClick={() => setSpinsAvailable(prev => prev + 10)}
              >
                <div className="relative w-fit mt-[-0.50px] ml-[-47.50px] mr-[-47.50px] font-poppins font-semibold text-[8px] text-center tracking-[0] leading-normal" style={{ color: 'var(--color-text-black)' }}>
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
