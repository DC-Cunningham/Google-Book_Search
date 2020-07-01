import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import Panel from "../Panel";

function Header() {
  return (
    <>
      <nav>
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-header">
          <div class="nav-title">Google Book Search</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="/search">Search</a>
          <a href="/saved">Saved</a>
        </div>
      </nav>
      <Container>
        <Row>
          <Col size="24">
            <Panel>
              <h1>Search for and save books of interest</h1>
            </Panel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
