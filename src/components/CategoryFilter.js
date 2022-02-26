import React, { useState } from "react";

function CategoryFilter({categories, setCategoryFilter}) {
  const [isClickedList, setIsClickedList] = useState([]);

  function handleClick(category) {
    console.log("category is: " + category);
    console.log(isClickedList)
    setIsClickedList([category]);
    setCategoryFilter(category);
    console.log(isClickedList)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
          const isClicked = isClickedList.includes(category);
          console.log("isClicked is: " + isClicked);
          return <button key={index} index={index} className={isClicked ? 'selected' : null} onClick={() => handleClick(category)}>{category}</button>
  })}
    </div>
  );
}

export default CategoryFilter;
