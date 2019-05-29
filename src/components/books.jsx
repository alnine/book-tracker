import React, { Component } from "react";

class Books extends Component {
  books = [
    {
      _id: 1,
      title: "Book 1 Title",
      author: "Book 1 Author",
      cover: "https://via.placeholder.com/205x265"
    },
    {
      _id: 2,
      title: "Book 2 Title",
      author: "Book 2 Author",
      cover: undefined
    }
  ];

  renderBookCover(book, index) {
    if (book.cover) {
      return (
        <img src={book.cover} alt={book.title} className="book__cover-img" />
      );
    }

    return <span className="book__cover-title">Book #{index + 1}</span>;
  }

  render() {
    return (
      <ul className="book-list">
        {this.books.map((book, index) => (
          <li key={book._id} className="book-list__item">
            <a href="#" className="book">
              <div className="book__cover">
                {this.renderBookCover(book, index)}
              </div>
              <h4 className="book__author">{book.author}</h4>
              <h3 className="book__title">{book.title}</h3>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Books;
