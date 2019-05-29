import React from "react";

const SearchForm = ({ onSubmit, query }) => {
  const formClasses = query ? "search-form search-form--ontop" : "search-form";

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      <input type="text" name="search" className="search-form__field" />
      <button className="search-form__btn">Search</button>
    </form>
  );
};

export default SearchForm;
