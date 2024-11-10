import deno from "@deno/vite-plugin";
import { useState } from "react";
import { string } from "../../../../../.cache/deno/npm/registry.npmjs.org/@types/prop-types/15.7.13/index.d.ts";
import { isIgnored } from "../../../../../.cache/deno/npm/registry.npmjs.org/@jridgewell/trace-mapping/0.3.25/dist/types/trace-mapping.d.ts";
import { todo } from "node:test";

type props = {  
  item : {

    name :string
    done : boolean
  }
  todos: {name: string; done: boolean}[]; //this is an array of object i want you to give a valid type for it 
  setTodos: React.Dispatch<React.SetStateAction<{name: string; done: boolean}[]>>;
  
};
type item = {

  name :string
  done : boolean
}


const list = {
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
};

export default function Todoitem({ item, todos, setTodos }: props) {

  const [textDecoration , settextDecoration] = useState("none")
  function handleDelete(item: item) {
    console.log("deleted");
    setTodos(todos.filter((e) => e.name != item.name));
  }
function handleclick(item : item){

    setTodos(todos.map(e => e.name === item.name?  {...todos , name: e.name , done:!e.done} :e ))

    
  !item.done ? settextDecoration("line-through") : settextDecoration("none")

console.log(item)

console.log(todos)
}

  return (
    <>
      <li key={item.name}>
        <div style={list}>
          <span style={{ textDecoration: textDecoration }} onClick={e=>handleclick(item)}>{item.name}</span>
          <button onClick={(e) => handleDelete(item)}>X</button>
        </div>
      </li>
    </>
  );
}


///TODO rewatch the video because the shitty code is shitty and doesnt align with react's best practices