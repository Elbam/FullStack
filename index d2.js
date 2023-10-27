import React, {useState} from 'react';
//import ReactDOM from 'react-dom'; //
import { createRoot } from 'react-dom/client';



const Display = ({contador}) => <div> {contador} </div>


const Botones2 = (props) =>{
 return(
  <button onClick={props.manejaClick} > {props.textoBoton} </button>
 )
     }

// Esta forma de Botones requiere return por las {}

const Botones = ({manejaClick, textoBoton}) => (
      
       <button onClick={manejaClick} > {textoBoton} </button>
)  

// Esta forma de Botones NO requiere return por los () , ya que devuelve una exp´resion de objeto literal 

const App = () => {
    const [conter,setConter]=useState(0);

  const 
  setToConter = (nuevoC) => ()=>{
    setConter(nuevoC)
  };
  
  //const llevaZero= () => setConter(0);

return (
<div> 
  {conter}
  <button onClick={setToConter(1000)} > Mil </button> 
  <button onClick={setToConter(conter+1)} > Incrementar </button> 
  <button onClick={setToConter(0)} > Reset </button>
</div>
)
}

 /// ReactDOM.render(   <App />, document.getElementById('root')  );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) para TypeScript
root.render(<App tab="home" />);