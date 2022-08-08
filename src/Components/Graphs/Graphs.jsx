import React, { useState } from 'react'
import Graph from './Graph'
import './graphs.css'

const Graphs = () => {

  const labels_1 = [
    '12:00 am',
    '3:00 am',
    '6:00 am',
    '9:00 am',
    '12:00 pm',
    '3:00 pm',
    '6:00 pm',
    '9:00 pm'
  ];
  const labels_2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const labels_3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [labels, setLabels] = useState(labels_1);

  return (
    <div className='graphs_div'>
      <div className='filters_div'>
        <button className={labels[0] == labels_1[0] ? 'active_filter' : ''} onClick={() => { setLabels(labels_1) }}>Daily</button>
        <button className={labels[0] == labels_2[0] ? 'active_filter' : ''} onClick={() => { setLabels(labels_2) }}>Weekly</button>
        <button className={labels[0] == labels_3[0] ? 'active_filter' : ''} onClick={() => { setLabels(labels_3) }}>Monthly</button>
      </div>
      <div className='graphs'>
        <Graph labels={labels} />
      </div>
    </div>
  )
}

export default Graphs