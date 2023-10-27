import React, {useState} from 'react';
//import ReactDOM from 'react-dom'; //
import { createRoot } from 'react-dom/client';

// Ejercicios  1.6, 1.7,  1.8, 1.9, 1.10 y 1.11 UNICAFE  


const StatisticsPorLinea =(props) => {
return (
  <tr>
    {props.textoE}    
    {props.valorE}     
   </tr>
)
}


const Statistics = (props) => {

  //const aver =(props.votosGR-props.votosBR) / (props.votosNR+props.votosBR+props.votosGR);  
  //const averG =(props.votosGR) / (props.votosNR+props.votosBR+props.votosGR);


 if (props.votosGR>0 ||  props.votosNR>0 || props.votosBR>0 ) {  
 return (
  <div>
    <p>
    Estadisticas
    </p>
   < StatisticsPorLinea  textoE='Good:  '  valorE={props.votosGR} />
   < StatisticsPorLinea  textoE='Bad:  '  valorE={props.votosBR} />
   < StatisticsPorLinea  textoE='Neutros:  '  valorE={props.votosNR} />
   < StatisticsPorLinea  textoE='Total votos: '  valorE={props.votosNR+props.votosBR+props.votosGR} />
   < StatisticsPorLinea  textoE='Average: '  valorE={(props.votosGR-props.votosBR) / (props.votosNR+props.votosBR+props.votosGR)} />
   < StatisticsPorLinea  textoE='Average Good: '  valorE={(props.votosGR) / (props.votosNR+props.votosBR+props.votosGR)} />
 </div> 
 )
}
else {
return (
<div>
    <p>
    No hay Datos para Estadisticas
    </p>
 </div>
)
}
}


const Botones = ({manejaClick, textoBoton}) => (
     
    <button onClick={manejaClick} > {textoBoton} </button>
)  
 

const App = () => {
    const [votosG,setvotosG]=useState(0);
    const [votosB,setvotosB]=useState(0);
    const [votosN,setvotosN]=useState(0);

    const incrementaG = () => setvotosG(votosG+1);
    const incrementaB = () => setvotosB(votosB+1);
    const incrementaN = () => setvotosN(votosN+1);
    
    
return (
<div> 
   Demnos Su Feedback
   <p>
   <Botones manejaClick={incrementaG} textoBoton= "Good" /> 
   <Botones manejaClick={incrementaB} textoBoton= 'Bad' />
   <Botones manejaClick={incrementaN} textoBoton= 'Neutral' />
   </p>
<Statistics votosGR={votosG} votosBR={votosB} votosNR={votosN} />

</div>
)
}

 /// ReactDOM.render(   <App />, document.getElementById('root')  );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) para TypeScript
root.render(<App tab="home" />);