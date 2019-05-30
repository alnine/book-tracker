import React, { Component } from "react";
import Book from "./book";

class Books extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={book.isbn} className="book-list__item">
            <Book
              url={book.url}
              cover={book.cover}
              title={book.title}
              order={index + 1}
              author={book.author}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Books;
