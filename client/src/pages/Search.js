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
    saveItem: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchGoogleBooks("");
  }

  searchGoogleBooks = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => console.log(err));
  };

  saveSearchItem = (bookID) => {
    const data = this.state.results.find((x) => x.id === bookID);
    console.log(data);

    const bookData = {
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.smallThumbnail,
      link: data.selfLink,
    };
    console.log(bookData);

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
                    <h2>{result.volumeInfo.description}</h2>
                    <img
                      alt="Book"
                      src={result.volumeInfo.imageLinks.smallThumbnail}
                    />
                    <SaveBtn
                      value={result.id}
                      onClick={() => this.saveSearchItem(result.id)}
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
