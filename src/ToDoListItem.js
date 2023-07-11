import React from "react";

const ToDoListItem = (props) => {
    <li >
    {props.todos}<button onClick={props.deleteToDo}>Delete</button>
    </li>
}

export default ToDoListItem;

