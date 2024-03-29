import React from 'react';

import { Radar } from 'react-chartjs-2';

const data = {
  labels: [
    'Avg Grid Position',
    'Laps Completed',
    'DNF',
    'Avg Race Position',
    'Laps Led',
    'Pole Position',
  ],
  datasets: [
    {
      label: 'Michael Schumacher',
      backgroundColor: 'rgba(255, 159, 28,0.2)',
      borderColor: 'rgba(255, 159, 28,1)',
      pointBackgroundColor: 'rgba(255, 159, 28,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 159, 28,1)',
      data: [69.9, 99.9, 86.42, 31.13, 62, 43],
    },
    {
      label: 'Mika Hakkinnen',
      backgroundColor: 'rgba(89, 65, 169,0.2)',
      borderColor: 'rgba(89, 65, 169,1)',
      pointBackgroundolor: 'rgba(89, 65, 169,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(89, 65, 169,1)',
      data: [32.9, 66.5, 77.18, 14.88, 43, 26],
    },
  ],
};

const RadarData = () => {
  return (
    <Radar
      className="w-[600px] mt-12"
      data={data}
      width={400}
      height={400}
    ></Radar>
  );
};

export { RadarData };
