import React from 'react';

export const PrizeList = ({ prizes }) => {
  return (
    <div className="w-full max-h-[130px] overflow-y-auto">
      {prizes.map((prize, index) => (
        <div key={index} className="flex items-center justify-between w-full mb-1 px-1">
          <div className="flex items-center gap-1">
            {prize.image && (
              <img
                src={prize.image}
                alt={prize.name}
                className="w-3 h-3 object-contain"
              />
            )}
            <span className="font-poppins font-medium text-[6px]" style={{ color: 'var(--color-text-white)' }}>
              {prize.name}
            </span>
          </div>
          <span className="font-poppins font-medium text-[6px]" style={{ color: 'var(--color-primary)' }}>
            {prize.probability}
          </span>
        </div>
      ))}
    </div>
  );
};
