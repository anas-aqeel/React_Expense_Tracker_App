import React, { useState, useContext, useEffect } from 'react'
import Graph from './Graph'
import { labels_1, labels_2, labels_3 } from './utils';
import { MyContext } from '../../Contex/TxContex';
import './graphs.css'


const Graphs = () => {
  console.log('s')
  const { state } = useContext(MyContext);
  const [labels, setLabels] = useState(labels_1);
  const [triggerWeeklyData, setTriggerWeeklyData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const _weeklyData = labels_2.map((a, b) => {
      let dayInc = 0;
      let dayExp = 0;
      state.transactions.map((e) => {
        if (labels_2[e.time.getDay()] == a) {
          if (e.type == 'Income') {
            dayInc += e.value;
          } else {
            dayExp += e.value;
          }
        }
      })
      return {
        Income: dayInc,
        Expense: dayExp
      }
    });
    setData(_weeklyData)
  }, [state.transactions, triggerWeeklyData])

  const _monthlyData = labels_3.map((a, i) => {
    let Income = 0;
    let Expense = 0;
    state.transactions.map((e) => {
      if (labels_3[e.time.getMonth()] == a) {
        if (e.type == 'Income') {
          Income += e.value;
        } else {
          Expense += e.value;
        }
      }
    })
    return { Income, Expense }
  });


  return (
    <div className='graphs_div'>
      <div className='filters_div'>
        <button
          className={labels[0] == labels_1[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_1)
          }}>
          Daily
        </button>
        <button
          className={labels[0] == labels_2[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_2.filter((e,i)=>i<(new Date().getDay()+1)));
            setTriggerWeeklyData(!triggerWeeklyData);
          }}>
          Weekly
        </button>
        <button
          className={labels[0] == labels_3[0] ? 'active_filter' : ''}
          onClick={() => {
            setLabels(labels_3.filter((e,i)=>i<(new Date().getMonth()+1)));
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