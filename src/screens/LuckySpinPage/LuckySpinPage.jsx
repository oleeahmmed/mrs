import React, { useState } from "react";
import { OverlapWrapper } from "./sections";
import { prizeListData, winnerListData, wheelSegments } from "./data/spinData";
import { Header, Footer, Frame} from "../../component";

export const LuckySpinPage = () => {
  const [spinsAvailable, setSpinsAvailable] = useState(0);
  const [winners, setWinners] = useState(winnerListData);
  const [prizes, setPrizes] = useState(prizeListData);
  const [segments, setSegments] = useState(wheelSegments);
  const [points, setPoints] = useState(2000);
  
  const handleSpinComplete = (winningSegment) => {
    const newWinner = {
      date: new Date().toISOString().split('T')[0],
      user: "YOU**************",
      prize: winningSegment.text
    };
    setWinners([newWinner, ...winners.slice(0, 4)]);
  };

  return (
    <div className="bg-[#070707] flex flex-row justify-center w-full">
      <div className="bg-[#070707] w-[375px] h-[770px] relative">
        <Header />
        <div className="absolute w-[375px] h-[677px] top-[93px] left-0">
          <Footer />
          <OverlapWrapper 
            prizeListData={prizes}
            winnerListData={winners}
            wheelSegments={segments}
            spinsAvailable={spinsAvailable}
            setSpinsAvailable={setSpinsAvailable}
            points={points}
            setPoints={setPoints}
            onSpinComplete={handleSpinComplete}
          />
          <Frame points={points} />
        </div>
      </div>
    </div>
  );
};