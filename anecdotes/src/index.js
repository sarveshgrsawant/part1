import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Vote = (props) => (
  <button onClick={props.handleVote}>{props.text}</button>
)

const Next = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => (
  <>
  <h1>Anecdote of the day</h1>
  <p>{props.anecdotes[props.selected]}</p>
  <p>has {props.vote[props.selected]}</p>
  </>
)


const Max = ({ vote }) => {

  const max = vote.reduce((a, b) => a >= b ? a : b)
  
  let maxIndex
  if(max === 0){
    maxIndex = -1
  }else{
    for(let i = 0; i < vote.length; i++){
      if(vote[i] === max){
        maxIndex = i
      }
    }
  }

  if(maxIndex !== -1){
    return (
      <>
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]} 
      <p>has {max} votes</p>
      </>
    )
  }
  return (
    <h1>Anecdote with most votes</h1>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleClick = () => {
    setSelected(Math.floor(Math.random()*(anecdotes.length-1)))
  }
  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }
  return (
    <div>
      <Display anecdotes={anecdotes} selected={selected} vote={vote}/>
      <Vote text='vote' handleVote={handleVote} />
      <Next text="next anecdote" handleClick={handleClick} />
      <Max vote={vote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)