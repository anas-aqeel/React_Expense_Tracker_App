import React, { useState, useContext, useEffect } from 'react'
import Graph from './Graph'
import {
  labels_1,
  labels_2,
  labels_3,
  weeklyFilter,
  monthlyFilter,
  dailyFilter
} from './utils';
import { MyContext } from '../../Contex/TxContex';
import './graphs.css'


const Graphs = () => {
  const { state } = useContext(MyContext);
  const [labels, setLabels] = useState(labels_1);
  const [data, setData] = useState([]);


  let _dailyData = dailyFilter(state.transactions);
  let _weeklyData = weeklyFilter(state.transactions);
  let _monthlyData = monthlyFilter(state.transactions);

  useEffect(() => {
    _dailyData = dailyFilter(state.transactions);
    _weeklyData = weeklyFilter(state.transactions);
    _monthlyData = monthlyFilter(state.transactions);
    setData(_weeklyData)
    setLabels(labels_2)
  }, [state.transactions])


  return (
    <div className='graphs_div'>
      <div className='filters_div'>
        <button
          className={labels[0] == labels_1[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_1)
            setData(_dailyData)
          }}>
          Daily
        </button>
        <button
          className={labels[0] == labels_2[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_2.filter((e, i) => i < (new Date().getDay() + 1)));
            setData(_weeklyData)
          }}>
          Weekly
        </button>
        <button
          className={labels[0] == labels_3[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_3.filter((e, i) => i < (new Date().getMonth() + 1)));
            setData(_monthlyData)
          }}>
          Monthly
        </button>
      </div>
      <div className='graphs'>
        <Graph labels={labels} _data={data} />
      </div>
    </div>
  )
}

export default Graphs