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

  console.log(todos);

  return (
    <>
      <div>
        <h1>React Project</h1>
        <Todos
          todos= {todos}
         />
      </div>
    </>
  );
}

export default App;
