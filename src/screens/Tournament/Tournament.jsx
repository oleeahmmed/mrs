import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../component"; // Assuming Header and Footer are in this path

/**
 * TournamentModal Component
 * This component renders a styled modal with detailed tournament information.
 * It is controlled by props for visibility, close actions, and tournament data.
 * @param {object} props - Component props.
 * @param {boolean} props.show - Whether the modal should be visible.
 * @param {function} props.onClose - Callback function to execute when the modal is closed.
 * @param {object} props.tournamentDetails - Object containing detailed tournament data.
 */
const TournamentModal = ({ show, onClose, tournamentDetails }) => {
  if (!show || !tournamentDetails) return null; // Don't render if not visible or no data

  // Destructure tournamentDetails for easier access
  const {
    name,
    startDate,
    endDate,
    prizePool,
    yourStatus,
    leaderboard,
    rulesSummary,
    rewardBreakdown,
  } = tournamentDetails;

  // Function to handle clicks on the modal overlay
  const handleOverlayClick = (e) => {
    // If the click target is the overlay itself (not a child of the modal content), close the modal
    if (e.target.id === "tournament-modal-overlay") {
      onClose();
    }
  };

  return (
    // Modal Overlay
    <div
      id="tournament-modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      {/* Modal Content Box - Using the new provided JSX and styles */}
      <div
        className="relative w-[311px] h-[606px] bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]"
        style={{
          /* Hide scrollbar for IE and Edge */
          msOverflowStyle: 'none',
          /* Hide scrollbar for Firefox */
          scrollbarWidth: 'none',
        }}
      >
        {/* Custom CSS for Webkit scrollbar hiding (Chrome, Safari, Opera) */}
        <style>
          {`
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }
          `}
        </style>
        {/* Inner content wrapper with overflow for actual scrolling if content exceeds fixed height */}
        <div className="relative w-[277px] h-[584px] top-[13px] left-[21px] overflow-y-auto"
             style={{
               msOverflowStyle: 'none',
               scrollbarWidth: 'none',
             }}>
          {/* Close Button - Using the new provided JSX */}
          <button
            className="flex flex-col w-[19px] items-center justify-center gap-[6.33px] px-[3.17px] py-[6.33px] absolute top-0 left-[258px] bg-[#f2c36b2e] rounded-[4.43px] shadow-[0px_0.63px_1.27px_#0000001a,0px_1.9px_1.9px_#00000017,0px_4.43px_2.53px_#0000000d,0px_8.23px_3.17px_#00000003,0px_13.3px_3.8px_transparent] z-10" // Added z-10 to ensure it's on top
            onClick={onClose}
          >
            <img
              className="relative w-[8.23px] h-[8.23px] mt-[-0.95px] mb-[-0.95px]"
              alt="Close"
              src="/images/vector-cross.svg"
            />
          </button>

          <div className="flex flex-col w-[269px] items-end gap-[22px] absolute top-2.5 left-0">
            <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5 overflow-hidden">
                    <div className="relative h-[9px] top-0.5 bg-[url(/images/vector-2.svg)] bg-[100%_100%]" />
                  </div>
                  <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] text-center leading-[21px] whitespace-nowrap relative font-medium text-white text-sm tracking-[0]">
                    Tournament Name&nbsp;&nbsp;&nbsp;&nbsp; : {name}
                  </div>
                </div>

                <div className="flex items-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5">
                    <div className="w-[13px] h-[13px] bg-[url(/imagesg/vector-323.svg)] bg-[100%_100%]" />
                  </div>
                  <p className="relative w-[250px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-[18px]">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18px]">
                      Start - End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    </span>
                    <span className="underline text-[#F2C36B]">
                      {startDate} - {endDate}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-3.5 h-3.5">
                    <div className="relative w-3 h-3.5 left-px bg-[url(/images/vector-1111.svg)] bg-[100%_100%]" />
                  </div>
                  <p className="relative w-[250px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-transparent text-xs tracking-[0] leading-[18px]">
                    <span className="text-white">
                      Prize Pool&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    </span>
                    <span className="text-[#ef8b00] text-base leading-6">
                      {prizePool}
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
                    Your Rank: {yourStatus.rank} <br />
                    Your Score: {yourStatus.score} pts <br />
                    You need {yourStatus.pointsNeeded} pts to reach Top 10!
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
                    {leaderboard.map((player, index) => (
                      <React.Fragment key={index}>
                        {index + 1}. {player.name} – {player.score} pts <br />
                      </React.Fragment>
                    ))}
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
                    {rulesSummary}
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
                    {rewardBreakdown.map((reward, index) => (
                      <React.Fragment key={index}>
                        {reward} <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto] mt-4"> {/* Added mt-4 for spacing */}
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

/**
 * GameCard Component
 * Reusable component for displaying individual game cards.
 * @param {object} props - Component props.
 * @param {string} props.imageSrc - Source URL for the game image.
 */
const GameCard = ({ imageSrc }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="w-[60px] h-[60px] rounded-lg overflow-hidden bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] p-[1px] shadow-[0px_0px_15px_rgba(242,195,107,0.4)] transition-all duration-300 group-hover:shadow-[0px_0px_20px_rgba(242,195,107,0.7)] group-hover:scale-105">
      <img
        className="w-full h-full object-cover rounded-lg"
        alt="Game"
        src={imageSrc}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/60x60/333333/FFFFFF?text=Game"; // Fallback
        }}
      />
    </div>
    <div className="text-white text-[10px] mt-1 text-center group-hover:text-[#F2C36B] transition-colors duration-300">Name</div>
  </div>
);

