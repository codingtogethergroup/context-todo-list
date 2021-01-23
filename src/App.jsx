import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import MyTodoList from "./pages/MyTodoList";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header>
        <NavLink to="/" activeClassName="active-nav" exact>
          home
        </NavLink>
        <NavLink to="/add" activeClassName="active-nav">
          add todo
        </NavLink>
      </Header>
      <Main>
        <Route path="/" component={MyTodoList} exact />
        <Route path="/add" component={AddTodo} />
      </Main>
    </>
  );
}
