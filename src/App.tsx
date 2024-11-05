import Todo from "./components/Todo.tsx";
import Header from "./components/Header.tsx";
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
