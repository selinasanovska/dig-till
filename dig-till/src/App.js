import logo from "./logo.svg";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";

function App() {
  return (
    <div className="App">
      <Top />
      <Content1 />
      <div className="divider"></div>
      <Content2 />
      <Bottom />
    </div>
  );
}

function Top() {
  return (
    <header className="header">
      <h1>Digitalt utbildningsmaterial</h1>
      <nav className="navbar">
        <ul>
          <li>Component 1</li>
          <li>Component 2</li>
          <li>Component 3</li>
        </ul>
      </nav>
    </header>
  );
}

function Bottom() {
  return (
    <Navbar className="custom-navbar-background" bg="dark" variant="dark">
      {" "}
      <Container>
        <Navbar.Brand className="mx-auto">
          Ett projekt i Digital Tillgänglighet av Dennis och Selin
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
