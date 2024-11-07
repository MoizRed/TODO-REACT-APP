import Todoitem from "./Todoitem.tsx";

const style = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  backgroundColor: "#f5f5f5",
  borderRadius: "0.5rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid black",
};

type props = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Todolist({ todos, setTodos }: props) {
  return (
    <div style={style}>
      <ul>
        {todos.map((e: any, i: number) => (
          <Todoitem item={e} key={i} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}
