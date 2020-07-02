import React, { Component } from "react";
import Button from "../Button";
import "./style.css";

class Modal extends Component {
  render() {
    console.log(this.props.data);
    return (
      <>
        {this.props.show && (
          <div className="modal">
            <h1>{this.props.data.volumeInfo.title}</h1>
            <h2> by {this.props.data.volumeInfo.authors}</h2>
            <p>{this.props.data.volumeInfo.description}</p>
            <p>{this.props.data.volumeInfo.infoLink}</p>
            <img
              alt="Book"
              src={this.props.data.volumeInfo.imageLinks.thumbnail}
            />
            <Button onClick={this.props.onHide} name="Close" />
          </div>
        )}
      </>
    );
  }
}

export default Modal;
