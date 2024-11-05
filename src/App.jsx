// import { useState } from 'react'
import { useState } from "react";
import Todos from "./components/Todos";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finis Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false, 
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    console.log(`this is todoId ${todoId}`);
    const updatedTodos = todos.map((book)=>{
      if(book.id === todoId){
        book.completed = !book.completed
      }
      return book;
    })
    setTodos(updatedTodos)
    
  }

  return (
    // * highlight: add inline css
    <>
      <div style={style.container} >
        <h1 style={style.title}>React Project</h1>
        <Todos
          todos= {todos}
          toggleCompleted = {toggleCompleted}
         />
      </div>
    </>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px"
  },
}

export default App;
