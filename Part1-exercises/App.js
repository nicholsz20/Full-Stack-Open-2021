import React from 'react';


const App= () => {
  const Header=(props) => {
    console.log(props)
    return (
      <h1>
        {props.course.name}
      </h1>
    )
  }
  const Part=(props) => {
    return(
      <p>
        {props.name} has a total of {props.exercise} exercises
      </p>
    )
  }
  const Content=(props) => {
    return (
      <div>
        <Part name={course.parts[0].name} exercise={course.parts[0].exercise} />
        <Part name={course.parts[1].name} exercise={course.parts[1].exercise} />
        <Part name={course.parts[2].name} exercise={course.parts[2].exercise} />
      </div>
    )
  }

  const Total=(props) => {
    return(
      <p>
        There is a total of {course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise} exercises
      </p>
    )
  }
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercise: 10
  },
  {
    name:'Using props to pass data',
    exercise: 7
  },
  {
    name: 'State of a component',
    exercise: 14
  }
]}
  return (
    <div>
        <Header course={course} />
        <Content parts={course.parts.name}/>
        <Total parts={course.parts.exercise}/>
    </div>
  )
}
export default App;
