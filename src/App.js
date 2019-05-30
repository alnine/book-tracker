import React, { Component } from "react";
import SearchForm from "./components/searchForm";
import Books from "./components/books";
import "./App.css";
import httpService from "./services/http-services";
import utils from "./services/utils";

class App extends Component {
  state = {
    searchQuery: "",
    books: []
  };

  async getSearchQueryResult(query) {
    const apiEndPoint = "http://openlibrary.org/search.json?q=";
    const queryForApi = query
      .toLowerCase()
      .split(" ")
      .join("+");
    const result = await httpService.get(`${apiEndPoint}${queryForApi}`);
    return result.data.docs;
  }

  getIsbn(books) {
    const isnbList = [];
    books.forEach(book => {
      if (book.isbn) {
        book.isbn.forEach(e => {
          if (!isnbList.includes(e)) {
            isnbList.push(e);
          }
        });
      }
    });
    return isnbList.slice(0, 10);
  }

  async getBooks(arr) {
    const books = [];

    const booksId = arr.join(",");
    const apiEndPoint = `https://openlibrary.org/api/books?bibkeys=ISBN:${booksId}&format=json&jscmd=data`;
    const { data } = await httpService.get(apiEndPoint);

    for (let key in data) {
      const book = {};
      book.cover = data[key].cover ? data[key].cover.medium : null;
      book.title = data[key].title;
      book.author = data[key].authors ? data[key].authors[0].name : null;
      book.url = data[key].url;
      book.isbn = key.startsWith("ISBN:") ? key.slice(5) : key;
      books.push(book);
    }

    return books;
  }

  handleSubmit = async e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.children.search.value;

    const queryData = await this.getSearchQueryResult(searchQuery);
    const booksIsbn = this.getIsbn(queryData);
    const books = await this.getBooks(booksIsbn);

    this.setState({ books, searchQuery });
  };

  render() {
    const { searchQuery, books } = this.state;
    return (
      <div className="container">
        <SearchForm query={searchQuery} onSubmit={this.handleSubmit} />
        {searchQuery && (
          <h2 className="request">{utils.doCapitalize(searchQuery)}</h2>
        )}
        {searchQuery && <Books books={books} />}
      </div>
    );
  }
}

export default App;
