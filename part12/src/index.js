import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const course = 'Half Stack application development'
	
	const parts = [
	{
		name: 'Fundamentals of React',
		exercises: 10
	},

	{
		name: 'Using props to pass data',
		exercises: 7
	},

	{
		name: 'State of a component',
		exercises: 14
	}
	]

	const [first, second, third] = parts
	console.log(first.name)
	console.log(second.name)

	const Header = (props) => {
  	return (
    <div>
      <h1>{props.course}</h1>
    </div>
  	)
	}

	const Content = (props) => {
  	return(
    <div>
    	<p>{first.name} {first.exercises}</p>
    	<p>{second.name} {second.exercises}</p>
    	<p>{third.name} {third.exercises}</p>
    </div>
  	)
	}

	const Total = (props) => {
	return(
	<div>
		<p>Number of exercises {first.exercises + second.exercises + third.exercises}</p>
	</div>	
	)
	}

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
  
}




ReactDOM.render(<App />, document.getElementById('root'));


