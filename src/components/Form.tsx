import { FormEvent } from "react";
import { useState } from "react";

const styles = {
  todoform: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f5f5f5",
    color: "#333",
  },

  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    width: "100%",
    maxWidth: "300px",
    fontSize: "1rem",
    height: "2.5rem",
  },

  button: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
};
type props = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

type itemobj ={
  name : string,
  done : boolean

}

const item : itemobj = { name: "", done: false }


export default function Form({ todos, setTodos }: props) {
  const [warning, setwarn] = useState("");
  const [todo, setTodo] = useState(item);

  function handlechange(e: FormEvent) {
    e.preventDefault();

    if (todo.name === "") {
      setwarn("Please enter a todo");
      return; //stops the rest of the code lol because it returns
    } else setwarn("");
    setTodo({ name: "", done: false });
    setTodos([...todos, todo]);
  }

  return (
    <form style={styles.todoform}>
      <input
        style={styles.input}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
        value={todo.name}
      />
      <button
        style={styles.button}
        type="submit"
        onClick={(e) => handlechange(e)}
      >
        Submit
      </button>
      <p style={{ color: "red" }}>{warning}</p>
    </form>
  );
}
