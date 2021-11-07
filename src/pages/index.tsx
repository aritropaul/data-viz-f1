import React from 'react';

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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h3 className="text-center font-semibold text-lg text-gray-700 pt-12 mt-12">
        Data Visualization - INST 760
      </h3>
      <h1 className="text-center">Formula 1 Visualization</h1>
      <h3 className="text-center font-semibold text-lg text-gray-700">
        Aritro Paul, Purva Mundlye, Sonica Kulkarni
      </h3>
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
    </Main>
  );
};

export default Index;
