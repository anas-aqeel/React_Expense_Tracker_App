import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';
import './graphs.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Graph = ({ labels }) => {


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Expense',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Income',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(10, 51, 4)',
                backgroundColor: 'rgba(31, 138, 17)',
            },
        ],
    };
    return (
        <Line className='graph' options={options} data={data} />
    )
}

export default Graph