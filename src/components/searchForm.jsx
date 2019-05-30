import React from "react";

const SearchForm = ({ onSubmit, onChange, query, status }) => {
  const formClasses = status ? "search-form search-form--ontop" : "search-form";

  const validate = query => {
    return query ? false : true;
  };

  const renderInput = (name, className, value, type = "text") => {
    return (
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    );
  };

  const renderButton = (className, label) => {
    return (
      <button disabled={validate(query)} className={className}>
        {label}
      </button>
    );
  };

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      {renderInput("search", "search-form__field", query)}
      {renderButton("search-form__btn", "Search")}
    </form>
  );
};

export default SearchForm;
