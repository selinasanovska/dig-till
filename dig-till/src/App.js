import logo from './logo.svg';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container py-4">
      <Top/>
      <Bottom/>
    </div>
  );
}

function Top() {
  return (
      <div>
          <div className="jumbotron text-center App-header">
              <h1>Digitalt utbildningsmaterial</h1>
              <p>Välkommen!</p>
          </div>
          <div>
              <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about">About</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
              </Navbar>
          </div>
      </div>
  )
}

function Bottom() {
  return (
      <Navbar className="custom-navbar-background" bg="dark" variant="dark"> {/*jesper css*/}
          <Container>
              <Navbar.Brand className="mx-auto">Ett projekt i Digital Tillgänglighet av Dennis och Selin</Navbar.Brand>
          </Container>
      </Navbar>
  );
}

export default App;
