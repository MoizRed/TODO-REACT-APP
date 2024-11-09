import deno from "@deno/vite-plugin";
import { useState } from "react";
import { string } from "../../../../../.cache/deno/npm/registry.npmjs.org/@types/prop-types/15.7.13/index.d.ts";

type props = {  
  item : {

    name :string
    done : boolean
  }
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  
};



const list = {
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
};

export default function Todoitem({ item, todos, setTodos }: props) {

  const [textDecoration , settextDecoration] = useState("none")
  function handleDelete(item: string) {
    console.log("deleted");
    setTodos(todos.filter((e) => e.name != item.name));
  }
function handleclick(item){

if (item.done) {
  item.done = false
  settextDecoration("none")
}else{
  item.done = true
  settextDecoration("line-through")
}
console.log(item)

console.log(todos)
}

  return (
    <>
      <li key={item}>
        <div style={list}>
          <span style={{ textDecoration: textDecoration }} onClick={e=>handleclick(item)}>{item.name}</span>
          <button onClick={(e) => handleDelete(item)}>X</button>
        </div>
      </li>
    </>
  );
}
