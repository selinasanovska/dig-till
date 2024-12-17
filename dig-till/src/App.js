import logo from "./logo.svg";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content1 from "./components/Content1";
import Accordion from "./components/Content2";
import Content3 from "./components/Content3";

function App() {
  return (
    <div>
      <Top />
      <div className="container mt-5">
        <Content1 />
        <div className="divider"></div>
        <Accordion />
        <div className="divider"></div>
        <Content3 />
      </div>
      <Bottom />
    </div>
  );
}

function Top() {
  return (
    <div
      className="bg-white text-center pt-2 sticky-top"
      style={{ zIndex: 1030 }}
    >
      <h1 style={{ fontWeight: "bold" }} tabIndex="0">
        Digitalt utbildningsmaterial
      </h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item py-2">
              <a href="#Content1">Bilder - Alt texter</a>
            </li>
            <li className="nav-item py-2">
              <a href="#Accordion">Accordion</a>
            </li>
            <li className="nav-item py-2">
              <a href="#Content3">Spinner/Loader</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
