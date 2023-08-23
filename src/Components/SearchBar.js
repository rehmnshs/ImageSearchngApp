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

  const link = term.trim()===""? username +"/search/nothing" :  username + "/search/"+ term  ;

  return (
    <div className="three">
      <form onSubmit={handleform} className="inputForm">
        <input
          className="inputf"
          name="term"
          onChange={handleChange}
          value={term}
          autocomplete="off"
        />
        <Link to={link}>
          {" "}
          <button className="hidden-button" ><svg  value="submit" className= "sendIcon"onClick={handleform} xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M120-160v-640l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0v-457 457Z"/></svg>
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Searchbar;
