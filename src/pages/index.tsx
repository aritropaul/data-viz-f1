import React from 'react';

import { BestCnst } from '../components/BestCnst';
import { LapTimes } from '../components/LapTimes';
import { LineData } from '../components/LineData';
import { RadarData } from '../components/RadarData';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { StackedBarData } from '../components/StackedBarData.js';
import { Trophies } from '../components/Trophies';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Fast Furious Formula 1"
          description="A small data visualization experiment on F1 data over the last couple years."
        />
      }
    >
      <h3 className="text-center font-semibold text-lg text-gray-700 pt-12 mt-12">
        Data Visualization - INST 760
      </h3>
      <h1 className="text-center">Fast Furious Formula 1</h1>
      <h3 className="text-center font-semibold text-lg text-gray-700">
        Aritro Paul, Purva Mundlye, Sonica Kulkarni
      </h3>
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Best Constructors over the years
        </h2>
        <BestCnst></BestCnst>
      </div>
      <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
        World Drivers Championships won (1991-2001)
      </h2>
      <Trophies />
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Head to Head Battles (1991-2001)
        </h2>
        <RadarData></RadarData>
      </div>
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Year wise Statistics (1991-2001)
        </h2>
        <StackedBarData></StackedBarData>
      </div>
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Season Results(1991-2001)
        </h2>
        <LineData></LineData>
      </div>
      <div className="w-[800px] mx-auto pb-12">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Best Laptimes
        </h2>
        <LapTimes></LapTimes>
      </div>
    </Main>
  );
};

export default Index;
