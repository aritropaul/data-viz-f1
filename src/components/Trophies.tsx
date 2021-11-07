import React from 'react';

import { BsTrophyFill } from 'react-icons/bs';

const Trophies = () => {
  return (
    <div className="w-[800px] mx-auto">
      <div className="grid grid-cols-2 gap-2 container-md mt-12">
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="grid grid-cols-4 gap-1 text-yellow-400 justify-center">
            <div></div>
            <BsTrophyFill size={32} className="mx-auto" />
            <BsTrophyFill size={32} className="mx-auto" />
            <div></div>
          </div>
          <span className="text-center text-white font-semibold">
            Mika Hakkinnen
          </span>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="grid grid-cols-4 gap-1 text-yellow-400">
            <BsTrophyFill size={32} className="mx-auto" />
            <BsTrophyFill size={32} className="mx-auto" />
            <BsTrophyFill size={32} className="mx-auto" />
            <BsTrophyFill size={32} className="mx-auto" />
          </div>
          <span className="text-center text-white font-semibold">
            Michael Schumacher
          </span>
        </div>
      </div>
    </div>
  );
};

export { Trophies };
