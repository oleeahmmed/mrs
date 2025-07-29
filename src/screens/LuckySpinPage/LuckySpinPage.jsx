import React, { useState, useEffect, useRef } from "react";
import { Header, Footer } from "../../component"; // Assuming Header and Footer components exist

export const LuckySpinPage = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);
  const wheelTextRef = useRef(null);
  const [currentPrize, setCurrentPrize] = useState(null);
  const [spinHistory, setSpinHistory] = useState([
    { date: "2025-06-26", user: "RIC**************", prize: "Free Credit RM 1.4" },
    { date: "2025-06-25", user: "JOH**************", prize: "Free Credit RM 2.8" },
    { date: "2025-06-24", user: "ANN**************", prize: "Gold Bar 5 Gram" },
  ]);
  const [activeTab, setActiveTab] = useState("winningList");

  const prizes = [
    { name: "Free Bonus 1.88", angle: 0, chance: "20%", icon: "💰" },
    { name: "Free Bonus 8.88", angle: 45, chance: "15%", icon: "💰" },
    { name: "Free Bonus 16.88", angle: 90, chance: "10%", icon: "💰" },
    { name: "Free Bonus 23.88", angle: 135, chance: "5%", icon: "💰" },
    { name: "MRS Point +3", angle: 180, chance: "20%", icon: "⭐" },
    { name: "Gold Bar 5 Gram", angle: 225, chance: "0.05%", icon: "🏆" },
    { name: "iPhone 16 Pro Max", angle: 270, chance: "0.01%", icon: "📱" },
    { name: "Thank You", angle: 315, chance: "29.94%", icon: "🙏" }
  ];

  // Function to add spins
  const addSpin = (amount) => {
    setSpinCount(prev => prev + amount);
  };

  // Handle clicks outside modals to close them
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowWinModal(false);
      setShowHistory(false);
      setShowOptions(false);
    }
  };

  // Function to perform the spin animation and logic
  const performSpin = () => {
    if (spinCount > 0 && !isSpinning) {
      setIsSpinning(true);
      setSpinCount(prev => prev - 1);
      
      // Randomly select a prize
      const randomIndex = Math.floor(Math.random() * prizes.length);
      const selectedPrize = prizes[randomIndex];
      setCurrentPrize(selectedPrize);
      
      // Calculate total rotation for the wheel and text
      const fullRotations = 5 + Math.floor(Math.random() * 5); // 5-10 full rotations
      const targetAngle = selectedPrize.angle;
      const totalRotation = fullRotations * 360 + targetAngle;
      
      // Apply rotation with transition
      if (wheelRef.current) {
        wheelRef.current.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
        wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
        
        if (wheelTextRef.current) {
          wheelTextRef.current.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
          wheelTextRef.current.style.transform = `rotate(${totalRotation}deg)`;
        }
        
        // Actions after the spin animation completes
        setTimeout(() => {
          // Add the spin result to history
          const newHistory = {
            date: new Date().toISOString().split('T')[0],
            user: "YOU**************",
            prize: selectedPrize.name
          };
          
          setSpinHistory([newHistory, ...spinHistory.slice(0, 9)]); // Keep last 10 entries
          
          // Reset wheel position for the next spin (after a short delay)
          setTimeout(() => {
            if (wheelRef.current) {
              wheelRef.current.style.transition = "none";
              wheelRef.current.style.transform = "rotate(0deg)";
              
              if (wheelTextRef.current) {
                wheelTextRef.current.style.transition = "none";
                wheelTextRef.current.style.transform = "rotate(0deg)";
              }
              
              setIsSpinning(false); // Allow new spins
            }
          }, 1000);
          
          // Show the win modal
          setShowWinModal(true);
        }, 4500); // Wait for animation + a little extra
      }
    } else if (spinCount <= 0) {
      // Use a custom modal or message box instead of alert
      // For this example, we'll use a simple console log.
      // In a real app, you'd render a custom message box component.
      console.log("You need to purchase spins first!");
    }
  };

  return (
    <div className="bg-[#070707] flex flex-col min-h-screen w-full">
      {/* Header component, fixed at the top */}
      <Header />
      
      {/* Main content area with padding for header and footer */}
      <div className="main-container flex-grow flex justify-center">
        {/* Changed fixed width to responsive max-width and removed inner overflow-y-auto */}
        <div className="bg-[#070707] w-full max-w-md relative"> 
          <div className="w-full relative"> {/* Changed fixed width to w-full */}
            <img
              className="w-full h-[657px] object-cover" // Ensure image covers the area
              alt="Group"
              src="/images/group-4.png"
            />

            {/* Main Content - Adjusted positioning to be relative to its parent for better responsiveness */}
            <div className="absolute w-full top-[78px] left-0 px-4"> {/* Added horizontal padding */}
              <div className="relative h-[376px]">
                <div className="flex w-full items-center justify-between absolute top-[105px] left-0">
                  {/* Winner Box */}
                  <div 
                    className="relative w-[48%] sm:w-[102px] h-[163px] bg-[#ffffff1a] rounded-md overflow-hidden border-2 border-solid border-[#ffff84] cursor-pointer hover:shadow-[0px_0px_15px_#f2c36b80] transition-shadow duration-300"
                    onClick={() => setShowHistory(true)}
                  >
                    <div className="flex flex-col w-[86px] items-start gap-0.5 absolute top-1.5 left-2">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[normal]">
                        WINNER
                      </div>

                      <div className="relative w-[70px] h-3 bg-[#56565680] rounded-sm overflow-hidden border-[0.1px] border-solid border-white">
                        <div className="absolute w-[29px] h-2.5 top-px left-px rounded-sm overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)]">
                          <div className="top-[79px] left-[5px] text-black absolute [font-family:'Poppins',Helvetica] font-medium text-[4px] tracking-[0] leading-[normal]">
                            Winning List
                          </div>
                        </div>

                        <div className="top-[81px] left-[53px] text-white absolute [font-family:'Poppins',Helvetica] font-medium text-[4px] tracking-[0] leading-[normal]">
                          Winning Record
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[59px] items-start gap-2 absolute top-[47px] left-[11px]">
                      {spinHistory.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[78px] mt-[-1.00px] mr-[-19.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff99] text-[6px] tracking-[0] leading-[normal]">
                            {item.date}
                          </div>

                          <div className="relative w-[78px] mr-[-19.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[6px] tracking-[0] leading-[normal]">
                            {item.user}
                          </div>

                          <div className="relative w-[78px] mr-[-19.00px] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-transparent text-[6px] tracking-[0] leading-[normal]">
                            {item.prize}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prize List Box */}
                  <div 
                    className="relative w-[48%] sm:w-[102px] h-[163px] bg-[#ffffff1a] rounded-md overflow-hidden border-2 border-solid border-[#ffff84] cursor-pointer hover:shadow-[0px_0px_15px_#f2c36b80] transition-shadow duration-300"
                    onClick={() => setShowOptions(true)}
                  >
                    <div className="flex flex-col w-[86px] items-center gap-1 relative top-[9px] left-2">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[normal]">
                        PRIZE LIST
                      </div>

                      <img
                        className="relative self-stretch w-full flex-[0_0_auto]"
                        alt="Frame"
                        src="/images/frame-1597881173.svg"
                      />
                    </div>
                  </div>
                </div>

                {/* Centered wheel and spin buttons */}
                <div className="flex flex-col w-full items-center gap-5 absolute top-0 left-0">
                  <div className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-transparent text-[28px] text-center tracking-[0] leading-[normal]">
                    LUCKY SPIN
                  </div>

                  <div className="flex flex-col items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[246.18px] h-[280px]"> {/* Consider making this responsive too if needed */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <div className="absolute w-[152px] h-[68px] top-[212px] left-1/2 -translate-x-1/2">
                          <div className="absolute w-full h-full top-0 left-0">
                            <img
                              className="absolute w-[132px] h-[37px] top-0 left-1/2 -translate-x-1/2"
                              alt="Group"
                              src="/images/group-1.png"
                            />

                            <img
                              className="absolute w-[132px] h-[37px] top-0 left-1/2 -translate-x-1/2"
                              alt="Group"
                              src="/images/group-3.png"
                            />

                            <img
                              className="absolute w-full h-[34px] top-[34px] left-0"
                              alt="Vector"
                              src="/images/vector-1aa.svg"
                            />

                            <div className="absolute w-full h-[34px] top-[34px] left-0 bg-[url(/images/vector aa.svg)] bg-[100%_100%]">
                              <p className="absolute top-2.5 left-1/2 -translate-x-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-[8px] tracking-[0] leading-[normal]">
                                You have {spinCount} spin(s) available
                              </p>
                            </div>
                          </div>
                        </div>

                        <div 
                          ref={wheelRef}
                          className="absolute w-[226px] h-[226px] top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-transform"
                          onClick={performSpin}
                        >
                          <img
                            className="w-full h-full"
                            alt="Group"
                            src="/images/spin.png"
                          />
                        </div>

                        {/* Wheel Text Layer - This will rotate with the wheel */}
                        <div 
                          ref={wheelTextRef}
                          className="absolute w-[226px] h-[226px] top-0 left-1/2 -translate-x-1/2 pointer-events-none transition-transform"
                        >
                          {/* Prize text elements (consider re-evaluating their absolute positioning for responsiveness) */}
                          <div className="absolute w-[51px] h-[29px] top-[98px] left-[157px]">
                            <div className="relative w-[49px] h-[29px]">
                              <img
                                className="absolute w-4 h-[29px] top-0 left-8"
                                alt="Image"
                                src="/images/image-58.png"
                              />

                              <div className="absolute w-[34px] top-[7px] left-0 rotate-[0.25deg] [font-family:'Inter',Helvetica] font-semibold text-white text-[6.5px] tracking-[0] leading-[normal]">
                                iPhone 16 Pro Max
                              </div>
                            </div>
                          </div>

                          <img
                            className="absolute w-[30px] h-[25px] top-[172px] left-[140px]"
                            alt="Image"
                            src="/images/image-59.png"
                          />

                          <div className="absolute w-[30px] top-[151px] left-[126px] rotate-[63.72deg] [font-family:'Inter',Helvetica] font-semibold text-white text-[6.5px] tracking-[0] leading-[normal]">
                            Gold Bar 5 Gram
                          </div>

                          <div className="w-[42px] top-[104px] left-[34px] rotate-[-1.05deg] text-white absolute [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Free Bonus 8.88
                          </div>

                          <div className="w-[42px] top-[76px] left-[39px] rotate-[42.11deg] text-black absolute [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Free Bonus 23.88
                          </div>

                          <div className="w-[42px] top-[41px] left-[92px] rotate-[90.21deg] text-black absolute [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Free Bonus 16.88
                          </div>

                          <div className="absolute w-[42px] top-[72px] left-[145px] rotate-[152.22deg] [font-family:'Inter',Helvetica] font-semibold text-black text-[6.5px] tracking-[0] leading-[normal]">
                            MRS Point +3
                          </div>

                          <div className="w-[37px] top-40 left-[95px] rotate-[91.57deg] text-black absolute [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Free Bonus 1.88
                          </div>

                          <div className="absolute w-[43px] top-[136px] left-10 rotate-[-30.18deg] [font-family:'Inter',Helvetica] font-semibold text-black text-[6.5px] tracking-[0] leading-[normal]">
                            Thank You
                          </div>

                          <div className="top-[143px] left-[150px] rotate-[26.61deg] text-black absolute w-[43px] [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Thank You
                          </div>

                          <div className="top-[57px] left-[62px] rotate-[57.33deg] text-white absolute w-[43px] [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Thank You
                          </div>

                          <div className="top-14 left-[123px] rotate-[117.22deg] text-white absolute w-[43px] [font-family:'Inter',Helvetica] font-semibold text-[6.5px] tracking-[0] leading-[normal]">
                            Thank You
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full justify-center gap-4 relative flex-[0_0_auto] px-4"> {/* Adjusted width and added padding */}
                      <div 
                        className="flex-1 flex items-center justify-center gap-4 py-1.5 relative rounded-md border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] cursor-pointer hover:brightness-110 transition-all duration-300"
                        onClick={() => addSpin(1)}
                      >
                        <div className="relative w-fit mt-[-0.50px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[8px] text-center tracking-[0] leading-[normal]">
                          1 Spin <br />
                          10 Points
                        </div>
                      </div>

                      <div 
                        className="flex-1 flex items-center justify-center gap-4 py-1.5 relative rounded-md border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] cursor-pointer hover:brightness-110 transition-all duration-300"
                        onClick={() => addSpin(10)}
                      >
                        <div className="relative w-fit mt-[-0.50px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[8px] text-center tracking-[0] leading-[normal]">
                          10 Spins <br />
                          100 Points
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="flex flex-col w-full items-start gap-[13px] absolute top-2.5 px-4"> {/* Adjusted width and added padding */}
              <div className="flex flex-col w-full items-center gap-1.5 relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(242,195,107,1)_0%,rgba(217,148,89,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-transparent text-sm text-center tracking-[0] leading-[16.8px]">
                  Your current rank is Silver
                </p>

                <div className="relative w-full h-[54px]">
                  <div className="w-full h-[54px]">
                    <div className="relative w-full h-[63px]">
                      <img
                        className="absolute w-full h-[61px] top-0.5 left-0"
                        alt="Rectangle"
                        src="/images/rectangle-1622.svg"
                      />

                      <img
                        className="absolute w-[70%] h-[17px] top-[18px] left-1/2 -translate-x-1/2"
                        alt="Rectangle"
                        src="/images/rectangle-1626.svg"
                      />

                      <img
                        className="absolute w-[40%] h-[15px] top-[19px] left-1/2 -translate-x-1/2"
                        alt="Rectangle"
                        src="/images/rectangle-1627.svg"
                      />

                      <img
                        className="absolute w-[54px] h-[54px] top-0 left-[3px]"
                        alt="Bronze"
                        src="/images/bronze.png"
                      />

                      <p className="absolute top-5 left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
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
                      <div className="absolute top-1 left-8 [font-family:'Poppins',Helvetica] font-medium text-[#d99023] text-[8px] text-center tracking-[0] leading-[9.6px] whitespace-nowrap">
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
          </div>
          
          {/* Win Modal */}
          {showWinModal && currentPrize && (
            <div
              id="modal-overlay"
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
              onClick={handleOverlayClick}
            >
              <div className="w-[311px] h-[220px] bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]">
                <div className="flex flex-col w-[281px] items-start gap-[26px] relative top-8 left-[15px]">
                  <div className="flex items-end justify-between relative self-stretch w-full">
                    <p className="relative w-fit font-normal text-white text-base text-center tracking-[0] leading-[17.6px] whitespace-nowrap">
                      <span className="font-semibold">🎉</span>
                      <span className="font-normal text-white text-base tracking-[0] leading-[17.6px]"> Lucky Spin Reward</span>
                      <span className="font-semibold">!</span>
                    </p>

                    <button
                      className="flex flex-col w-[30px] items-center justify-center gap-2.5 px-[5px] py-2.5 relative bg-[#f2c36b2e] rounded-[7px] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_13px_5px_#00000003,0px_21px_6px_transparent] hover:bg-[#f2c36b4d] transition-colors duration-300"
                      onClick={() => setShowWinModal(false)}
                    >
                      <div className="text-white font-bold text-sm">✕</div>
                    </button>
                  </div>

                  <p className="relative self-stretch font-normal text-sm text-center tracking-[0] leading-[21px]">
                    <span className="text-white">Congratulations! You've won </span>
                    <span className="text-[#f2c36b] font-semibold">{currentPrize.icon} {currentPrize.name} </span>
                    <span className="text-white">from the Lucky Spin!</span>
                  </p>

                  <button 
                    className="flex items-center justify-center gap-4 px-[79px] py-1.5 relative self-stretch w-full rounded-[0px_17px_0px_17px] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] hover:brightness-110 transition-all duration-300"
                    onClick={() => setShowWinModal(false)}
                  >
                    <div className="relative w-fit mt-[-1.00px] font-normal text-black text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                      Claim Your Prize
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* History Modal */}
          {showHistory && (
            <div
              id="modal-overlay"
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
              onClick={handleOverlayClick}
            >
              <div className="w-[350px] bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] p-4">
                <div className="flex items-end justify-between relative w-full mb-4">
                  <h2 className="text-center text-xl font-bold bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                    Spin History
                  </h2>
                  
                  <button
                    className="flex flex-col w-[30px] items-center justify-center gap-2.5 px-[5px] py-2.5 relative bg-[#f2c36b2e] rounded-[7px] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_13px_5px_#00000003,0px_21px_6px_transparent] hover:bg-[#f2c36b4d] transition-colors duration-300"
                    onClick={() => setShowHistory(false)}
                  >
                    <div className="text-white font-bold text-sm">✕</div>
                  </button>
                </div>
                
                <div className="flex border-b border-[#ffff8450] mb-2">
                  <button 
                    className={`px-4 py-2 ${activeTab === 'winningList' ? 'text-[#ffff84] border-b-2 border-[#ffff84]' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('winningList')}
                  >
                    Winning List
                  </button>
                  <button 
                    className={`px-4 py-2 ${activeTab === 'myHistory' ? 'text-[#ffff84] border-b-2 border-[#ffff84]' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('myHistory')}
                  >
                    My History
                  </button>
                </div>
                
                <div className="max-h-[300px] overflow-y-auto">
                  {spinHistory.map((item, index) => (
                    <div key={index} className="flex flex-col mb-3 border-b border-[#ffffff20] pb-2">
                      <div className="text-[#ffffff99] text-xs">{item.date}</div>
                      <div className="text-white text-sm">{item.user}</div>
                      <div className="bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-sm font-medium">
                        {item.prize}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-4 py-2 rounded-[0px_17px_0px_17px] border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] text-black font-semibold hover:brightness-110 transition-all duration-300"
                  onClick={() => setShowHistory(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          
          {/* Options Modal */}
          {showOptions && (
            <div
              id="modal-overlay"
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
              onClick={handleOverlayClick}
            >
              <div className="w-[350px] bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] p-4">
                <div className="flex items-end justify-between relative w-full mb-4">
                  <h2 className="text-center text-xl font-bold bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                    Prize List & Options
                  </h2>
                  
                  <button
                    className="flex flex-col w-[30px] items-center justify-center gap-2.5 px-[5px] py-2.5 relative bg-[#f2c36b2e] rounded-[7px] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_13px_5px_#00000003,0px_21px_6px_transparent] hover:bg-[#f2c36b4d] transition-colors duration-300"
                    onClick={() => setShowOptions(false)}
                  >
                    <div className="text-white font-bold text-sm">✕</div>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {prizes.map((prize, index) => (
                    <div key={index} className="bg-[#ffffff1a] rounded-md p-2 border border-[#ffff8450] hover:shadow-[0px_0px_8px_#f2c36b40] transition-shadow duration-300">
                      <div className="text-white text-center text-sm font-medium mb-1">{prize.icon} {prize.name}</div>
                      <div className="text-[#ffff84] text-center text-xs">Chance: {prize.chance}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#ffffff1a] rounded-md p-3 mb-4 border border-[#ffff8450]">
                  <h3 className="text-white text-center font-medium mb-2">Purchase Options</h3>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffff84] rounded-full"></div>
                      <span className="text-white text-sm">1 Spin</span>
                    </div>
                    <span className="text-[#ffff84] text-sm">10 Points</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffff84] rounded-full"></div>
                      <span className="text-white text-sm">10 Spins</span>
                    </div>
                    <span className="text-[#ffff84] text-sm">100 Points</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  {/* Link is assumed to be from react-router-dom or similar, adjust if not */}
                  <a 
                    href="/" // Changed to <a> for direct link, use <Link> if react-router-dom is set up
                    className="px-4 py-2 rounded-[0px_17px_0px_17px] border-[0.5px] border-solid border-[#ffffff66] bg-[#f2c36b2e] text-white font-semibold hover:bg-[#f2c36b4d] transition-colors duration-300"
                  >
                    Go to Home
                  </a>
                  
                  <button 
                    className="px-4 py-2 rounded-[0px_17px_0px_17px] border-[0.5px] border-solid border-[#ffffff66] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] text-black font-semibold hover:brightness-110 transition-all duration-300"
                    onClick={() => setShowOptions(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer component, fixed at the bottom */}
      <Footer />
    </div>
  );
};
