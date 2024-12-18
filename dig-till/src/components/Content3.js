import React from "react";
import "./Components.css";
import spinnerBra from "../assets/BraSpinner.png";
import spinnerBad from "../assets/DåligSpinner.png";
import badSpinnerVideo from "../assets/BadSpinner.mp4";
import goodSpinnerVideo from "../assets/GoodSpinner.mp4";

function Content3() {
  return (
    <main className="main-content">
      <a name="Spinner" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0">
        Spinner/Loader
      </h2>
      <p tabIndex="0" style={{ textAlign: "left" }}>
        Spinners är visuella indikatorer som används i webbapplikationer för att
        visa att en process pågår, till exempel att data laddas eller att
        användaren väntar på ett svar. De representeras ofta som animerade
        cirklar eller andra former som roterar eller pulserar. Även om spinners
        är användbara för att ge visuell feedback till seende användare, kan de
        skapa problem för användare som förlitar sig på hjälpmedel, som
        skärmläsare.
        <br />
        <br />
        För att säkerställa inkludering måste spinners utformas med
        tillgänglighet i åtanke, så att alla användare, oavsett förmåga, kan
        förstå vad som händer på sidan.
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
            <img tabIndex="0" src={spinnerBad} alt="Kod utan WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Problem
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Endast visuell feedback: Spinnern är enbart visuell, vilket
                innebär att den bara gynnar seende användare. Användare med
                synnedsättning eller de som inte kan se skärmen utesluts från
                att förstå laddningsstatusen.
              </li>

              <li tabIndex="0">
                En spinner utan ARIA-attribut, gör att användare med skärmläsare inte får
                någon information om att sidan laddar. Eftersom det saknas en
                textbeskrivning, som till exempel "Laddar...", är skärmläsare
                omedvetna om spinnerns existens och syfte. Detta innebär att
                användare som förlitar sig på hjälpmedel inte får någon
                indikation på att en process pågår.
              </li>
            </ul>
          </p>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={badSpinnerVideo} type="video/mp4" />
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
            <img tabIndex="0" src={spinnerBra} alt="Kod med WAI-ARIA" />
          </div>
          <div className="divider"></div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Lösning
            </h4>
            <ul style={{ textAlign: "left" }}>
              <li tabIndex="0">
                Kompatibilitet med skärmläsare: Spinnern är innesluten i en
                behållare med attributen <code>role="status"</code> och <code>aria-live="polite"</code>.
                Dessa attribut informerar skärmläsare om att innehållet i
                behållaren är dynamiskt och bör meddelas när det ändras.
                <br />
                Ett visuellt dolt <code>span</code>-element används för att ge en
                textbeskrivning ("Laddar...") av spinnern. Detta säkerställer
                att skärmläsare meddelar spinnerns syfte när den visas.
              </li>
              <li tabIndex="0">
                Dynamiska uppdateringar: När spinnern visas uppdateras
                live-regionen med texten "Laddar...". Detta gör att skärmläsaren
                meddelar statusen för användaren.
                <br />
                Efter en kort fördröjning rensas live-regionen för att
                återställa den för framtida uppdateringar, vilket säkerställer
                att den fungerar pålitligt.
              </li>
            </ul>
          </p>
          <div className="divider"></div>
          <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
            Hur detta tolkas i en skärmläsare
          </h4>
          <div className="image-container">
            <video width="100%" controls>
              <source src={goodSpinnerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content3;
