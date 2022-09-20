import { useState } from "react";

function Lista({ list, onUpdateTaskList, updateDone }) {
  const task = "Esto lo tengo que pillar de un formulario";
  return (
    <>
      <ul>
        {list.map((todo, index) => {
          return (
            <li key={todo.id} style={{ color: todo.done ? "red" : "blue" }}>
              {todo.task}{" "}
              {/* El handler de este click es una función que el componente recibe por props */}
              <input
                type="checkbox"
                value={todo.done}
                onClick={() => {
                  updateDone(list, index, !todo.done);
                }}
              />
            </li>
          );
        })}
      </ul>
      {/* El handler de este click es una función que el componente recibe por props */}
      <button
        onClick={() => {
          onUpdateTaskList(list, task);
        }}
      >
        AÑADIR
      </button>
    </>
  );
}
export default Lista;
