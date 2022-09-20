import "./App.css";
import EffectsBasic from "./components/EffectsBasic";
import { useState } from "react";
import PersistData from "./components/PersistData";
import Lista from "./components/Lista";

function App() {
  const initialtTaskList = [
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ];
  const [taskList, setTaskList] = useState(initialtTaskList);
  const [showComponent, setShowComponent] = useState(false);
  const [counter, setCounter] = useState(0);

  /*
  updateTaskList es la función que le pasaremos al componente Lista como prop para que pueda actualizar el estado del padre
  Por simplificar, siempre ponemos los mismos datos
  */
  const updateTasList = (taskList, task) => {
    setTaskList([
      ...taskList,
      { id: taskList[taskList.length - 1].id + 1, task: task, done: false },
    ]);
  };

  /*
  Con updateStatus actualizamos el estado de uno de los items desde el hijo, la pasamos como prop
  Necesitamos pasar datos como la lista, el indice... Para hacer el cambio
  */
  const updateStatus = (list, index, done) => {
    const updatedList = [...list];
    updatedList[index].done = done;
    setTaskList(updatedList);
  };

  const handleChange = (e) => {
    console.log(e);
    setShowComponent(e.target.checked);
  };

  return (
    <div className="App">
      {showComponent && <EffectsBasic counter={counter} />}
      <form>
        <label htmlFor="toggle"> Activar</label>
        <input
          onChange={(e) => {
            setCounter(e.target.value);
          }}
          type="number"
        />
        Counter : {counter}
        <input
          id="toggle"
          value={showComponent}
          onChange={handleChange}
          type="checkbox"
        />
      </form>
      <PersistData />
      {/*
        Pasamos a Lista 3 props
        Los datos en la prop list
        Los metodos que actualizarán la lista y el estado de las entradas
      */}
      <Lista
        list={taskList}
        onUpdateTaskList={updateTasList}
        updateDone={updateStatus}
      ></Lista>
    </div>
  );
}

export default App;
