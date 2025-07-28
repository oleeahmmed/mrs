import React from "react";

export const FrameWrapper = () => {
  return (
    <div className="absolute w-[375px] h-[677px] top-0 left-0 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(77,77,77,0.1)_0%,rgba(77,77,77,0.1)_100%)]">
      <div className="relative w-[311px] h-[606px] top-9 left-8 bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="relative w-[277px] h-[584px] top-[13px] left-[21px]">
          <div className="flex flex-col w-[19px] items-center justify-center gap-[6.33px] px-[3.17px] py-[6.33px] absolute top-0 left-[258px] bg-[#f2c36b2e] rounded-[4.43px] shadow-[0px_0.63px_1.27px_#0000001a,0px_1.9px_1.9px_#00000017,0px_4.43px_2.53px_#0000000d,0px_8.23px_3.17px_#00000003,0px_13.3px_3.8px_transparent]">
            <img
              className="relative w-[8.23px] h-[8.23px] mt-[-0.95px] mb-[-0.95px]"
              alt="Vector"
              src="/images/vector-3.svg"
            />
          </div>

          <div className="flex flex-col w-[269px] items-end gap-[22px] absolute top-2.5 left-0">
            <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5 overflow-hidden">
                    <div className="relative h-[9px] top-0.5 bg-[url(/images/vector-1.svg)] bg-[100%_100%]" />
                  </div>

                  <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-center leading-[21px] whitespace-nowrap relative font-medium text-white text-sm tracking-[0]">
                    Tournament Name&nbsp;&nbsp;&nbsp;&nbsp; :
                  </div>
                </div>

                <div className="flex items-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5">
                    <div className="w-[13px] h-[13px] bg-[url(/images/vector.svg)] bg-[100%_100%]" />
                  </div>

                  <p className="relative w-[250px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px]">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px]">
                      Start -
                      End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    </span>

                    <span className="underline">
                      Jun 25, 2025 - Jul 5, 2025
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5">
                    <div className="relative w-3 h-3.5 left-px bg-[url(/images/vector-4.svg)] bg-[100%_100%]" />
                  </div>

                  <p className="relative w-[250px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-transparent text-xs tracking-[0] leading-[18px]">
                    <span className="text-white">
                      Prize
                      Pool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    </span>

                    <span className="text-[#ef8b00] text-base leading-6">
                      50,000
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative w-[29px] h-1 rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                      Your Status
                    </div>

                    <div className="relative w-[29px] h-1 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />
                  </div>

                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                    Your Rank: #14 <br />
                    Your Score: 8,750 pts <br />
                    You need 500 pts to reach Top 10!
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[196px] items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative w-[29px] h-1 rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                      Leaderboard (Top 5)
                    </div>

                    <div className="relative w-[29px] h-1 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />
                  </div>

                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                    1. LuckyMaster21 – 15,350 pts <br />
                    2. SpinKing88 – 12,940 pts <br />
                    3. MegaWinZone – 11,500 pts <br />
                    4. FastFinger2025 – 10,420 pts <br />
                    5. LadyLuck777 – 9,980 pts
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative w-[29px] h-1 rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                      Rules Summary
                    </div>

                    <div className="relative w-[29px] h-1 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />
                  </div>

                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                    Play Lucky Spin to earn points. <br />
                    Min. 100 bets required to qualify. <br />
                    No multiple accounts allowed.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[188px] items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative w-[29px] h-1 rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                      Reward Breakdown
                    </div>

                    <div className="relative w-[29px] h-1 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(221,143,31,1)_100%)]" />
                  </div>

                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px]">
                    🥇 1st – ৳50,000&nbsp;&nbsp; <br />🥈 2nd –
                    ৳30,000&nbsp;&nbsp; <br />🥉 3rd – ৳20,000&nbsp;&nbsp;{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; 4th–10th – ৳1,000 each
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[269px] items-center justify-center gap-4 px-[79px] py-1.5 relative rounded-[0px_17px_0px_17px] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                  Join Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
