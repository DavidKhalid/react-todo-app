// import { useState } from 'react'
import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [todos] = useState([
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
        {todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
      </div>
    </>
  );
}

export default App;
