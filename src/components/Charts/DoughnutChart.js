import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({data}) => {
  return (<div className='w-[50%]'> <Doughnut data={data}/></div>
   
  )
}

export default DoughnutChart