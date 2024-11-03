import Todo from "./components/Todo.tsx";
import Header from "./components/header.tsx";
import "./App.css";
type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Header />
      <Todo />
    </>
  );
}
