import React, { useState, useEffect } from 'react';
import List from './List'
import Chart from './Chart'
import './App.css';
import { api } from './api'
import { getChartData } from './utils/getChartData'
import { getListData } from './utils/getListData'

const App: React.FC = () => {
  const [tweets, setTweets] = useState({})

  useEffect(() => {
    api.getTweets()
      // @ts-ignore
      .then( (data: {}) =>{
        console.log({data})
        setTweets(data)
     })
  }, [])
  // @ts-ignore
  const chartData = getChartData(tweets)
  // @ts-ignore
  const listData = getListData(tweets)
  console.log({chartData, listData})
  return (
    <div className="App">
      <div className='app-container'>
          <Chart chartData={chartData}/>
          <List listData={listData}/>
      </div>
    </div>
  );
}

export default App;
