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
      <h3 className="text-center font-semibold text-lg text-gray-600 pt-12 mt-12">
        Data Visualization - INST 760
      </h3>
      <h1 className="text-center">Fast Furious Formula 1</h1>
      <h3 className="text-center font-semibold text-lg text-gray-600">
        Aritro Paul, Purva Mundlye, Sonica Kulkarni
      </h3>
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          Best Constructors over the years
        </h2>
        <p className="font-medium text-md text-gray-600 mt-8">
          Constructors are essentially teams that build cars and participate in
          Grand Prix. Let us take a look at currently active teams and the
          number of their race wins to understand their dominance and history a
          little better.
        </p>
        <BestCnst></BestCnst>
      </div>
      <div className="w-[800px] mx-auto">
        <h2 className="text-center font-semibold text-xl text-white mt-12 pt-20">
          World Drivers Championships won (1991-2001)
        </h2>
        <p className="font-medium text-md text-gray-600 mt-8">
          Michael Schumacher and Mika Hakkinen were certainly great drivers in
          their own right but their battles led to some really exciting and
          thrilling moments. Unlike other rivalries, Schumacher and Hakkinen had
          huge respect for each other on and off the track. While they didn’t
          back down from a fight and definitely pushed the boundaries of racing,
          their battles managed to not cross a line.
        </p>
        <Trophies />
      </div>
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
