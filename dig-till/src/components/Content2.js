import React from "react";
import "./Components.css";
import accordionUtan from "../assets/Accordion_utan.png";
import accordionMed from "../assets/Accordion_med.png";

function Content2() {
  return (
    <main className="main-content">
      <a name="Accordion" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0">
        Accordion
      </h2>
      <p className="description" tabIndex="0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consequat, justo in dapibus cursus.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod utan WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={accordionUtan} alt="Kod utan WAI-ARIA" />
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Dåligt Exempel
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod med WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={accordionMed} alt="Kod med WAI-ARIA" />
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Bra Exempel
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content2;
