import React from "react";

const ToDoListItem = (props) => {
    return (
        <li>
            {props.todo}<button onClick={props.deleteToDo}>Delete</button>
        </li>
    )
}

export default ToDoListItem;

