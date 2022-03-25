import React, { useState }  from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("");
  const [categoryName, setCategoryName] = useState("Produce");

  function handleTaskName(event) {
    if (event.target.value !== "") {
      setTaskName(event.target.value);
    }
  }

  function handleCategory(event) {
    setCategoryName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: taskName,
      category: categoryName,
    };
    onTaskFormSubmit(newTask);
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskName} value={taskName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={categoryName}>
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category} value={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
