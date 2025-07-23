import React, { useState, useRef, useEffect } from 'react';

export const SpinWheel = ({ segments, onSpinComplete, spinsAvailable, setSpinsAvailable }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (isSpinning || spinsAvailable <= 0) return;
    
    setSpinsAvailable(prev => prev - 1);
    setIsSpinning(true);
    setWinner(null);

    const fullRotations = 5 + Math.floor(Math.random() * 5);
    const segmentAngle = 360 / segments.length;
    const randomIndex = Math.floor(Math.random() * segments.length);
    const winningSegment = segments[randomIndex];
    const segmentOffset = Math.random() * (segmentAngle * 0.8);
    const winningAngle = randomIndex * segmentAngle + segmentOffset;
    const finalRotation = fullRotations * 360 + (360 - winningAngle);
    
    setRotation(finalRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setWinner(winningSegment);
      if (onSpinComplete) {
        onSpinComplete(winningSegment);
      }
    }, 5000);
  };

  return (
    <div className="relative w-[226px] h-[226px]">
      <div 
        ref={wheelRef}
        className="absolute w-[226px] h-[226px] top-0 left-0 transition sanctified-transform duration-5000 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img
          className="absolute w-[226px] h-[226px] top-0 left-0"
          alt="Spin Wheel"
          src="https://c.animaapp.com/mdfn2b29iC3wMU/img/group.png"
        />
        {segments.map((segment, index) => (
          <React.Fragment key={segment.id}>
            <div 
              className={`absolute text-${segment.textColor} font-inter font-semibold text-[6.5px] tracking-[0] leading-normal ${segment.id === 1 ? 'w-[34px] top-[7px] left-0' : 
                    segment.id === 2 ? 'w-[30px] top-[151px] left-[126px]' : 
                    segment.id === 3 ? 'w-[42px] top-[104px] left-[34px]' :
                    segment.id === 4 ? 'w-[42px] top-[76px] left-[39px]' :
                    segment.id === 5 ? 'w-[42px] top-[41px] left-[92px]' :
                    segment.id === 6 ? 'w-[42px] top-[72px] left-[145px]' :
                    segment.id === 7 ? 'w-[37px] top-40 left-[95px]' :
                    segment.id === 8 ? 'w-[43px] top-[136px] left-10' :
                    segment.id === 9 ? 'w-[43px] top-[143px] left-[150px]' :
                    segment.id === 10 ? 'w-[43px] top-[57px] left-[62px]' :
                    'w-[43px] top-14 left-[123px]'} 
              rotate-[${segment.angle}deg]`}
            >
              {segment.text}
            </div>
            {segment.image && (
              <div className={`absolute ${segment.id === 1 ? 'w-[51px] h-[29px] top-[98px] left-[157px]' : 'w-[30px] h-[25px] top-[172px] left-[140px]'}`}>
                <img
                  className="absolute w-4 h-[29px] top-0 left-8"
                  alt="Image"
                  src={segment.image}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <button 
        onClick={spinWheel}
        disabled={isSpinning || spinsAvailable <= 0}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] text-black font-bold text-sm z-10 ${isSpinning || spinsAvailable <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 cursor-pointer'}`}
      >
        {isSpinning ? 'Spinning...' : 'SPIN'}
      </button>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 z-20">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[#F2C36B]"></div>
      </div>
      {winner && !isSpinning && (
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#F2C36B] to-[#DD8F1F] text-black font-bold py-1 px-3 rounded-md text-sm">
          You won: {winner.text}!
        </div>
      )}
    </div>
  );
};