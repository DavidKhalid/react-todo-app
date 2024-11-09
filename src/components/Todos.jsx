import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Todos = (props) => {  
  // console.log(props.deleteTodo);
  return (
    <div style={style.container}>
      {props.todos.map((todoElement) => {
        return (
          <TodoItem
            key={todoElement.id}
            todo={todoElement}
            toggleCompleted={props.toggleCompleted}
            deleteTodo={props.deleteTodo}

          />
        );
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
  deleteTodo: PropTypes.func.isRequired,
};

const style = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
