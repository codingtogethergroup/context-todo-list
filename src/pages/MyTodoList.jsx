import * as React from "react";
import { Link } from "react-router-dom";
import { useToDoList, TodoList } from "../components/TodoList";

export default function MyTodoList() {
  const [todoList] = useToDoList();
  React.useEffect(() => {}, [todoList]);
  if (todoList.length) {
    return (
      <section>
        <h2 className="title">My To Do List</h2>
        <TodoList todos={todoList} />
      </section>
    );
  }
  return (
    <section>
      <h2 className="title">My Todo List</h2>
      <p>You get no todo today</p>
      <Link to="/add">
        <button>add todo </button>
      </Link>
    </section>
  );
}
