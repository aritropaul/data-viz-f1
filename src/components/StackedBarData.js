import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['91', '92', '93', '94', '95', '96', '97', '98', '99', '00', '01'],
  datasets: [
    {
      label: '# of Points - Schumacher',
      data: [4, 53, 52, 92, 102, 59, 78, 86, 44, 108, 123],
      backgroundColor: 'rgb(255, 0, 110)',
    },
    {
      label: '# of Race wins - Schumacher',
      data: [0, 1, 1, 8, 9, 3, 5, 6, 2, 9, 9],
      backgroundColor: 'rgb(58, 134, 255)',
    },
    {
      label: '# of Championships - Schumacher',
      data: [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      backgroundColor: 'rgb(255, 227, 129)',
    },
    {
      label: '# of Points - Hakkinnen',
      data: [-2, -11, -4, -26, -17, -31, -27, -100, -76, -89, -37],
      backgroundColor: 'rgb(131, 56, 236)',
    },
    {
      label: '# of Race wins - Hakkinnen',
      data: [0, 0, 0, 0, 0, 0, -1, -8, -5, -4, -2],
      backgroundColor: 'rgb(251, 86, 7)',
    },
    {
      label: '# of Championships - Hakkinnen',
      data: [0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
      backgroundColor: 'rgb(227, 215, 255)',
    },
  ],
};

const options = {
  indexAxis: 'y',
  plugins: {
    tooltip: {
      label: function(context) {
        let label = context.dataset.label;
        if (context.parsed.x !== null) {
          label += Math.abs(context.parsed.x)
        }
        return label;
      }
    }
  },
  scales: {
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Year',
      },
      ticks: {
        beginAtZero: true,
      },
    },
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Points',
      },
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          return Math.abs(value);
        }
      },
    },
  },
};

const StackedBarData = () => {
   /* eslint-disable */ 
  return (<Bar data={data} options={options} className="mt-12" width={400} height={400} />);
  /* eslint-enable */
};

export { StackedBarData };
