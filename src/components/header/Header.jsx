import React from 'react'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import './header.css'

const Header = () => {
  return (
    <div className="header-section">
      <Navbar data-bs-theme="dark" expand="lg" className="p-4">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <br />
            <Nav className="mx-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text">
                About me
              </Nav.Link>
              <Nav.Link href="/portfolio" className="text">
                Portfolio
              </Nav.Link>
              <Nav.Link href="/services" className="text">
                Services
              </Nav.Link>
            </Nav>
            <br />
            <a href="#portfolio">
            <Button variant="secondary">ContactMe</Button>
          </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header