import React from "react";

function SearchForm(props) {
  return (
    <form className="pure-form">
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="pure-input-1"
        placeholder="Search For a Book"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit}>Search</button>
    </form>
  );
}

export default SearchForm;
