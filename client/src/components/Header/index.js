import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import Panel from "../Panel";

function Header() {
  return (
    <>
      <Container id="header">
        <Row size="1-1">
          <Col size="10">
            <h1 className="nav-title">Google Book Search</h1>
          </Col>
          <Col size="10">
            <div className="nav-links">
              <NavLink
                to="/search"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "lightgrey",
                  textDecoration: "none",
                }}
              >
                SEARCH
              </NavLink>
              <NavLink
                to="/saved"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "lightgrey",
                  textDecoration: "none",
                }}
              >
                SAVED
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row size="1-1">
          <Col size="">
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
