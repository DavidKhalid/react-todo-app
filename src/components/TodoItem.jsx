// import React from "react";

import PropTypes from "prop-types";

const TodoItem = (props) => {
  console.log("this is fill item", props.todo.title);

  return <p>{props.todo.title}</p>;
};

// * highlight: add props validation
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
