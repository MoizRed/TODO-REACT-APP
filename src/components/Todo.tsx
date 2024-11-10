import Todolist from "../components/Todolist.tsx";
import { FormEvent } from "react";
import { useState } from "react";
import Form from "../components/Form.tsx";

import Footer from "./Footer.tsx";
// @deno-types="@types/react"
// @deno-types="@types/react-dom/client"
type Props = {};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [donecount , setdonecount] = useState(0)
   
  const donelist = todos.filter((e: any)=>e.done === true)

    console.log( "TASKS DONE : " ,  donelist.length , "list:\n " , donelist)

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      {/* <h1>completed todo : {donelist.length}</h1> */}

      <Footer donecount={donelist.length} todos={todos}/>
    </>
  );
}

// to return jsx use ()
