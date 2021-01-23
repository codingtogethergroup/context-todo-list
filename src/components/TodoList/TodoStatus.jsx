import * as React from "react";
import { TODO_STATUS } from "./constants";
import PropTypes from "prop-types";
import { updateDoTo, useToDoList } from "./context.todo";

function TodoStatus({ id, status, className = "todo-status" }) {
  const [, dispatch] = useToDoList();
  const onChange = (e) => {
    const status = e.target.value;
    updateDoTo(dispatch, id, { status });
    return false;
  };
  return (
    <select name={id} value={status} onChange={onChange} className={className}>
      {TODO_STATUS.map((status) => (
        <option value={status} key={status}>
          {status}
        </option>
      ))}
    </select>
  );
}

TodoStatus.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(TODO_STATUS)
};

export default TodoStatus;
