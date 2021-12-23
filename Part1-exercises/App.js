import React from 'react';


const App= () => {
  const Header=(props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }
  const Part=(props) => {
    return(
      <p>
        {props.part} has a total of {props.exercise} exercises
      </p>
    )
  }
  const Content=(props) => {
    return (
      <div>
        <Part part={part1} exercise={exercise1} />
        <Part part={part2} exercise={exercise2} />
        <Part part={part3} exercise={exercise3} />
      </div>
    )
  }

  const Total=(props) => {
    return(
      <p>
        There is a total of {exercise1 + exercise2 + exercise3} exercises
      </p>
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
        <Header course={course} />
        <Content />
        <Total />
    </div>
  )
}
export default App;
