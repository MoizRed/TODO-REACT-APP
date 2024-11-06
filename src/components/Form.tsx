import { FormEvent } from "react";
import { useState } from "react";

import {styles} from "./form.module.css"

type props = {
todos: string[],
setTodos: React.Dispatch<React.SetStateAction<string[]>>;

}

export default function Form({todos,setTodos} : props) {

  const [todo, setTodo] = useState("");
  
  function handlechange(e: FormEvent) {
    e.preventDefault();
    setTodo("");
    setTodos([...todos, todo]);
  }
  
return(
  <form>
  <input
    onChange={(e) => setTodo(e.target.value)}
    type="text"
    value={todo}
  />
  <button type="submit" onClick={(e) => handlechange(e)}>Submit</button>
</form>
  )
}
