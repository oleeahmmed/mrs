import React, { useState } from "react";

import { Header, Footer } from "../../component";

const VipBronzePage = () => {
  const [currentRank] = useState("Silver"); // State for the current rank

  // Data for VIP tiers
  const tiers = [
    { name: "Bronze", image: "/images/bronze.png", deposit: "1 DEPOSIT TICKET", rate: "10.00%", bonus: "RM18" },
    { name: "Silver", image: "/images/v2.png", deposit: "RM750", rate: "10.50%", bonus: "RM38" },
    { name: "Gold", image: "/images/gold.png", deposit: "RM3,750", rate: "11.00%", bonus: "RM58" },
    { name: "Platinum", image: "/images/plat.png", deposit: "RM15,000", rate: "11.50%", bonus: "RM88" },
    { name: "Diamond", image: "/images/diamond.png", deposit: "RM52,000", rate: "12.00%", bonus: "RM138" },
    { name: "Royal", image: "/images/royal.png", deposit: "RM112,000", rate: "12.50%", bonus: "-------" },
  ];

  // Additional tiers for the table
  const additionalTiers = [
    { deposit: "RM225,000", rate: "13.00%", bonus: "-------" },
    { deposit: "RM450,000", rate: "13.50%", bonus: "-------" },
    { deposit: "RM1,050,000", rate: "14.00%", bonus: "-------" },
  ];

  // Terms and conditions
  const terms = [
    "Credit cannot mixed with other deposits and bonuses.",
    "1 Member / 1 ID / 1 Name can only participate in this Lucky Spin Event.",
    "Only slot games are allowed.",
    "The name on the bank account must match the registered name. If they do not match or if the bank account number is incorrect, all winnings will be forfeited."
  ];

  return (
    // The main container now uses min-h-screen to ensure it's at least as tall as the viewport.
    // It's also a flex column to push the footer to the bottom if content is short.
    // The width is fixed to 375px as per your other pages.
    <div className="bg-[#070707] w-[375px] min-h-screen flex flex-col relative mx-auto">
      {/* Header component, absolutely positioned at the top */}
      <Header />

      {/* Main content area. flex-grow allows it to take up available space. */}
      {/* Top padding accounts for the fixed header. Bottom padding accounts for the footer. */}
      {/* No overflow-y-auto here, so the browser's scrollbar will handle overflow. */}
      <div className="flex-grow w-full px-4 pt-[110px] pb-[90px]">
        {/* VIP Header Section */}
        <div className="flex flex-col items-center gap-[74px] w-full">
          <div className="flex w-full max-w-[344px] items-center justify-between mx-auto">
            <div className="flex flex-col items-center">
              {/* VIP text with gradient */}
              <div className="bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-extrabold text-[80px] leading-[80px] transition-all duration-500 hover:scale-105">
                VIP
              </div>
              {/* Reward System text */}
              <div className="text-[#ffffff99] text-sm text-center font-extrabold">
                REWARD SYSTEM
              </div>
            </div>
            {/* Casino elements image */}
            <img
              className="w-[155px] h-[146.62px] transition-transform duration-500 hover:rotate-12"
              alt="Casino elements"
              src="/images/3d-rendering-casino-elements-1.png"
            />
          </div>

          {/* Rank Progress Section */}
          <div className="flex flex-col items-center gap-11 w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              {/* Current rank display */}
              <p className="w-full bg-[linear-gradient(180deg,rgba(242,195,107,1)_0%,rgba(217,148,89,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium text-sm text-center">
                Your current rank is {currentRank}
              </p>

              {/* Rank Progress Bar */}
              <div className="relative w-full h-[73px] mt-2">
                {/* Progress bar line */}
                <div className="absolute w-[90%] h-1 top-[34px] left-[5%] bg-[linear-gradient(90deg,rgba(243,168,29,0.5)_0%,rgba(141,97,17,0.41)_100%)]" />
                
                {/* Tier images and names */}
                <div className="absolute w-full h-[73px] top-0 left-0">
                  {/* Pointer for current rank - adjust left position as needed */}
                  <img
                    className="absolute w-1.5 h-2 top-0.5 left-[calc(16.66%*1.5)]" // Example: Adjust based on actual rank position
                    alt="Pointer"
                    src="/images/polygon-1.svg"
                  />

                  <div className="inline-flex items-start gap-6 absolute top-[15px] left-0 w-full justify-between px-4">
                    {tiers.map((tier, index) => (
                      <div key={index} className="flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110">
                        <img
                          className={`h-[40px] object-contain ${tier.name === currentRank ? 'scale-110' : ''}`}
                          alt={tier.name}
                          src={tier.image}
                        />
                        <div className={`text-[10px] text-center ${tier.name === currentRank ? 'bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium' : 'text-[#ffffffcc]'}`}>
                          {tier.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tier Table */}
            <div className="flex flex-col p-2.5 w-full rounded-[14px] border-[0.5px] border-solid border-[#e4e6e580] transition-all duration-300 hover:border-[#f2c36b] overflow-hidden">
              {/* Table Header */}
              <div className="flex w-full h-[49px] items-center justify-between p-[12px] rounded-t-[10px] border-b-[0.5px] border-[#e4e6e580] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)]">
                <div className="w-1/4 font-medium text-[#F2C36B] text-[10px]">Tier Level</div>
                <div className="w-1/4 font-medium text-[#F2C36B] text-[10px]">DEPOSIT REQUIREMENT</div>
                <div className="w-1/4 font-medium text-[#F2C36B] text-[10px]">MRS POINTS RATE</div>
                <div className="w-1/4 font-medium text-[#F2C36B] text-[10px] text-right">Weekly Bonus</div>
              </div>

              {/* Tier Rows */}
              {tiers.map((tier, index) => (
                <div key={index} className="flex w-full h-[49px] items-center justify-between p-[12px] border-t-[0.5px] border-[#e4e6e533] transition-all duration-300 hover:bg-[#ffffff0a]">
                  <div className="w-1/4">
                    <img
                      className="w-[22px] h-[22px] transition-transform duration-300 hover:scale-125"
                      alt={tier.name}
                      src={tier.image}
                    />
                  </div>
                  <div className="w-1/4 font-normal text-white text-[8px]">{tier.deposit}</div>
                  <div className="w-1/4 font-normal text-white text-[8px]">{tier.rate}</div>
                  <div className="w-1/4 font-normal text-white text-[8px] text-right">{tier.bonus}</div>
                </div>
              ))}

              {/* Additional Tier Rows */}
              {additionalTiers.map((tier, index) => (
                <div key={index} className="flex w-full h-[49px] items-center justify-between p-[12px] border-t-[0.5px] border-[#e4e6e533] transition-all duration-300 hover:bg-[#ffffff0a]">
                  <div className="w-1/4"></div> {/* Empty div for alignment */}
                  <div className="w-1/4 font-normal text-white text-[8px]">{tier.deposit}</div>
                  <div className="w-1/4 font-normal text-white text-[8px]">{tier.rate}</div>
                  <div className="w-1/4 font-normal text-white text-[8px] text-right">{tier.bonus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="mt-[54px] w-full max-w-[346px] mx-auto relative pb-[20px]">
          {/* Terms content box */}
          <div className="w-full h-[135px] p-4 rounded-lg overflow-hidden border-[0.5px] border-solid border-[#ffffff1a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.1)_100%)]">
            <div className="flex flex-col gap-1.5 mt-4">
              {terms.map((term, index) => (
                <div key={index} className="flex items-start gap-[3px]">
                  <img
                    className="w-3.5 h-3.5 mt-0.5"
                    alt="Bullet"
                    src="/images/frame.svg"
                  />
                  <p className="font-medium text-white text-[8px]">{term}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* "Terms & Conditions" title box */}
          <div className="absolute top-0 left-0 flex items-center justify-center px-4 py-1.5 rounded-md border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.3)_100%)] transition-all duration-300 hover:shadow-[inset_-2px_-2px_10px_#00000066,1px_4px_15px_#0000001a]">
            <div className="font-medium text-[#F2C36B] text-[10px] text-center whitespace-nowrap">
              Terms &amp; Conditions
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer component, absolutely positioned at the bottom */}
      <Footer />
    </div>
  );
};

export default VipBronzePage;
