import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good +1)
  const increaseNeutralByOne = () => setNeutral(neutral +1)
  const increaseBadByOne = () => setBad(bad +1)
  const total = good + neutral + bad;
  const avg = (good - bad)/(good+bad);
  const positive = good/total


const Feedback= (props) => {
  return(
  <h1>{props.name}</h1>
  )
}
const Pos= (props) => {
  return(
    <p>
      {props.text} {props.positive}%
    </p>
  )
}
const Avg= (props) => {
  return(
    <p>
      {props.text} {props.avg}
    </p>
  )
}
const All = (props) => {
  return(
    <p>
      {props.text} {props.total}
    </p>
  )
}
const Statistics= (props) => {
  return(
    <div>
    <p>
      {props.text} {props.counter}
    </p>
  </div>
  )
}
const Button= (props) => {
  return(
    <div style={{ display: "inline-block"}}>
      <button
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  )
}
  return (
    <div>
      <Feedback name={'give feedback'}/>
        <Button onClick={increaseGoodByOne} text="good" />
        <Button onClick={increaseNeutralByOne} text="neutral" />
        <Button onClick={increaseBadByOne} text="bad" />
        <h1>statistics</h1>
        <Statistics 
        text={"good"}
        counter={good}
        />
        <Statistics
        text={"neutral"}
        counter={neutral}
        />
        <Statistics
        text={"bad"}
        counter={bad}
        />
        <All
        text={"all"}
        total={total}/>
        <Avg 
        text={"average"}
        avg={avg}
        />
        <Pos
        text={"positive"}
        positive={positive} />
    </div>
  )
}

export default App
