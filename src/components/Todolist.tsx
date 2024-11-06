import Todoitem from "./Todoitem.tsx";



type props = {
  todos: string[];
};

export default function Todolist({ todos }: props) {
  return (
    <>
    <ol>
    <Todoitem todos={todos} />
    </ol>
    </>
  );
}
