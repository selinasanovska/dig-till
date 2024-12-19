import React from "react";
import "./Components.css";
import badPictureVideo from "../assets/BadPicture.mp4";
import goodPictureVideo from "../assets/GoodPicture.mp4";
import bildBra from "../assets/BilderBra.png";
import bildDålig from "../assets/BilderBad.png";

function Content1() {
  return (
    <main className="main-content" role="main">
      <a name="Bild" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0">
        Bild - Alt texter
      </h2>
      <p tabIndex="0" style={{ textAlign: "left" }}>
        Alt-texter (alternativa texter) är beskrivningar som används i HTML för att ge en textbaserad förklaring av en
        bild. De anges med attributet alt i {'<img>'}-taggen. Alt-texter är viktiga för att göra webbplatser tillgängliga
        för användare som inte kan se bilder, till exempel personer med synnedsättning som använder skärmläsare. De
        används också som fallback om en bild inte kan laddas.
        <br />
        En bra alt-text beskriver bildens innehåll och syfte på ett kortfattat och relevant sätt. Dåliga eller
        saknade alt-texter kan göra det svårt för användare att förstå bildens betydelse.
        <br />
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
            <br />
            Dåligt exempel
          </h3>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Kod utan WAI-ARIA
          </h4>
          <div className="image-container">
            <img tabIndex="0" src={bildDålig} alt="Kod utan WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Problem
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Den första bilden har inget <code>alt</code>-attribut, vilket
                gör den otillgänglig för skärmläsare.
              </li>
              <li tabIndex="0">
                Den andra bilden använder generisk och oanvändbar{" "}
                <code>alt</code>-text ("Bild"), vilket inte ger någon
                meningsfull kontext.
              </li>
            </ul>
          </p>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={badPictureVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            <br />
            Bra exempel
          </h3>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Kod med WAI-ARIA
          </h4>
          <div className="image-container">
            <img tabIndex="0" src={bildBra} alt="Kod med WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Lösning
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
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={goodPictureVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content1;
