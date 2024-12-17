import React from "react";
import "./Components.css";
import badPictureVideo from "../assets/BadPicture.mp4";
import goodPictureVideo from "../assets/GoodPicture.mp4";
import bildBra from "../assets/BilderBra.png";
import bildDålig from "../assets/BilderBad.png";

function Content1() {
  return (
    <main className="main-content" role="main">
      <a name="Content1" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0" id="Content1">
        Bilder - Alt texter
      </h2>
      <p className="description" tabindex="0">
        Läs mer här angående alt-texter på WCAGs hemsida:{" "}
        <a
          href="https://www.w3.org/TR/WCAG22/#non-text-content"
          target="_blank"
          rel="noopener noreferrer"
        >
          WCAG
        </a>
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabindex="0">
            Kod utan WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={bildDålig} alt="Kod utan WAI-ARIA" />
          </div>
          <div className="image-container">
            <video width="100%" controls>
              <source src={badPictureVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Dåligt exempel
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Den första bilden har inget <code>alt</code>-attribut, vilket
                gör den otillgänglig för skärmläsare.
              </li>
              <li tabIndex="0">
                Den andra bilden har ett tomt <code>alt</code>-attribut men
                ingen tydlig indikation på att den är dekorativ.
              </li>
              <li tabIndex="0">
                Den tredje bilden använder generisk och oanvändbar{" "}
                <code>alt</code>-text ("Bild"), vilket inte ger någon
                meningsfull kontext.
              </li>
            </ul>
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod med WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={bildBra} alt="Kod med WAI-ARIA" />
          </div>
          <div className="image-container">
            <video width="100%" controls>
              <source src={goodPictureVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Bra exempel
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Den första bilden innehåller ett beskrivande <code>alt</code>
                -attribut som förmedlar bildens innehåll och syfte.
              </li>
              <li tabIndex="0">
                Den andra bilden är dekorativ, så den använder ett tomt{" "}
                <code>alt</code>-attribut (<code>alt=""</code>) och attributet{" "}
                <code>aria-hidden="true"</code> för att säkerställa att den
                ignoreras av skärmläsare.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content1;
