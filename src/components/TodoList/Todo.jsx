import * as React from "react";
import PropTypes from "prop-types";
import TodoStatus from "./TodoStatus";
import styled from "styled-components";
import { useToDoList, delTodo } from "./context.todo";

const TodoItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  .todo__index {
    margin-right: 16px;
  }
  .todo__status {
    margin-left: 16px;
  }
  .todo__operations {
    min-width: 76px;
  }
  &.is-doing {
    color: red;
  }
  &.is-done {
    color: green;
  }
  h4 {
    margin: 0;
  }
`;

function Todo({ id, name, status, index }) {
  const [, dispatch] = useToDoList();
  const delHandler = () => delTodo(dispatch, { id });
  const className = `todo is-${status}`;
  return (
    <TodoItem className={className}>
      <span className="todo__index">{index + 1}.</span>
      <strong className="todo__name">{name}</strong>
      <span className="todo__operations">
        <TodoStatus id={id} status={status} className="todo-status" />
        <button onClick={delHandler}>x</button>
      </span>
    </TodoItem>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default React.memo(Todo);
