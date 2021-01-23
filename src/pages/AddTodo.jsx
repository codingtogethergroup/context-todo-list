import * as React from "react";
import { useToDoList, addTodo, generateTodo } from "../components/TodoList";
import { useHistory } from "react-router-dom";

export default function AddTodo() {
  const [todo, setTodo] = React.useState(() => generateTodo());
  const history = useHistory();
  const [, dispatch] = useToDoList();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo.name) {
      return window.alert("Please provide to do name.");
    }
    addTodo(dispatch, todo);
    setTimeout(() => {
      history.push("/");
    }, 10);
  };
  const changeHandler = (e) => {
    const name = e.target.value;
    setTodo((todo) => ({ ...todo, name }));
  };
  return (
    <div className="new-todo">
      <h2 className="title">Add New Todo</h2>
      <form onSubmit={submitHandler} name="addTodo">
        <p>
          <label htmlFor="name">Todo Name: </label>
          <input type="text" name="nam" id="name" onChange={changeHandler} />
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </div>
  );
}
