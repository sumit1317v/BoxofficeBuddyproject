import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'; // Assuming you're using a separate CSS file

const Footer = () => {
  return (
    <footer className="bg-dark text-black text-center py-3 footer-custom hello">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; 2024 BoxOfficeBuddy. All rights reserved.</p>
            <Nav className="justify-content-center">
              <Nav.Link as={Link} to="/" className="text-black">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="text-black">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-black">Contact</Nav.Link>
              <Nav.Link as={Link} to="/privacy-policy" className="text-black">Privacy Policy</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
