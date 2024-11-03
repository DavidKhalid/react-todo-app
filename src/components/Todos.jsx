// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
// import React from "react";

const Todos = (props) => {
    // if(!Array.isArray(props.todos)){
    //     console.error("Expected 'todos' to be an array")
    //     return null;
    // }
  
  console.log("Todos props:", props.todos);
  return (
    <div>
      {props.todos.map((todoEment)=>{
        return <TodoItem key={todoEment.id} todo={todoEment} />
      })}
    </div>
  );
};

// * highlight: add props validation
Todos.propTypes= {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


export default Todos;
