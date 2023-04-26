import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,102,12,13,14,1,5,45,24,45,34,46,57,35,46,56,34,46,3,23],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [10,102,12,13,14,1,5,45,24,45,34,46,57,35,46,56,34,46,3,23],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: [10,102,12,13,14,1,5,45,24,45,34,46,57,35,46,56,34,46,3,23],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export function Stackedchart() {
  return <Bar options={options} data={data} />;
}
