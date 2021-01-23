import * as React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>You are lost</h2>
      <Link to="/">
        <button>back to home</button>
      </Link>
    </section>
  );
}
