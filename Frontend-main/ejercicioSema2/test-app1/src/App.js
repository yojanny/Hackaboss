
import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';





function App() {

  const initiatTaskList = [{
    id: 1,
    task: 'Ir a la compra',
    done: false
  },
  {
    id: 2,
    task: 'Hacer ejercicios de react',
    done: true
  }
  ];
 
    const [taskList, setTaskList] = useState(initiatTaskList);
    
      
  return (

    <div className="App">

      

     <Lista list={taskList}></Lista>
     
   </div>
 );
        
  }

 


export default App;
