import React from "react";
import { Header, Footer } from "../../component"; // Assuming Header and Footer are in this path

/**
 * LeaderboardTable Component
 * Displays a table of top players with their ranks, names, and win amounts.
 * This component is directly integrated as provided by the user.
 */
const LeaderboardTable = () => {
  // Sample data for the leaderboard
  const players = [
    { rank: 1, name: "LuckyMaster", winAmount: "RM 5,555" },
    { rank: 2, name: "SpinKing88", winAmount: "RM 4,800" },
    { rank: 3, name: "MegaWinZone", winAmount: "RM 3,750" },
    { rank: 4, name: "FastFinger", winAmount: "RM 3,200" },
    { rank: 5, name: "LadyLuck777", winAmount: "RM 2,900" },
    { rank: 6, name: "JackpotHero", winAmount: "RM 2,500" },
    { rank: 7, name: "GoldenSpin", winAmount: "RM 2,100" },
    { rank: 8, name: "RoyalFlush", winAmount: "RM 1,800" },
    { rank: 9, name: "LuckyCharm", winAmount: "RM 1,500" }
  ];

  return (
    <div className="flex flex-col w-full items-center gap-3"> {/* Changed w-[357px] to w-full for responsiveness */}
      <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px]">
        The Top 10 players
      </div>

      <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            {/* Header Row */}
            <div className="relative self-stretch w-full h-[29px] rounded-[6px_0px_6px_0px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)]">
              <div className="flex w-full px-[27px] items-start justify-between relative top-[7px]"> {/* Adjusted width and added px for spacing */}
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  Rank
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[15px]">
                  Players
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-black text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  Win Amount
                </div>
              </div>
            </div>

            {/* Player Rows */}
            {players.map((player) => (
              <div key={player.rank} className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch w-full h-[29px] rounded-[6px_0px_6px_0px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[6px_0px_6px_0px] before:[background:linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="flex w-full px-[27px] items-center justify-between relative top-[7px]"> {/* Adjusted width and added px for spacing */}
                    <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-transparent text-[10px] text-center tracking-[0] leading-[15px]">
                      {player.rank}
                    </div>

                    <div className="w-fit mt-[-1.00px] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] text-transparent text-[10px] text-center leading-[15px] whitespace-nowrap relative font-medium tracking-[0]">
                      {player.name}
                    </div>

                    <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-transparent text-[10px] text-center tracking-[0] leading-[15px]">
                      {player.winAmount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * LeaderboardPage Component
 * This component renders the full Leaderboard page, including Header,
 * the LeaderboardTable, and Footer.
 */
const LeaderboardPage = () => {
  return (
    <div className="bg-[#070707] flex flex-col items-center min-h-screen w-full font-['Inter']">
      {/* Main container for the page */}
      <div className="w-full max-w-[375px] relative min-h-screen flex flex-col">
        <Header /> {/* Header is always visible */}

        {/* Main content area with padding */}
        <div className="px-5 py-6 space-y-8 pt-[83px] pb-[83px] flex-grow">
          <LeaderboardTable />
        </div>

        <Footer /> {/* Footer is always visible */}
      </div>
    </div>
  );
};

export default LeaderboardPage;
