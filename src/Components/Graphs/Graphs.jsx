import React from 'react'
import Graph from './Graph'
import './graphs.css'

const Graphs = () => {
  return (
    <div className='graphs_div'>
      <div className='filters_div'>
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
      <div className='graphs'>
        <Graph/>
      </div>
    </div>
  )
}

export default Graphs