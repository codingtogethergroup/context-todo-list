import * as React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { TODO_STATUS } from "./constants";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <Todo {...todo} index={index} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.oneOf(TODO_STATUS)
    })
  ).isRequired
};

export { TodoList };
