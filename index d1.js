import React, {useState} from 'react';
//import ReactDOM from 'react-dom'; //
import { createRoot } from 'react-dom/client';



const Historia = (props) => {
if (props.todosClick.lenght===0){
    return(
    <div>
     La app es usada haciendo click en los botones
    </div>
   )
  }

  return(
   <div>
     button press Historia: {props.todosClick.join(' ')}
   </div> 
 ) 
} 


const Botones = ({onClick,text}) => (
      <button onClick={onClick} > {text}  </button>
      )


const App = () => {
    const [derecho,setderecho]=useState(0);
    const [izquierdo,setizquierdo]=useState(0);
    const [todosClick,settodosClick]=useState([]);

  const manejaClickD = () => {
     settodosClick(todosClick.concat('D'))
     setderecho(derecho+1)
  };
  
  const manejaClickI = () => {
     settodosClick(todosClick.concat('I'))
     setizquierdo(izquierdo+1)
  };

return (
<div> 
  {izquierdo}
  <Botones onClick={manejaClickI} textoBoton= "Izquierdo" /> 
  <Botones onClick={manejaClickD} textoBoton= 'Derecho' />
  {derecho}
  <Historia todosClick={todosClick}  />
</div>
)
}

 /// ReactDOM.render(   <App />, document.getElementById('root')  );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) para TypeScript
root.render(<App tab="home" />);