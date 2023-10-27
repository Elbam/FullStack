import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div> 
     <h1>{props.curso.name} </h1>
    </div>
)}

const Part = (props) => {
  return (
    <div> 
     <h1>{props.parte} {props.ejercicios} </h1>
     </div>
)}


const Content = (props) => {
 const [parte1, parte2,parte3]=props.partes.parts
  
  return (
    <div> 
     <Part parte={parte1.nombre} ejercicios={parte1.exercises} /> 
     <Part parte={parte2.nombre} ejercicios={parte2.exercises} /> 
     <Part parte={parte3.nombre} ejercicios={parte3.exercises} /> 
     </div>
)
}


const Total = (props) => {

  let total =props.ejercicios.parts.reduce((acumulador,actual)=> acumulador+actual.exercises,0)
  return (
    <div> 
       <p> Number of exercises {total}</p> 

     </div>
)
}


const App = () => {

  const course= {
    name: 'Half Stack application Development',
    parts : [  
        {nombre:'Fundamentals of React',
        exercises:10},
        { nombre:'Using props to pass data',
        exercises:7},
        { nombre:'State of a component',
        exercises:14} 
      ]
      }
return (
<div> 
 <Header curso={course} />
 <Content partes={course} /> 
 <Total ejercicios={course} /> 

 
</div>
)
}

 ReactDOM.render(<App />, document.getElementById('root'));
