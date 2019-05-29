import React, { Component } from "react";
import SearchForm from "./components/searchForm";
import Books from "./components/books";
import "./App.css";

class App extends Component {
  state = {
    searchQuery: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.children.search.value;
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="container">
        <SearchForm query={searchQuery} onSubmit={this.handleSubmit} />
        {searchQuery && <h2 className="request">{searchQuery}</h2>}
        {searchQuery && <Books />}
      </div>
    );
  }
}

export default App;
