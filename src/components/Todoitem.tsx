import { string } from "../../../../../.cache/deno/npm/registry.npmjs.org/@types/prop-types/15.7.13/index.d.ts";

type props = {
  item: string;
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
  function handleDelete(item: string) {
    console.log("deleted");

    console.log(todos);
    console.log(item);

    setTodos(todos.filter((e) => e != item));
  }

  return (
    <>
      <li key={item}>
        <div style={list}>
          {item} <button onClick={(e) => handleDelete(item)}>X</button>
        </div>
      </li>
    </>
  );
}
