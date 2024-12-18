import React from "react";
import "./Components.css";
import accordionUtan from "../assets/Accordion_utan.png";
import accordionMed from "../assets/Accordion_med.png";
import badAccordionVideo from "../assets/BadAccordion.mp4";
import goodAccordionVideo from "../assets/GoodAccordion.mp4";

function Content2() {
  return (
    <main className="main-content">
      <a name="Accordion" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0">
        Accordion
      </h2>
      <p tabIndex="0" style={{ textAlign: "left" }}>
        En accordion är en UI-komponent som används för att visa och dölja innehåll i sektioner. När en sektion
        expanderas visas dess innehåll, och när den kollapsas döljs det. Accordions är vanliga på webbplatser för
        att organisera information och spara utrymme.
        <br />
        För att vara tillgängliga måste accordions utformas så att de fungerar för alla användare, inklusive de som
        använder skärmläsare eller navigerar med tangentbord. Dåligt designade accordions kan skapa problem för användare
        med funktionsnedsättningar, medan väl designade accordions säkerställer en inkluderande upplevelse.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            <br />
            Dåligt exempel
          </h3>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Kod utan WAI-ARIA
          </h4>
          <div className="image-container">
            <img tabIndex="0" src={accordionUtan} alt="Kod utan WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Problem
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Saknar semantisk HTML: <code>div</code>-element används istället för knappar, vilket gör det svårt
                för skärmläsare att förstå att det är ett interaktivt element. Detta beror på att <code>div</code>-element
                inte är fokuserbara av tangentbord. Därför kan skärmläsar användare inte navigera och aktivera accordionen.
              </li>
              <li tabIndex="0">
                Saknar feedback för skärmläsare:
                När sektionen öppnas eller stängs får skärmläsare ingen information om vad som händer.
              </li>
            </ul>
          </p>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={badAccordionVideo} type="video/mp4" />
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
            <img tabIndex="0" src={accordionMed} alt="Kod med WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Lösning
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Användning av ARIA-attribut:
                Attributet <code>aria-expanded</code> anger om sektionen är öppen eller stängd, vilket gör det tydligt för skärmläsare.
              </li>
              <li tabIndex="0">
                Attributet <code>aria-controls</code> kopplar knappen till innehållssektionen, så skärmläsare vet vilket innehåll som
                styrs av knappen.
              </li>
              <li tabIndex="0">
                Innehållssektionen har <code>role="region"</code> och <code>aria-labelledby</code>, vilket gör att
                skärmläsare kan identifiera och beskriva sektionen.
              </li>
            </ul>
          </p>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={goodAccordionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content2;
