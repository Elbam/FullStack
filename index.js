import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div> 
     <h1>{props.course} </h1>
     </div>
)}

const Part = (props) => {
  return (
    <div> 
     <h1>{props.parte} {props.ejercicios} </h1>
     </div>
)}


const Content = (props) => {
  return (
    <div> 
     <Part parte={props.parte1} ejercicios={props.ejercicio1} /> 
     <Part parte={props.parte2} ejercicios={props.ejercicio2} /> 
     <Part parte={props.parte3} ejercicios={props.ejercicio3} /> 
     </div>
)
}


const Total = (props) => {

  return (
    <div> 
       <p> Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p> 

     </div>
)
}


const App = () => {

  const course= 'Half Stack application Development';
  const part1= 'Fundamentals of React';
  const exercises1=10;
  const part2 = 'Using props to pass data';
  const exercises2=7;
  const part3='State of a component';
  const exercises3=14;

return (
<div> 
 <Header course={course} />
 <Content parte1={part1} parte2={part2} parte3={part3} ejercicio1={exercises1} ejercicio2={exercises2} ejercicio3={exercises3} /> 
 <Total exercises1={exercises1}  exercises2={exercises2} exercises3={exercises3} /> 

 
</div>
)
}

 ReactDOM.render(<App />, document.getElementById('root'));
