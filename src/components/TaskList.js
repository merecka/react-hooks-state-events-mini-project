import React from "react";
import Task from "./Task";

function TaskList({tasks, updateTasks, currentCategory}) {

  function handleDelete(taskIndex) {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    updateTasks(newTasks);
  }
  
  return (
    <div className="tasks">
        {tasks.map((item, index) => (
          <Task key={index} index={index} text={item.text} category={item.category} deleteItem={handleDelete} />
        ))}
    </div>
  );
}

export default TaskList;
