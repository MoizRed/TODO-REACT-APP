import { useState } from "react"
import { FormEvent } from "react";
import TodoItem from "./TodoItem.tsx";
// @deno-types="@types/react"
// @deno-types="@types/react-dom/client"
type Props = {}


export default function Todo({}: Props) {
  
    const [todo , setTodo] = useState("")


    const[todos , setTodos] = useState([])
    function handlesubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        setTodos([...todos , todo])

        setTodo("")
            
    }

    return (
    <div>
        
<form onSubmit={handlesubmit}>

    <input onChange={e => setTodo(e.target.value)}  value ={todo}type="text"/>


    <button>ADD sTASK</button>
</form>

<h1>{todos.map((item : string, i :number ) => <TodoItem item={item} key={i} />)}</h1>

    </div>
  )
};

// to return jsx use ()
