import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  } else {
    return(
      <div>
        <p>
          {props.text} {props.counter}
          <br />
          {props.text1} {props.counter1}
          <br />
          {props.text2} {props.counter2}
          <br />
          {props.text3} {props.total}
          <br />
          {props.text4} {props.avg}
          <br />
          {props.text5} {props.positive}%
      </p>
    </div>
    )
  }
}

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

        text1={"neutral"}
        counter1={neutral}

        text2={"bad"}
        counter2={bad}
  
        text3={"all"}
        total={total}

        text4={"average"}
        avg={avg}

        text5={"positive"}
        positive={positive} />
    </div>
  )
}

export default App
