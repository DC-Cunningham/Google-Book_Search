import React from "react";

function SearchForm(props) {
  return (
    <form>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For a Book"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit}>Search</button>
    </form>
  );
}

export default SearchForm;
