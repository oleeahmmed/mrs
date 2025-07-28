import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../component";


const RedeemPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [activeTab, setActiveTab] = useState("gift"); // Default active tab

  // Data for Gift tab items
  const giftItems = [
    { id: 1, name: "Gift Card A", locked: false, imageUrl: "https://placehold.co/74x66/FFD700/000000?text=Gift1" },
    { id: 2, name: "Gift Card B", locked: true, imageUrl: "https://placehold.co/74x66/C0C0C0/000000?text=Gift2" },
    { id: 3, name: "Gift Card C", locked: true, imageUrl: "https://placehold.co/74x66/CD7F32/000000?text=Gift3" },
    { id: 4, name: "Gift Card D", locked: false, imageUrl: "https://placehold.co/74x66/ADD8E6/000000?text=Gift4" },
    { id: 5, name: "Gift Card E", locked: true, imageUrl: "https://placehold.co/74x66/90EE90/000000?text=Gift5" },
    { id: 6, name: "Gift Card F", locked: true, imageUrl: "https://placehold.co/74x66/FF6347/000000?text=Gift6" },
    { id: 7, name: "Gift Card G", locked: false, imageUrl: "https://placehold.co/74x66/BA55D3/000000?text=Gift7" },
    { id: 8, name: "Gift Card H", locked: true, imageUrl: "https://placehold.co/74x66/DAA520/000000?text=Gift8" },
  ];

  // Data for Bonus tab items
  const bonusItems = [
    { id: 9, name: "Bonus 1", locked: false, imageUrl: "https://placehold.co/74x66/00BFFF/FFFFFF?text=Bonus1" },
    { id: 10, name: "Bonus 2", locked: false, imageUrl: "https://placehold.co/74x66/32CD32/FFFFFF?text=Bonus2" },
    { id: 11, name: "Bonus 3", locked: true, imageUrl: "https://placehold.co/74x66/FF4500/FFFFFF?text=Bonus3" },
    { id: 12, name: "Bonus 4", locked: false, imageUrl: "https://placehold.co/74x66/8A2BE2/FFFFFF?text=Bonus4" },
    { id: 13, name: "Bonus 5", locked: true, imageUrl: "https://placehold.co/74x66/FFDAB9/000000?text=Bonus5" },
    { id: 14, name: "Bonus 6", locked: false, imageUrl: "https://placehold.co/74x66/4682B4/FFFFFF?text=Bonus6" },
    { id: 15, name: "Bonus 7", locked: true, imageUrl: "https://placehold.co/74x66/DDA0DD/000000?text=Bonus7" },
    { id: 16, name: "Bonus 8", locked: false, imageUrl: "https://placehold.co/74x66/F0E68C/000000?text=Bonus8" },
  ];

  // Data for Lucky Spin Token tab items
  const luckySpinTokenItems = [
    { id: 17, name: "Spin Token 1", locked: false, imageUrl: "https://placehold.co/74x66/FF69B4/FFFFFF?text=Spin1" },
    { id: 18, name: "Spin Token 2", locked: true, imageUrl: "https://placehold.co/74x66/ADFF2F/000000?text=Spin2" },
    { id: 19, name: "Spin Token 3", locked: false, imageUrl: "https://placehold.co/74x66/6A5ACD/FFFFFF?text=Spin3" },
    { id: 20, name: "Spin Token 4", locked: true, imageUrl: "https://placehold.co/74x66/FF8C00/000000?text=Spin4" },
    { id: 21, name: "Spin Token 5", locked: false, imageUrl: "https://placehold.co/74x66/20B2AA/FFFFFF?text=Spin5" },
    { id: 22, name: "Spin Token 6", locked: true, imageUrl: "https://placehold.co/74x66/BDB76B/000000?text=Spin6" },
    { id: 23, name: "Spin Token 7", locked: false, imageUrl: "https://placehold.co/74x66/8B0000/FFFFFF?text=Spin7" },
    { id: 24, name: "Spin Token 8", locked: true, imageUrl: "https://placehold.co/74x66/483D8B/FFFFFF?text=Spin8" },
  ];

  // Function to get items based on active tab
  const getItemsForActiveTab = () => {
    switch (activeTab) {
      case 'gift':
        return giftItems;
      case 'bonus':
        return bonusItems;
      case 'luckySpinToken':
        return luckySpinTokenItems;
      default:
        return [];
    }
  };

  // Close modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full min-h-screen font-['Inter']">
      {/* Main container now has min-h-screen and flex-col for overall page scrolling */}
      <div className="bg-[#070707] w-[375px] relative min-h-screen flex flex-col">
        <Header />

        {/* Main Content Area - removed overflow-y-auto and fixed height */}
        {/* Added flex-grow to make it take available space */}
        <div className="flex flex-col w-full items-start gap-[54px] pt-[110px] px-3 pb-[90px] flex-grow">

          {/* Points Redemption Mall Section (Top section, always visible) */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <div className="relative self-stretch font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
              Points Redemption Mall
            </div>

            <div className="flex flex-col items-center gap-4 relative self-stretch w-full">
              <div className="grid grid-cols-4 gap-3.5 w-full">
                {/* This section uses a static set of items, not tied to tabs */}
                {giftItems.slice(0, 8).map((item) => ( // Using giftItems as an example for this section
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-1.5 relative transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative w-[74.5px] h-[66px]">
                      {!item.locked ? (
                        <div className="relative w-[113px] h-[116px] top-[-21px] -left-3 bg-[url(/images/rectangle-1639-1.svg)] bg-[100%_100%]">
                          <div className="relative w-10 h-9 top-9 left-[30px]">
                            <div className="relative h-9">
                              <img
                                className="absolute w-8 h-[33px] top-0 left-2"
                                alt="Element"
                                src="/images/42-4-1.png"
                                onError={(e) => { e.target.onerror = null; e.target.src = item.imageUrl; }}
                              />
                              <img
                                className="absolute w-8 h-8 top-1 left-0 object-cover"
                                alt="Element"
                                src="/images/60-3-1.png"
                                onError={(e) => { e.target.onerror = null; e.target.src = item.imageUrl; }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-[74.5px] h-[66px] bg-[url(/images/group-75-7.png)] bg-[100%_100%]">
                          <div className="relative w-[17px] h-[19px] top-[22px] left-[29px] bg-[url(/images/bold---security---lock-password-7.svg)] bg-[100%_100%]" />
                        </div>
                      )}
                    </div>
                    <div className="relative self-stretch rotate-[-0.10deg] font-bold text-white text-[10px] text-center tracking-[0] leading-[11px]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              <button className="flex w-[87px] h-[30px] items-center justify-center gap-2.5 px-[146px] py-2.5 relative rounded-[0px_17px_0px_17px] shadow-[inset_-5px_-5px_15px_#00000066] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] hover:brightness-110 transition-all duration-300">
                <div className="relative w-fit mt-[-3.50px] mb-[-1.50px] ml-[-130.50px] mr-[-130.50px] font-bold text-black text-xs tracking-[0] leading-[normal]">
                  See More
                </div>
              </button>
            </div>
          </div>

          {/* Points Redemption Gift Section (Tabs controlled section) */}
          <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full mb-24">
            <div className="relative self-stretch mt-[-1.00px] font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
              Points Redemption Gift
            </div>

            <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full">
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <button
                  className={`inline-flex items-center justify-center gap-2.5 px-0 py-1 relative flex-[0_0_auto] ${activeTab === 'gift' ? 'border-b [border-bottom-style:solid] border-[#dd8f1f]' : ''}`}
                  onClick={() => setActiveTab('gift')}
                >
                  <div className={`relative w-fit mt-[-1.00px] ${activeTab === 'gift' ? 'font-semibold text-[#dd8f1f]' : 'font-medium text-white'} text-sm tracking-[0] leading-[normal]`}>
                    Gift
                  </div>
                </button>

                <button
                  className={`inline-flex items-center justify-center gap-2.5 px-0 py-1 relative flex-[0_0_auto] ${activeTab === 'bonus' ? 'border-b [border-bottom-style:solid] border-[#dd8f1f]' : ''}`}
                  onClick={() => setActiveTab('bonus')}
                >
                  <div className={`relative w-fit mt-[-1.00px] ${activeTab === 'bonus' ? 'font-semibold text-[#dd8f1f]' : 'font-medium text-white'} text-sm tracking-[0] leading-[normal]`}>
                    Bonus
                  </div>
                </button>

                <button
                  className={`inline-flex items-center justify-center gap-2.5 px-0 py-1 relative flex-[0_0_auto] ${activeTab === 'luckySpinToken' ? 'border-b [border-bottom-style:solid] border-[#dd8f1f]' : ''}`}
                  onClick={() => setActiveTab('luckySpinToken')}
                >
                  <div className={`relative w-fit mt-[-1.00px] ${activeTab === 'luckySpinToken' ? 'font-semibold text-[#dd8f1f]' : 'font-medium text-white'} text-sm tracking-[0] leading-[normal]`}>
                    Lucky Spin Token
                  </div>
                </button>
              </div>

              {/* Conditional rendering of cards based on activeTab */}
              <div className="grid grid-cols-4 gap-3.5 w-full">
                {getItemsForActiveTab().map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-1.5 relative transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative w-[74.5px] h-[66px]">
                      {!item.locked ? (
                        // Display for unlocked item
                        <div className="relative w-[113px] h-[116px] top-[-21px] -left-3 bg-[url(/images/rectangle-1639-1.svg)] bg-[100%_100%]">
                          <div className="relative w-10 h-9 top-9 left-[30px]">
                            <div className="relative h-9">
                              <img
                                className="absolute w-8 h-[33px] top-0 left-2"
                                alt="Element"
                                src="/images/42-4-1.png"
                                onError={(e) => { e.target.onerror = null; e.target.src = item.imageUrl; }}
                              />
                              <img
                                className="absolute w-8 h-8 top-1 left-0 object-cover"
                                alt="Element"
                                src="/images/60-3-1.png"
                                onError={(e) => { e.target.onerror = null; e.target.src = item.imageUrl; }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Display for locked item
                        <div className="relative w-[74.5px] h-[66px] bg-[url(/images/group-75-7.png)] bg-[100%_100%]">
                          <div className="relative w-[17px] h-[19px] top-[22px] left-[29px] bg-[url(/images/bold---security---lock-password-7.svg)] bg-[100%_100%]" />
                        </div>
                      )}
                    </div>
                    <div className="relative self-stretch rotate-[-0.10deg] font-bold text-white text-[10px] text-center tracking-[0] leading-[11px]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Redemption Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="w-[311px] h-[220px] bg-[#ffffff1a] rounded-[0px_17px_0px_17px] overflow-hidden border-[none] shadow-[0px_9px_19px_#0000001a,0px_34px_34px_#f2eb7917,0px_77px_46px_#f2eb790d,0px_137px_55px_#f2eb7903,0px_214px_60px_transparent] backdrop-blur-2xl backdrop-brightness-[100%] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_17px_0px_17px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1]">
              <div className="flex flex-col w-[281px] items-start gap-[26px] relative top-8 left-[15px]">
                <div className="flex items-end justify-between relative self-stretch w-full">
                  <p className="relative w-fit font-normal text-white text-base text-center tracking-[0] leading-[17.6px] whitespace-nowrap">
                    <span className="font-semibold">🎉</span>
                    <span className="font-normal text-white text-base tracking-[0] leading-[17.6px]"> Points Redemption Mal</span>
                    <span className="font-semibold">l</span>
                  </p>

                  <button
                    className="flex flex-col w-[30px] items-center justify-center gap-2.5 px-[5px] py-2.5 relative bg-[#f2c36b2e] rounded-[7px] shadow-[0px_1px_2px_#0000001a,0px_3px_3px_#00000017,0px_7px_4px_#0000000d,0px_13px_5px_#00000003,0px_21px_6px_transparent] hover:bg-[#f2c36b4d] transition-colors duration-300"
                    onClick={() => setShowModal(false)}
                  >
                    <img
                      className="relative w-[13px] h-[13px] mt-[-1.50px] mb-[-1.50px]"
                      alt="Close"
                      src="/images/Vector-dd).svg"
                    />
                  </button>
                </div>

                <p className="relative self-stretch font-normal text-sm text-center tracking-[0] leading-[21px]">
                  <span className="text-white">Congratulations! You've checked in for today and earned </span>
                  <span className="text-[#f2c36b]">+50 bonus </span>
                  <span className="text-white">points!</span>
                </p>

                <button className="flex items-center justify-center gap-4 px-[79px] py-1.5 relative self-stretch w-full rounded-[0px_17px_0px_17px] shadow-[inset_-5px_-5px_15px_#00000066,1px_4px_11px_#0000001a] bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%),linear-gradient(0deg,rgba(255,255,132,1)_0%,rgba(255,255,132,1)_100%)] hover:brightness-110 transition-all duration-300">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-black text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                    Claim Your Points
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default RedeemPage;
