import { useState } from "react";
import React from "react";
import "./searchbarc.css";
function Searchbar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleform = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    return setTerm(event.target.value);
  };
  return (
    <div className="three">
      <form onSubmit={handleform} className="two">
        <input
          className="one"
          name="term"
          onChange={handleChange}
          value={term}
        />
      </form>
    </div>
  );
}
export default Searchbar;
