import { useState } from "react";
import React from "react";
import "./searchbarc.css";
import { SecondPage } from "../SecondPage";
import { Link } from "react-router-dom";
function Searchbar({ OnSubmit,username }) {
  const [term, setTerm] = useState("");
  const handleform = (event) => {};
  const handleChange = (event) => {

    return setTerm(event.target.value);
  };

  const link = term.trim()===""? "/search/nothing" :  username + "/search/"+ term  ;

  return (
    <div className="three">
      <form onSubmit={handleform} className="two">
        <input
          className="one"
          name="term"
          onChange={handleChange}
          value={term}
        />
        <Link to={link}>
          {" "}
          <button onClick={handleform}> submit </button>{" "}
        </Link>
      </form>
    </div>
  );
}
export default Searchbar;
