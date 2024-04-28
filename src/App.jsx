import "./index.css"
import Form from "./form.jsx"
import List from "./List.jsx"
import { useEffect, useState } from "react"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Item");
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos))
  }, [todos]);

  function todo(title) {
    setTodos((previous) => {
      return [
        ...previous,
        { id: crypto.randomUUID(), title, status: false },
      ];
    });
  }

  function toggleChecked(id, checked) {
    setTodos((previous) => {
      return previous.map((todo) => {
        if (todo.id === id) {
          return ({...todo, status: checked});
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((previous) => {
      return previous.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      })
    });
  }

  
  return (
    <>
      <Form todo={todo} />
      <h1 className="header">TO DO LIST</h1>
      {/* {[<li>Rohan</li>,<li>Goku</li>,<li>Vegeta</li>]} */}
      <List tc={toggleChecked} dt={deleteTodo} todos={todos}/>
    </>
  )
}