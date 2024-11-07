import Todolist from "../components/Todolist.tsx";
import { FormEvent } from "react";
import { useState } from "react";
import Form from "../components/Form.tsx";
// @deno-types="@types/react"
// @deno-types="@types/react-dom/client"
type Props = {};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
    </>
  );
}

// to return jsx use ()
