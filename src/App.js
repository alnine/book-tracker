import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="search-form search-form--centered">
        <input
          className="search-form__field"
          type="text"
          name="search"
          id="search"
        />
        <button className="search-form__btn">Search</button>
      </form>
    </div>
  );
}

export default App;
