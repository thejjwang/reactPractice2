import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addToDo(){
    if (inputValue !== ''){
        // set 
        setTodos([...todos, inputValue]);
        // set input value back to empty string
        setInputValue('')
    }
}  

    function deleteToDo(index){
        // couldnt set newArr directly to the .splice 
        const newTodosArr = [...todos];
        newTodosArr.splice(index, 1);
        setTodos(newTodosArr);
   
    }
    function handleChange(e){
        setInputValue(e.target.value);
    }

    return (
        <>  
            <input type="text" placeholder="Enter Your Todo Item" value={inputValue} onChange={handleChange}></input>
            <button onClick={addToDo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <ToDoListItem todo={todo} deleteToDo={() => deleteToDo(index)} key={index}/>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;