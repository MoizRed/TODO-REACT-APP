
import React, { useState } from "react";
import { FormEvent } from "react";

type Props = {}

export default function Form({}: Props) {

    function handlesubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        setTodos([...todos, todo]);
    
        setTodo("");
      }

  return (
        
        
    <div> 
        
        <form onSubmit={handlesubmit}>
    <input
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      type="text"
    />

    <button>ADD sTASK</button>
  </form>
</div>
  )
};