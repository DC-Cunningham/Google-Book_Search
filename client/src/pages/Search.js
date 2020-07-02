import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Panel from "../components/Panel";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Button from "../components/Button";
import Modal from "../components/Modal";
import "./pages.css";

class SearchResults extends Component {
  state = {
    results: [],
    search: "",
    saveItem: "",
    showModal: false,
    dataModal: {},
  };

  componentDidMount() {
    this.searchGoogleBooks("Harry");
  }

  searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => console.log(err));
  };

  saveSearchItem = (bookID) => {
    const data = this.state.results.find((x) => x.id === bookID);
    const bookData = {
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.smallThumbnail,
      link: data.volumeInfo.infoLink,
    };
    API.saveBook(bookData)
      .then((res) => console.log("Item Saved to db"))
      .catch((err) => console.log(err));
  };

  viewItem = (data) => {
    this.setState({ showModal: true, dataModal: data });
  };

  hideItem = () => {
    this.setState({ showModal: false });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row size="1-1">
          <Col size="">
            <Panel>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
          <Col size="24">
            <Panel>
              <h1>Results</h1>
              <ul>
                {this.state.results.map((result) => (
                  <li key={result.id}>
                    <h1>{result.volumeInfo.title}</h1>
                    <h2>{result.volumeInfo.authors}</h2>
                    <img
                      alt="Book"
                      src={result.volumeInfo.imageLinks.smallThumbnail}
                    />
                    <Button
                      name="View More"
                      value={result.id}
                      onClick={(e) => {
                        this.viewItem(result);
                      }}
                    />
                    <Button
                      name="Save"
                      value={result.id}
                      onClick={() => this.saveSearchItem(result.id)}
                    />
                  </li>
                ))}
              </ul>
            </Panel>
          </Col>
        </Row>
        <Modal
          show={this.state.showModal}
          onHide={this.hideItem}
          data={this.state.dataModal}
        />
      </Container>
    );
  }
}

export default SearchResults;
