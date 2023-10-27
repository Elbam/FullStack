import React, {useState} from 'react';
//import ReactDOM from 'react-dom'; //
import { createRoot } from 'react-dom/client';


// Ejercicios  1.12, 1.13 y 1.14 ANECDOTAS DE SW 
// manejo de matiz en estado de componente  para almacenar Votos por Anecdota   

const MasVotada =(props) => {
 
  const maximo=Math.max(...props.todosV);
  const indiceM=props.todosV.indexOf(maximo)

  return (
    <div>
      <p>
      Anecdota mas Votada  
      </p>
      <p>
        {anecdotes[indiceM]}  
      </p>
     </div>
  )
  }



const Botones = ({manejaClick, textoBoton}) => (
     
  <button onClick={manejaClick} > {textoBoton} </button>
)  



const App = (props) => {
  
  let votosP =[0,0,0,0,0,0];

  const [selected, setSelected] = useState(0);
  const [votosT, setVotosT] = useState(votosP);

  const proximaSelected = () => setSelected(Math.trunc(Math.random()*5+1));
  
  const nuevoVotos = () => {
    const sumaVotos = votosT.map( (v, i) => {
      if (i=== selected){
       return v+1;
      } else{
       return v;
      }
    });
 setVotosT(sumaVotos);
 }


   
  return (
    <div>
      {props.anecdotes[selected]}
      <p> Tiene  
      {votosT[selected]}
       Votos
      </p>
      <p>
       <Botones manejaClick={proximaSelected} textoBoton= "Proxima Anecdota" /> 
       <Botones manejaClick={nuevoVotos} textoBoton= "Votar Anecdota" /> 
      </p>
      
       <MasVotada todosV={votosT}   />

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


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) para TypeScript
root.render(<App anecdotes={anecdotes} />);