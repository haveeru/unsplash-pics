import React, { useState } from "react";

// props.onSubmit is destructured
const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState("");

//   const onInputChange = (e) => {
//     setTerm(e.target.value.toUpperCase());
//   };

  const onFormSubmit = (e) => {
    e.preventDefault();
 
    onSubmit(term)
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            onChange={e => setTerm(e.target.value)}
            name="search"
            id="search"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
