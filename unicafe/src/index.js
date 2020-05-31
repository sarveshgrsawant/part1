import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ heading }) => (
<h1>{heading}</h1>
) 

const Button = ({ handleFeedback, text }) => (
  <button onClick={handleFeedback}>{text}</button>
)

const Statistic = ({ count, text }) => (
<p>{text} {count}</p>
)

const Total = ({ countArr }) => {
    const total = countArr.reduce((a, b) => a+b)

  return (
  <p>all {total}</p>
  )
}

const Avg = ({ countArr }) => {
  const total = countArr.reduce((a, b) => a+b)
  const avg = (countArr[0]/total)

  return (
  <p>average {avg}</p>
  )
}

const Positive = ({ countArr }) => {
  const total = countArr.reduce((a, b) => a+b)
  const positive = ((countArr[0]-countArr[2])/total) * 100

  return (
  <p>positive {positive} %</p>
  )
}

const Statistics = (props) => {
  const total = props.countArr.reduce((a, b) => a+b) 
  console.log(total);
  
  if(total === 0){
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
    <Statistic count={props.countArr[0]} text='good' />
    <Statistic count={props.countArr[1]} text='neutral' />
    <Statistic count={props.countArr[2]} text='bad' />
    <Total countArr={props.countArr} />
    <Avg countArr={props.countArr} />
    <Positive countArr={props.countArr} />
    </>
  )
}
    
   

  

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Heading heading='give feedback' />
      <Button handleFeedback={handleGood} text='good' />
      <Button handleFeedback={handleNeutral} text='neutral' />
      <Button handleFeedback={handleBad} text='bad' />
      <Heading heading='statistics' />
      <Statistics countArr={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)