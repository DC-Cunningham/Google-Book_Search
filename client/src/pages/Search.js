import React, { Component } from "react";
// import { Input, TextArea, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import Panel from "../components/Panel";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";

class SearchResults extends Component {
  state = {
    results: [],
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchGoogleBooks("Harry Potter");
  }

  searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => console.log(err));
  };

  saveSearchItem = (bookData) => {
    API.saveBook(bookData)
      .then((res) => console.log("Item Saved to db"))
      .catch((err) => console.log(err));
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
        <Row>
          <Col size="24">
            <Panel heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
          <Col size="24">
            <Panel>
              {console.log(this.state)}
              <ul>
                {this.state.results.map((result) => (
                  <li key={result.id}>
                    <h1>{result.volumeInfo.title}</h1>
                    <h2>{result.volumeInfo.authors}</h2>
                    <h2>{result.volumeInfo.description}</h2>
                    <img
                      alt="Book Image"
                      src={result.volumeInfo.imageLinks.smallThumbnail}
                    />
                    <SaveBtn
                      onClick={() => {
                        console.log(result);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
