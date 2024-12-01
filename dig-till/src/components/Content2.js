import React from "react";
import "./Components.css";
import accordionUtan from "../assets/Accordion_utan.png";
import accordionMed from "../assets/Accordion_med.png";

function Content2() {
  return (
    <main className="main-content">
      <a name="Accordion" />
      <h2>Accordion</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consequat, justo in dapibus cursus.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Kod utan WAI-ARIA</h3>
          <div className="image-container">
            <img src={accordionUtan} alt="Accordion Image" />
          </div>
          <p className="comparison-text">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Dåligt Exempel
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Kod med WAI-ARIA</h3>
          <div className="image-container">
            <img src={accordionMed} alt="Accordion Image" />
          </div>
          <p className="comparison-text">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Bra Exempel
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content2;
