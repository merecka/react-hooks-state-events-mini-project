import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleTasks(newTasks) {
    setTasks(newTasks);
  }

  function handleCategoryFilter(category) {
    console.log("current cateogry is: " + category)
    setCurrentCategory(category);
    if (category === 'All') {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter(task => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategoryFilter={handleCategoryFilter} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} updateTasks={handleTasks} />
    </div>
  );
}

export default App;
