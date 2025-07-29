import React from "react";
import { Header, Footer } from "../../component"; // Assuming Header and Footer components exist

export const HomePageDesign2 = () => {
  return (
    <div className="bg-[#070707] flex flex-col min-h-screen w-full">
      {/* Header component, fixed at the top */}
      <Header />
      
      {/* Main content area with padding for header and footer */}
      {/* The main-container class from your global CSS handles padding and scrollbar hiding */}
      <div className="main-container flex-grow flex justify-center items-start py-8"> {/* Added py-8 for vertical spacing */}
        {/* Inner container for content, responsive width */}
        <div className="bg-[#070707] w-full max-w-md relative p-4"> {/* Added horizontal padding */}
          {/* Check In Bonus Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-8"> {/* Added responsiveness for smaller screens */}
            <div className="w-fit bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-transparent text-[22px] leading-[30.8px] relative tracking-[0] text-center">
              Check In <br />
              Bonus
            </div>

            <img
              className="relative w-[150px] h-[150px] object-cover"
              alt="Golden calendar icon"
              src="/images/golden-calendar-icon-1.png"
            />
          </div>

          {/* Frame (Check In Days) Section - Adjusted to match image_3ad6b8.png */}
          <div className="w-full rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] p-4 mb-4">
            <div className="relative w-full flex items-center justify-center h-[83px]"> {/* Adjusted height to contain elements */}
              <div className="relative w-full h-[52px] flex items-center justify-center">
                {/* Horizontal line */}
                <div className="absolute w-[90%] h-1 top-[34px] left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(243,168,29,0.5)_0%,rgba(141,97,17,0.41)_100%)]" />

                {/* Changed flex-wrap to flex-nowrap to keep all items in one row */}
                {/* Removed overflow-x-auto and scrollbar-hide as flex-1 should prevent overflow */}
                <div className="inline-flex items-center justify-between w-full flex-nowrap gap-2 px-2">
                  {/* Day 1 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1 */}
                    <div className="font-medium text-white text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 1
                    </div>
                    <div className="relative w-[34px] h-[34px] rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(169,169,169,1)_0%,rgba(169,169,169,1)_100%)] flex items-center justify-center">
                      <div className="relative w-[20px] h-[20px] bg-black rounded-[1.74px] overflow-hidden flex items-center justify-center">
                        <img className="w-[12px] h-[10px]" alt="Checkmark" src="/images/vector-33.svg" />
                      </div>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1 */}
                    <div className="font-medium text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 2
                    </div>
                    <div className="relative w-[34px] h-[34px] bg-black rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] flex items-center justify-center">
                      <img className="w-[18px] h-[18px] object-cover" alt="Coin" src="/images/60-3-5.png" />
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1, removed border */}
                    <div className="font-semibold text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 3
                    </div>
                    <div className="relative w-[34px] h-[34px] rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,174,0,1)_100%)] flex items-center justify-center"> {/* Adjusted width to match other days */}
                      <img className="w-[25px] h-[25px] object-cover" alt="Coin" src="/images/42-4.png" />
                    </div>
                  </div>

                  {/* Day 4 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1 */}
                    <div className="font-medium text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 4
                    </div>
                    <div className="relative w-[34px] h-[34px] bg-black rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] flex items-center justify-center">
                      <img className="w-[18px] h-[18px] object-cover" alt="Coin" src="/images/60-3-5.png" />
                    </div>
                  </div>

                  {/* Day 5 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1, removed border */}
                    <div className="font-semibold text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 5
                    </div>
                    <div className="relative w-[34px] h-[34px] rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,174,0,1)_100%)] flex items-center justify-center"> {/* Adjusted width to match other days */}
                      <img className="w-[25px] h-[25px] object-cover" alt="Coin" src="/images/42-4-1.png" />
                    </div>
                  </div>

                  {/* Day 6 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1 */}
                    <div className="font-medium text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 6
                    </div>
                    <div className="relative w-[34px] h-[34px] bg-black rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] flex items-center justify-center">
                      <img className="w-[18px] h-[18px] object-cover" alt="Coin" src="/images/60-3-5.png" />
                    </div>
                  </div>

                  {/* Day 7 */}
                  <div className="flex flex-col items-center gap-1 relative flex-1 cursor-pointer transform transition-transform duration-200 hover:scale-105"> {/* Removed fixed width and added flex-1, removed border */}
                    <div className="font-semibold text-[#ffffffcc] text-[8px] text-center tracking-[0] leading-[9.6px]">
                      Day 7
                    </div>
                    <div className="relative w-[34px] h-[34px] rounded-[6.94px] overflow-hidden backdrop-blur-[0.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(0.87px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,174,0,1)_100%)] flex items-center justify-center"> {/* Adjusted width to match other days */}
                      <img className="w-[25px] h-[25px] object-cover" alt="Coin" src="/images/60-3-5.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FrameWrapper (Check In Record) Section */}
          <div className="flex flex-col w-full items-start gap-2 p-4">
            <div className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-xs leading-[14.4px] relative tracking-[0]">
              Check In Record
            </div>

            <div className="relative self-stretch w-full h-9 rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] mb-2">
              <div className="flex items-center justify-between gap-2 relative top-3 px-2">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  2525-06-26 18:58:01
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  Check In Day 1
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  You Get 1.00 Token
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-9 rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] mb-2">
              <div className="flex items-center justify-between gap-2 relative top-3 px-2">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  2525-06-26 18:58:01
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  Check In Day 2
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  You Get 1.00 Token
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-9 rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] mb-2">
              <div className="flex items-center justify-between gap-2 relative top-3 px-2">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  2525-06-26 18:58:01
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  Check In Day 3
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  You Get 3.00 Token
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-9 rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)] mb-2">
              <div className="flex items-center justify-between gap-2 relative top-3 px-2">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  2525-06-26 18:58:01
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  Check In Day 4
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  You Get 1.00 Token
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-9 rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(242,195,107,0)_0%,rgba(221,143,31,0.2)_100%)]">
              <div className="flex items-center justify-between gap-2 relative top-3 px-2">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  2525-06-26 18:58:01
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  Check In Day 5
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[12.0px] whitespace-nowrap">
                  You Get 3.00 Token
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePageDesign2;
