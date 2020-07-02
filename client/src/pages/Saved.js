import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { Col, Row, Container } from "../components/Grid";
import Link from "../components/Link";
import "./pages.css";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row size="md-3">
        <Col size="24" className="book">
          <Panel>
            <h1>Your saved Books</h1>
            <ul>
              {books.map((book, i) => (
                <li key={i}>
                  <Row size="md-3">
                    <Col size="12">
                      <h1>{book.title}</h1>
                      <h2>{book.authors}</h2>
                      <img alt="Book" src={book.image} />
                      <p>{book.description}</p>
                    </Col>
                  </Row>
                  <Link to={book.link} target="_blank">
                    <Button name="View in Google Books" />
                  </Link>
                  <Button onClick={() => deleteBook(book._id)} name="Remove" />
                </li>
              ))}
            </ul>
          </Panel>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
