import React from 'react'
import ReactWordcloud from 'react-wordcloud'

const Chart = (props: any) => {
  const { chartData } = props
  return (
    <div style={{display: 'flex', border: '1px solid blue', flexGrow: 2, justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', border: '1px solid red', height: 700, width: 500}}>
          <ReactWordcloud words={chartData}/>
        </div>
    </div>
  )
}

export default Chart
