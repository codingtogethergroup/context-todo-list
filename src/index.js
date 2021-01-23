import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import GlobalStyle from "./components/GlobalStyle";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  rootElement
);
