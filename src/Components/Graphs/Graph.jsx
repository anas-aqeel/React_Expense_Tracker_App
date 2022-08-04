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


const Graph = ({ labels, _data }) => {
    console.log(_data)
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
                data: _data.map(({Expense}) => Expense),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Income',
                data: _data.map(({Income}) => Income),
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