import Todolist from "../components/Todolist.tsx"
import { FormEvent } from "react";
import { useState } from "react";

// @deno-types="@types/react" 
// @deno-types="@types/react-dom/client"
type Props = {


};

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    function handlechange(e: FormEvent) {
      e.preventDefault();
      setTodo("");
      setTodos([...todos, todo]);
    }
  return (
    <>
      <form>
    <input
      onChange={(e) => setTodo(e.target.value)}
      type="text"
      value={todo}
    />
    <button type="submit" onClick={(e) => handlechange(e)}>Submit</button>
  </form>
  <Todolist todos={todos}/>
    </>
  );
}

// to return jsx use ()
