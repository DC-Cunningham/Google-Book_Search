import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import Panel from "../components/Panel";
import { Col, Row, Container } from "../components/Grid";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <Row>
        <Col size="24">
          <Panel>
            <h1>You saved Books</h1>
          </Panel>
          {books.length ? (
            <ul>
              {books.map((book) => (
                <li key={book._id}>
                  <h1>{book.title}</h1>
                  <h2>{book.authors}</h2>
                  <h2>{book.description}</h2>
                  <img alt="Book" src={book.image} />
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </li>
              ))}
            </ul>
          ) : (
            <h3>You haven't saved any books yet</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
