
import {useState} from "react";

function Lista({list}) { 
    return (
    <ul>
        {list.map((todo) => {
            return <li>{todo.done ? <s>{todo.task}</s>: todo.task}</li>;
        })}
        
       
    
        
    </ul>
    )
}
     
export default Lista;
   
    
     

   
 


