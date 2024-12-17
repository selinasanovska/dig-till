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
      <p className="description" tabIndex="0" style={{ textAlign: "left" }}>
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
            Kod utan WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={accordionUtan} alt="Kod utan WAI-ARIA" />
          </div>
          <div className="image-container">
            <video width="100%" controls>
              <source src={badAccordionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Dåligt Exempel
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                En icke-tillgänglig accordion saknar korrekt semantik och ARIA-attribut, vilket gör den svår eller omöjlig
                att använda för personer med funktionsnedsättningar.
                <br />
                Ingen feedback för skärmläsare:
                När sektionen öppnas eller stängs får skärmläsare ingen information om vad som händer.
              </li>
              <li tabIndex="0">
                Dålig tangentbordsnavigering:
                Eftersom div-element används istället för knappar, kan användare inte navigera eller aktivera accordionen
                med tangentbordet.
              </li>
            </ul>
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod med WAI-ARIA
          </h3>
          <div className="image-container">
            <img tabIndex="0" src={accordionMed} alt="Kod med WAI-ARIA" />
          </div>
          <div className="image-container">
            <video width="100%" controls>
              <source src={goodAccordionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Bra Exempel
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Användning av ARIA-attribut:
                Attributet aria-expanded anger om sektionen är öppen eller stängd, vilket gör det tydligt för skärmläsare.
                <br />
                Attributet aria-controls kopplar knappen till innehållssektionen, så skärmläsare vet vilket innehåll som
                styrs av knappen.
                <br />
                Innehållssektionen har role="region" och aria-labelled by, vilket gör att skärmläsare kan identifiera och beskriva sektionen.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content2;
