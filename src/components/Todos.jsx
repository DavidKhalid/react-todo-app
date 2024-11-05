import PropTypes from "prop-types";
import TodoItem from "./TodoItem";


const Todos = (props) => {
  // console.log("Todos props:", props.todos);
  // console.log("this is function toggleCompleted:", props.toggleCompleted);
  return (
    <div style={style.container}>
      {props.todos.map((todoElement) => {
        return <TodoItem 
        key={todoElement.id} 
        todo={todoElement}
        toggleCompleted= {props.toggleCompleted}
         />;
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
