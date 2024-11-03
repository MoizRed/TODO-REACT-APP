import { useState } from "react";
import Form from "../components/Form.tsx";
import { FormEvent } from "react";
import TodoItem from "./TodoItem.tsx";
// @deno-types="@types/react"
// @deno-types="@types/react-dom/client"
type Props = {};

export default function Todo({}: Props) {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);
 

  return (
    <div>
     <Form/>
      <h1>
        {todos.map((item: string, i: number) => (
          <TodoItem
            item={item}
            key={i}
          />
        ))}
      </h1>
    </div>
  );
}

// to return jsx use ()
