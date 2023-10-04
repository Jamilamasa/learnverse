import React from 'react'
import DoughnutChart from '../Charts/DoughnutChart';

const CoursesCovered = () => {
    const data = {
        labels: ['Covered', 'Uncovered'],
        datasets: [
          {
            label: '# of Votes',
            data: [90,10],
            backgroundColor: [
              'rgb(118,235,64)',
              'rgb(252,89,89)',
            ],
            borderColor: [
                'rgb(118,235,64)',
                'rgb(252,89,89)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div className='flex'>
        <DoughnutChart data={data}/>
        <h1 className='m-auto'>You have covered 90% of the courses, good job!</h1>
    </div>
  )
}

export default CoursesCovered