import React from "react";

const Book = ({ url, cover: imgUrl, title, order, author }) => {
  const renderBookCover = (imgUrl, title, order) => {
    const cover = <img src={imgUrl} alt={title} className="book__cover-img" />;
    const cap = <span className="book__cover-title">Book #{order}</span>;

    return imgUrl ? cover : cap;
  };

  return (
    <a href={url} className="book">
      <div className="book__cover">{renderBookCover(imgUrl, title, order)}</div>
      <h4 className="book__author">{author || "Unknown"}</h4>
      <h3 className="book__title">{title}</h3>
    </a>
  );
};

export default Book;
