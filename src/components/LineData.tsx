import { Line } from 'react-chartjs-2';

const data = {
  labels: ['91', '92', '93', '94', '95', '96', '97', '98', '99', '00', '01'],
  datasets: [
    {
      label: 'Hakkinnen',
      data: [16, 8, 16, 4, 7, 5, 6, 1, 1, 2, 5],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Schumacher',
      data: [14, 3, 4, 1, 1, 3, NaN, 2, 5, 1, 1],
      fill: false,
      backgroundColor: 'rgb(80, 120, 255)',
      borderColor: 'rgba(100, 130, 255, 0.2)',
    },
  ],
};

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Finishing Position',
      },
      beginAtZero: true,
    },
  },
};

const LineData = () => {
  return <Line className="my-12 w-[600]" data={data} options={options}></Line>;
};

export { LineData };
