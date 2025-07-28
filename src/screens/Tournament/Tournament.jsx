import React, { useState, useEffect } from "react";

// Using your preferred and correct import format from "../../component"
import { Header, Footer, Frame, FrameWrapper } from "../../component";

/**
 * InitialScreen Component
 * This component renders the exact JSX structure provided for the "first jsx modal".
 * It includes the Header, Footer, Frame, and FrameWrapper as they were in the original.
 * It will automatically close after a delay, or can be manually closed.
 * @param {object} props - Component props.
 * @param {function} props.onClose - Callback function to execute when the modal is closed.
 */
const InitialScreen = ({ onClose }) => {
  // Automatically close the modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3000 milliseconds = 3 seconds
    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [onClose]); // Re-run effect if onClose changes (though it's stable here)

  return (
    <div
      className="bg-[#070707] flex flex-row justify-center w-full"
      data-model-id="659:146"
    >
      <div className="bg-[#070707] w-[375px] h-[806px] relative">
        <div className="absolute w-[375px] h-[677px] top-0 left-0">
          <div className="absolute w-[60px] h-[60px] top-[123px] left-[21px] shadow-[0px_5px_10px_#bc926e40]" />

          <Header />

          <Frame />
          <FrameWrapper />
        </div>

        <Footer /> {/* Footer is part of the initial modal as per your provided code */}

        {/* Manual close button (e.g., an X icon) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
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
const image1 = "https://c.animaapp.com/mdmjntiui1wGpc/img/image-57-3.png";
const image2 = "https://c.animaapp.com/mdmjntiui1wGpc/img/image-56-3.png";

/**
 * Tournament Component
 * Manages the display of either the initial view (modal) or the main game lists.
 */
export const Tournament = () => {
  // State to control which part of the UI is visible
  const [showGameLists, setShowGameLists] = useState(false);

  return (
    <div className="bg-[#070707] flex flex-col items-center min-h-screen w-full font-['Inter']">
      {/* The main container now also takes min-h-screen and is a flex column */}
      <div className="w-full max-w-[375px] relative min-h-screen flex flex-col">
        {/* Conditional rendering based on showGameLists state */}
        {!showGameLists ? (
          // Show the initial view (modal) if showGameLists is false
          <InitialScreen onClose={() => setShowGameLists(true)} />
        ) : (
          // Show the main game lists, including Header and Footer
          <>
            <Header /> {/* Header added here */}
            {/* Main content area with padding. Removed overflow-y-auto and fixed height. */}
            <div className="px-5 py-6 space-y-8 pt-[83px] pb-[83px] flex-grow">
              {/* Weekly Battles Section */}
              <div className="space-y-3.5">
                <h2 className="text-white text-lg font-medium">Weekly Battles</h2>
                <div className="grid grid-cols-4 gap-2">
                  <GameCard imageSrc={image1} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image1} />
                </div>
              </div>

              {/* Hot Games Section */}
              <div className="space-y-3.5">
                <h2 className="text-white text-lg font-medium">Hot Games</h2>
                <div className="grid grid-cols-4 gap-2">
                  <GameCard imageSrc={image1} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image1} />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <GameCard imageSrc={image1} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image1} />
                </div>
              </div>

              {/* Exclusive Tournaments Section */}
              <div className="space-y-3.5">
                <h2 className="text-white text-lg font-medium">Exclusive Tournaments</h2>
                <div className="grid grid-cols-4 gap-2">
                  <GameCard imageSrc={image1} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image2} />
                  <GameCard imageSrc={image1} />
                </div>
              </div>
            </div>
            {/* The Footer is now positioned by the flex container */}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Tournament;