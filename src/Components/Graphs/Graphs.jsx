import React, { useState } from 'react'
import Graph from './Graph'
import './graphs.css'

const Graphs = () => {

  const labels_1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const labels_2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [labels, setLabels] = useState(labels_1);

  return (
    <div className='graphs_div'>
      <div className='filters_div'>
        <button className={labels == labels_1 ? 'active_filter' : ''} onClick={() => { setLabels(labels_1) }}>Weekly</button>
        <button className={labels == labels_2 ? 'active_filter' : ''} onClick={() => { setLabels(labels_2) }}>Monthly</button>
      </div>
      <div className='graphs'>
        <Graph labels={labels} />
      </div>
    </div>
  )
}

export default Graphs