// Game images alternating between two types
const image1 = "/images/image-57-3.png";
const image2 = "/images/image-56-3.png";

/**
 * Tournament Component
 * Manages the display of the main game lists and an optional modal.
 */
export const Tournament = () => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to hold tournament details for the modal
  const [tournamentDetails, setTournamentDetails] = useState(null);
  const [loadingTournamentDetails, setLoadingTournamentDetails] = useState(true);
  const [errorTournamentDetails, setErrorTournamentDetails] = useState(null);


  // Simulate API calls for game data (similar to RedeemPage for consistency)
  const [weeklyBattles, setWeeklyBattles] = useState([]);
  const [loadingWeeklyBattles, setLoadingWeeklyBattles] = useState(true);
  const [errorWeeklyBattles, setErrorWeeklyBattles] = useState(null);

  const [hotGames, setHotGames] = useState([]);
  const [loadingHotGames, setLoadingHotGames] = useState(true);
  const [errorHotGames, setErrorHotGames] = useState(null);

  const [exclusiveTournaments, setExclusiveTournaments] = useState([]);
  const [loadingExclusiveTournaments, setLoadingExclusiveTournaments] = useState(true);
  const [errorExclusiveTournaments, setErrorExclusiveTournaments] = useState(null);

  // Function to simulate fetching data
  useEffect(() => {
    const fetchData = async (setter, setLoading, setError, dataToSet, delay) => {
      setLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, delay));
        setter(dataToSet);
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    // Fetch Weekly Battles
    fetchData(setWeeklyBattles, setLoadingWeeklyBattles, setErrorWeeklyBattles, [
      { id: 1, imageSrc: image1 }, { id: 2, imageSrc: image2 },
      { id: 3, imageSrc: image2 }, { id: 4, imageSrc: image1 }
    ], 800);

    // Fetch Hot Games
    fetchData(setHotGames, setLoadingHotGames, setErrorHotGames, [
      { id: 5, imageSrc: image1 }, { id: 6, imageSrc: image2 },
      { id: 7, imageSrc: image2 }, { id: 8, imageSrc: image1 },
      { id: 9, imageSrc: image1 }, { id: 10, imageSrc: image2 },
      { id: 11, imageSrc: image2 }, { id: 12, imageSrc: image1 }
    ], 1000);

    // Fetch Exclusive Tournaments
    fetchData(setExclusiveTournaments, setLoadingExclusiveTournaments, setErrorExclusiveTournaments, [
      { id: 13, imageSrc: image1 }, { id: 14, imageSrc: image2 },
      { id: 15, imageSrc: image2 }, { id: 16, imageSrc: image1 }
    ], 1200);

    // Simulate fetching tournament details for the modal
    const fetchTournamentDetails = async () => {
      setLoadingTournamentDetails(true);
      setErrorTournamentDetails(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
        const data = {
          name: "Tournament Name",
          startDate: "Jun 25, 2025",
          endDate: "Jul 5, 2025",
          prizePool: "50,000",
          yourStatus: {
            rank: "#14",
            score: "8,750",
            pointsNeeded: "500",
          },
          leaderboard: [
            { name: "LuckyMaster21", score: "15,350" },
            { name: "SpinKing88", score: "12,940" },
            { name: "MegaWinZone", score: "11,500" },
            { name: "FastFinger2025", score: "10,420" },
            { name: "LadyLuck777", score: "9,980" },
          ],
          rulesSummary: "Play Lucky Spin to earn points. Min. 100 bets required to qualify. No multiple accounts allowed.",
          rewardBreakdown: [
            "🥇 1st - ৳50,000",
            "🥈 2nd - ৳30,000",
            "🥉 3rd - ৳20,000",
            "4th-10th - ৳1,000 each",
          ],
        };
        setTournamentDetails(data);
      } catch (err) {
        setErrorTournamentDetails("Failed to load tournament details.");
        console.error("Error fetching tournament details:", err);
      } finally {
        setLoadingTournamentDetails(false);
      }
    };

    fetchTournamentDetails();
  }, []);


  return (
    <div className="bg-[#070707] flex flex-col items-center min-h-screen w-full font-['Inter']">
      {/* The main container now also takes min-h-screen and is a flex column */}
      <div className="w-full max-w-[375px] relative min-h-screen flex flex-col">
        <Header /> {/* Header is always visible */}

        {/* Main content area with padding. Removed overflow-y-auto and fixed height. */}
        <div className="px-5 py-6 space-y-8 pt-[83px] pb-[83px] flex-grow">
          {/* Open Modal Button - Styled to match other UI buttons */}
          <div className="flex justify-center w-full mt-8">
            <button
              className="flex items-center justify-center gap-4 px-[79px] py-1.5 relative self-stretch w-full rounded-[0px_17px_0px_17px] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] hover:brightness-110 transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <div className="relative w-fit mt-[-1.00px] font-normal text-black text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                Open Tournament Modal
              </div>
            </button>
          </div>

          {/* Weekly Battles Section */}
          <div className="space-y-3.5">
            <h2 className="text-white text-lg font-medium">Weekly Battles</h2>
            {loadingWeeklyBattles ? (
              <p className="text-white text-center">Loading weekly battles...</p>
            ) : errorWeeklyBattles ? (
              <p className="text-red-500 text-center">{errorWeeklyBattles}</p>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {weeklyBattles.map(game => (
                  <GameCard key={game.id} imageSrc={game.imageSrc} />
                ))}
              </div>
            )}
          </div>

          {/* Hot Games Section */}
          <div className="space-y-3.5">
            <h2 className="text-white text-lg font-medium">Hot Games</h2>
            {loadingHotGames ? (
              <p className="text-white text-center">Loading hot games...</p>
            ) : errorHotGames ? (
              <p className="text-red-500 text-center">{errorHotGames}</p>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {hotGames.map(game => (
                  <GameCard key={game.id} imageSrc={game.imageSrc} />
                ))}
              </div>
            )}
          </div>

          {/* Exclusive Tournaments Section */}
          <div className="space-y-3.5">
            <h2 className="text-white text-lg font-medium">Exclusive Tournaments</h2>
            {loadingExclusiveTournaments ? (
              <p className="text-white text-center">Loading exclusive tournaments...</p>
            ) : errorExclusiveTournaments ? (
              <p className="text-red-500 text-center">{errorExclusiveTournaments}</p>
            ) : (
              <div className="grid grid-cols-4 gap-2">
                {exclusiveTournaments.map(game => (
                  <GameCard key={game.id} imageSrc={game.imageSrc} />
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer /> {/* Footer is always visible */}
      </div>

      {/* Tournament Modal - Conditionally rendered */}
      {loadingTournamentDetails ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-white">
          Loading tournament details...
        </div>
      ) : errorTournamentDetails ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-red-500">
          {errorTournamentDetails}
        </div>
      ) : (
        <TournamentModal show={showModal} onClose={() => setShowModal(false)} tournamentDetails={tournamentDetails} />
      )}
    </div>
  );
};

export default Tournament;
