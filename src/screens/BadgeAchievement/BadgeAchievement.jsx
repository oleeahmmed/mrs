import React, { useState } from "react";
import { Header, Footer,Frame,FrameWrapper } from "../../component";

 const BadgeAchievement = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleBadgeHover = (badgeName) => {
    setHoveredBadge(badgeName);
  };

  const handleNavHover = (navItem) => {
    setHoveredNavItem(navItem);
  };

  return (
    <div
      className="bg-[#070707] flex flex-row justify-center w-full"
      data-model-id="664:1603"
    >
      <div className="bg-[#070707] w-[375px] h-[625px] relative">
    <Header/>

            <Footer/>


        <div className="flex flex-col w-[354px] items-center gap-[54px] absolute top-[109px] left-[11px]">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[341px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-[8px] text-center tracking-[0] leading-[normal]">
              Each medal has five stars of progress before promotion to the next
              rank medal, The strongest players of each region display their
              numerical leaderboard position below the rank medal.
            </p>

            <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-end gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
                <div 
                  className={`flex flex-col w-[58px] items-center relative cursor-pointer transition-all duration-300 ${hoveredBadge === 'Herald' ? 'scale-110' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Herald')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative w-[51px] h-[57px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-3.png"
                  />

                  <div className="relative self-stretch bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[8px] text-center tracking-[0] leading-[normal]">
                    Herald
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-[51px] items-center relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Guardian' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Guardian')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[55px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-16.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Guardian
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-[60px] items-center gap-px relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Crusader' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Crusader')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[52px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-15.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Crusader
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-[49px] items-center relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Archon' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Archon')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[53px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-13.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Archon
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-12 items-center relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Legend' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Legend')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[53px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-14.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Legend
                  </div>
                </div>
              </div>

              <div className="inline-flex items-end gap-[22px] relative flex-[0_0_auto]">
                <div 
                  className={`flex flex-col w-14 items-center relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Ancient' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Ancient')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[53px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-12.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Ancient
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-[57px] items-center relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Divine' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Divine')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[53px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-5.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Divine
                  </div>
                </div>

                <div 
                  className={`flex flex-col w-[62px] items-start relative opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 ${hoveredBadge === 'Immortal' ? 'scale-110 opacity-100' : ''}`}
                  onMouseEnter={() => handleBadgeHover('Immortal')}
                  onMouseLeave={() => handleBadgeHover(null)}
                >
                  <img
                    className="relative self-stretch w-full h-[54px] transition-transform duration-300 hover:scale-110"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-22.png"
                  />

                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] text-center tracking-[0] leading-[normal]">
                    Immortal
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[339px] items-start relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-[8px] text-center tracking-[0] leading-3">
              Players eam medals by playing in Ranked games. Medals are visible
              to all players before and during each match.
            </p>

            <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div 
                className="relative w-[61px] h-[57px] cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => handleBadgeHover('25000')}
                onMouseLeave={() => handleBadgeHover(null)}
              >
                <div className="relative h-[57px]">
                  <img
                    className="absolute w-[61px] h-[54px] top-0 left-0 transition-transform duration-300"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-20.png"
                  />

                  <div className={`absolute w-[38px] h-[13px] top-11 left-3 rounded-[1px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] transition-all duration-300 ${hoveredBadge === '25000' ? 'scale-110 brightness-125' : ''}`}>
                    <div className="absolute -top-0.5 left-[3px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      25000
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="relative w-[61px] h-[57px] cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => handleBadgeHover('5000')}
                onMouseLeave={() => handleBadgeHover(null)}
              >
                <div className="relative h-[57px]">
                  <img
                    className="absolute w-[61px] h-[54px] top-0 left-0 transition-transform duration-300"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-19.png"
                  />

                  <div className={`absolute w-[38px] h-[13px] top-11 left-[11px] rounded-[1px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] transition-all duration-300 ${hoveredBadge === '5000' ? 'scale-110 brightness-125' : ''}`}>
                    <div className="left-1.5 absolute -top-0.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      5000
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="relative w-[61px] h-[57px] cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => handleBadgeHover('100')}
                onMouseLeave={() => handleBadgeHover(null)}
              >
                <div className="relative h-[57px]">
                  <img
                    className="absolute w-[61px] h-[54px] top-0 left-0 transition-transform duration-300"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-18.png"
                  />

                  <div className={`absolute w-[38px] h-[13px] top-11 left-3 rounded-[1px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] transition-all duration-300 ${hoveredBadge === '100' ? 'scale-110 brightness-125' : ''}`}>
                    <div className="left-2.5 absolute -top-0.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      100
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="relative w-[61px] h-[57px] cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => handleBadgeHover('10')}
                onMouseLeave={() => handleBadgeHover(null)}
              >
                <div className="relative h-[57px]">
                  <img
                    className="absolute w-[61px] h-[54px] top-0 left-0 transition-transform duration-300"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-17.png"
                  />

                  <div className={`absolute w-[38px] h-[13px] top-11 left-[11px] rounded-[1px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] transition-all duration-300 ${hoveredBadge === '10' ? 'scale-110 brightness-125' : ''}`}>
                    <div className="left-[13px] absolute -top-0.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      10
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="relative w-[61px] h-[57px] cursor-pointer transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => handleBadgeHover('1')}
                onMouseLeave={() => handleBadgeHover(null)}
              >
                <div className="relative h-[57px]">
                  <img
                    className="absolute w-[61px] h-[54px] top-0 left-0 transition-transform duration-300"
                    alt="Set game rank badges"
                    src="/images/set-game-rank-badges-with-hearts-21.png"
                  />

                  <div className={`absolute w-[38px] h-[13px] top-11 left-3 rounded-[1px] overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] transition-all duration-300 ${hoveredBadge === '1' ? 'scale-110 brightness-125' : ''}`}>
                    <div className="left-[17px] absolute -top-0.5 [font-family:'Poppins',Helvetica] font-semibold text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BadgeAchievement;