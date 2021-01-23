import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { TodoListProvider } from "./TodoList";
import NotFound from "../pages/NotFound";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 12px 12px;
`;
export default function Main({ children }) {
  return (
    <StyledMain>
      <TodoListProvider>
        <Switch>
          {children}
          <Route path="*" component={NotFound} exact />
        </Switch>
      </TodoListProvider>
    </StyledMain>
  );
}
