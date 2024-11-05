// import React from "react";

import PropTypes from "prop-types";

const TodoItem = (props) => {
  // console.log("this is fill item", props.todo.title);
  // console.log("this is function", props.toggleCompleted)

  const getTodoTitleStyle = () => {
    if(props.todo.completed === true){
      return {textDecoration: "line-through"}
    }else {
      return {textDecoration: "none"}
    }
  }

  return (
    <div style={style.TodoItem}>
      <input 
      type="checkbox" 
      style={style.checkbox}
      //* highlight: only completed until the call "function toggleCompleted" in the input checkbox
      onChange={() => {props.toggleCompleted(props.todo.id)}}
      />
      <p style={getTodoTitleStyle()}>{props.todo.title}</p>
    </div>
  );
};

// * highlight: add props validation
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleCompleted: PropTypes.func.isRequired,

  
};

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
  fontsize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    weight: "18px"
  }
}

export default TodoItem;
