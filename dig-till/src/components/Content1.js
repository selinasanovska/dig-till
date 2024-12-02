import React from "react";
import "./Components.css";

function Content1() {
  return (
    <main className="main-content">
      <a name="Content1" /><h2 style={{ fontWeight: "bold" }}>Bilder - Alt texter</h2>
      <p className="description">
        Läs mer här angående alt-texter på WCAGs hemsida: <a href="https://www.w3.org/TR/WCAG22/#non-text-content" target="_blank" rel="noopener noreferrer">
          WCAG
        </a>
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Kod utan WAI-ARIA</h3>
          <div>
            <img src="picBadExample.jpg" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
          </div>
          <p className="comparison-text">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Dåligt exempel</h1>
            <ul style={{ textAlign: "left" }}>
              <li>
                Den första bilden har inget <code>alt</code>-attribut, vilket gör den otillgänglig för skärmläsare.
              </li>
              <li>
                Den andra bilden har ett tomt <code>alt</code>-attribut men ingen tydlig indikation på att den är dekorativ.
              </li>
              <li>
                Den tredje bilden använder generisk och oanvändbar <code>alt</code>-text ("Bild"), vilket inte ger någon meningsfull kontext.
              </li>
            </ul>
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Kod med WAI-ARIA</h3>
          <div>
            <img src="picGoodExample.jpg" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
          </div>
          <p className="comparison-text">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Bra exempel</h1>
            <ul style={{ textAlign: "left" }}>
              <li>
                Den första bilden innehåller ett beskrivande <code>alt</code>-attribut som förmedlar bildens innehåll och syfte.
              </li>
              <li>
                Den andra bilden är dekorativ, så den använder ett tomt <code>alt</code>-attribut (<code>alt=""</code>) och attributet <code>aria-hidden="true"</code> för att säkerställa att den ignoreras av skärmläsare.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content1;
