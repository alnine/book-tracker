import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="search-form search-form--on-top">
        <input
          className="search-form__field"
          type="text"
          name="search"
          id="search"
        />
        <button className="search-form__btn">Search</button>
      </form>
      <h2 className="request">Searching Request</h2>
      <ul className="book-list">
        <li className="book-list__item">
          <a href="#" className="book">
            <img
              src="https://via.placeholder.com/205x265"
              alt=""
              className="book__cover"
              width="205"
              height="265"
            />
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
        <li className="book-list__item">
          <a href="#" className="book">
            <div className="book__stub">
              <span className="book__stub-title">Book #2</span>
            </div>
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
        <li className="book-list__item">
          <a href="#" className="book">
            <div className="book__stub">
              <span className="book__stub-title">Book #3</span>
            </div>
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
        <li className="book-list__item">
          <a href="#" className="book">
            <div className="book__stub">
              <span className="book__stub-title">Book #4</span>
            </div>
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
        <li className="book-list__item">
          <a href="#" className="book">
            <div className="book__stub">
              <span className="book__stub-title">Book #5</span>
            </div>
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
        <li className="book-list__item">
          <a href="#" className="book">
            <div className="book__stub">
              <span className="book__stub-title">Book #6</span>
            </div>
            <h4 className="book__author">Author</h4>
            <h3 className="book__title">Book Title</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
