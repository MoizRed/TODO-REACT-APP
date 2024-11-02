import { useState } from "react"
// @deno-types="@types/react"
// @deno-types="@types/react-dom/client"
type Props = {}

    type Task ={
        id : number,
        name : string


    }


export default function Todo({}: Props) {
  
    const [todo , setTodo] = useState("")
    const [task , setTask] = useState(["task1", "task2"])


    function handlesubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()


        setTask([...task , todo])
        console.log(task)

    }
  
    return (
    <div>
        

<form>

    <input onChange={e => setTodo(e.target.value)}  value ={todo}type="text"/>


    <button onClick={e =>{handlesubmit(e)} }>ADD TASK</button>
</form>

<ol>
       {task.map((e,i)=> <li key={i}>{e}</li>)
       }

</ol>


    </div>
  )
};