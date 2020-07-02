import React, { Component } from "react";
import Link from "../Link";
import Button from "../Button";
import { Col, Row, Container } from "../Grid";
import "./style.css";

class Modal extends Component {
  render() {
    const book = this.props.data.volumeInfo;
    return (
      <>
        {this.props.show && (
          <Container id="modal">
            <Row size="1-1">
              <Col size="md-12" className="content">
                <h1>{book.title}</h1>
                <h2> by {book.authors}</h2>
                <p>{book.description}</p>
              </Col>
              <Col size="md-12">
                <Row size="1-1">
                  <Col size="24">
                    <img alt="Book" src={book.imageLinks.thumbnail} />
                  </Col>
                  <Col size="24">
                    <Button onClick={this.props.onHide} name="Close" />
                    <Link to={book.infoLink} target="_blank">
                      <Button name="View in Google Books" />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default Modal;
