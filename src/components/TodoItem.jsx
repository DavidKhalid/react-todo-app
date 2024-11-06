import PropTypes from "prop-types";

const TodoItem = (props) => {
  // console.log("this is fill item", props.todo.title);
  // console.log("this is function", props.toggleCompleted);

  const getTodoTitleStyle = () => {
    if (props.todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={style.TodoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onChange={() => {
          props.toggleCompleted(props.todo.id);
        }}
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
  toggleCompleted: PropTypes.func.isRequired, // Corrected the missing validation
};

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px", // Corrected from fontsize
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px", // Corrected from weight
  },
};

export default TodoItem;

// todo: next create feature delete
