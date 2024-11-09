import PropTypes from "prop-types";

const TodoItem = (props) => {
  // console.log("this is fill item", props.todo.title);
  // console.log("this is function", props.tog  gleCompleted);
  // console.log(props.deleteTodo);
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
      <button
        onClick={() => {
          props.deleteTodo(props.todo.id);
        }}
        style={style.button}
      >
        x
      </button>
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
  deleteTodo: PropTypes.func.isRequired, // Corrected the missing validation
};

const style = {
  TodoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px", // Corrected from weight
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
