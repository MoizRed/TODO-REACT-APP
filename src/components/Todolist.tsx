type props = {
  todos: string[];
};

export default function Todolist({ todos }: props) {
  return (
    <>
      <ol style={{ listStyle: "decimal" }}>
        {todos.map((e: any, i: number) => <li>{i + 1} - {e}</li>)}
      </ol>
    </>
  );
}
