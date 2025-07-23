import React from 'react';

export const WinnerList = ({ winners }) => {
  return (
    <div className="flex flex-col w-[80px] items-start gap-2 absolute top-[47px] left-[11px] max-h-[100px] overflow-y-auto">
      {winners.map((winner, index) => (
        <div key={index} className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[78px] mt-[-1.00px] mr-[-19.00px] font-poppins font-medium text-[#ffffff99] text-[6px] tracking-[0] leading-normal">
            {winner.date}
          </div>
          <div className="relative w-[78px] mr-[-19.00px] font-poppins font-medium text-white text-[6px] tracking-[0] leading-normal">
            {winner.user}
          </div>
          <div className="relative w-[78px] mr-[-19.00px] bg-gradient-to-t from-[rgba(242,195,107,0)] to-[#DD8F1F] bg-clip-text text-transparent font-poppins font-medium text-[6px] tracking-[0] leading-normal">
            {winner.prize}
          </div>
        </div>
      ))}
    </div>
  );
};