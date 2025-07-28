import React from "react";
import { Header, Footer } from "../../component"; // Ensure these paths are correct

const LeaderboardPage = () => {
  // Data for the leaderboard rows
  const leaderboardData = [
    { rank: 1, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 2, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 3, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 4, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 5, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 6, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 7, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 8, player: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 9, player: "LuckyMaster", winAmount: "RM 5,555" },
  ];

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#070707] w-[375px] h-[625px] relative overflow-hidden">
        <Header />

        {/* Main content area for leaderboard */}
        <div className="absolute w-[calc(100%-18px)] top-[107px] left-[9px] flex flex-col items-center gap-4 px-2">
          {/* Shadow element (originally present, adjusted for positioning) */}
          <div className="absolute w-[60px] h-[60px] top-4 left-3 shadow-[0px_5px_10px_#bc926e40] z-0" />

          {/* Title for the leaderboard */}
          <div className="relative self-stretch font-poppins font-medium text-white text-sm text-center tracking-[0] leading-[21px] mb-2">
            The Top 10 players
          </div>

          {/* Leaderboard Table Container */}
          <div className="flex flex-col items-center gap-3 relative self-stretch w-full">
            {/* Table Header */}
            {/* The header uses a solid golden gradient background as per the reference images. */}
            <div className="relative self-stretch w-full h-[29px] rounded-lg overflow-hidden bg-gradient-to-r from-[#F2C36B] to-[#DD8F1F]">
              <div className="flex w-full items-center justify-around relative top-[7px] px-4">
                <div className="relative w-fit font-poppins font-medium text-black text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  Rank
                </div>
                <div className="relative w-fit font-poppins font-medium text-black text-[10px] text-center tracking-[0] leading-[15px]">
                  Players
                </div>
                <div className="relative w-fit font-poppins font-medium text-black text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  Win Amount
                </div>
              </div>
            </div>

            {/* Leaderboard Data Rows */}
            {leaderboardData.map((data, index) => (
              <div
                key={index}
                // Solid dark background for the row content
                className="relative self-stretch w-full h-[29px] rounded-lg overflow-hidden bg-[#1A1A1A]
                           // Applying a clean golden gradient border using a pseudo-element
                           before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg
                           before:bg-[linear-gradient(to_right,#F2C36B,#DD8F1F)]
                           before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                           before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <div className="flex w-full items-center justify-around relative top-[7px] px-4">
                  <div className="relative w-[26px] font-poppins font-medium text-[10px] text-center tracking-[0] leading-[15px] bg-gradient-to-r from-[#F2C36B] to-[#DD8F1F] bg-clip-text text-transparent">
                    {data.rank}
                  </div>
                  <div className="w-fit font-poppins font-medium text-[10px] text-center leading-[15px] whitespace-nowrap relative tracking-[0] bg-gradient-to-r from-[#F2C36B] to-[#DD8F1F] bg-clip-text text-transparent">
                    {data.player}
                  </div>
                  <div className="relative w-[58px] font-poppins font-medium text-[10px] text-center tracking-[0] leading-[15px] bg-gradient-to-r from-[#F2C36B] to-[#DD8F1F] bg-clip-text text-transparent">
                    {data.winAmount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LeaderboardPage;
