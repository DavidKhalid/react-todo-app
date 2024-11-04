// import React from "react";

import PropTypes from "prop-types";

const TodoItem = (props) => {
  console.log("this is fill item", props.todo.title);

  return (
    <div style={style.TodoItem}>
      <p>{props.todo.title}</p>
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
};

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
  fontsize: "24px",
  }
}

export default TodoItem;
