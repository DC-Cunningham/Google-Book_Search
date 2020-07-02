import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Button from "../components/Button";
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

  return (
    <Container>
      <Row>
        <Col size="24">
          <Panel>
            <h1>Your saved Books</h1>
          </Panel>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Author/s</th>
              <th>Cover</th>
              <th></th>
            </tr>
            {books.map((book, i) => {
              return [
                <tr key={i}>
                  <td>{book.title}</td>
                  <td>{book.authors}</td>
                  <td>
                    <img alt="Book" src={book.image} />
                  </td>
                  <td>
                    <Button onClick={() => deleteBook(book._id)} />
                  </td>
                </tr>,
              ];
            })}
          </tbody>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
