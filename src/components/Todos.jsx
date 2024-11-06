// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
// import React from "react";

const Todos = (props) => {
  // console.log("Todos props:", props.todos);
  // console.log(props.toggleCompleted);

  return (
    <div style={style.container}>
      {props.todos.map((todoEment) => {
        return <TodoItem key={todoEment.id} todo={todoEment} toggleCompleted= {props.toggleCompleted}/>;
      })}
    </div>
  );
};

// * highlight: add props validation
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

const style = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
