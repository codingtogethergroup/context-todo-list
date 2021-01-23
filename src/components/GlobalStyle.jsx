import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  margin: 0;
  color: #333;
}
#root {
  max-width: 640px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: #333;
}
button {
  border-radius:4px;
  border: 1px solid #aaa;
  cursor: pointer;
  outline: none;
  font-size:14px;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;
